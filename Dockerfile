
FROM node:alpine AS builder

WORKDIR /app

COPY package.json .
COPY package-lock.json .

RUN npm install --omit=dev

COPY . .

RUN npm run build

FROM node:alpine

WORKDIR /app

COPY --from=builder /app/.next ./.next
COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /app/package.json ./package.json

EXPOSE 3000

CMD ["npm", "start"]
