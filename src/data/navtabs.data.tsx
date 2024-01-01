import { NavTabInfo } from "@/interfaces/navtab.interface";
import { File, Inbox, Trash2, Archive } from "lucide-react";

const iconSize = 20

export const navTabs: NavTabInfo[] = [
    {
        name: "Inbox",
        icon: <Inbox size={iconSize} />,
        projects: [
            {
                name: "Guitar Shop",
                date: "2021-08-01",
                shortDescription: " Hi Visitor, \n\nThis is the Guitar Shop project, a fullstack e-commerce web application. \n\nThe tech stack is: React, TypeScript, TailwindCSS, Node.js, Express.js, and MongoDB, as you asked. I hope you like it! Lorem",
                content: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minus atque commodi ipsam sit sint praesentium voluptatum, quibusdam, quos, voluptas quia quae. Quisquam, voluptatum.",
                technologies: ["React", "TypeScript", "TailwindCSS", "Node.js", "Express.js", "MongoDB"],
                github: "https://github.com/BartoszBrodowski/frontend-uni",
                field: "Frontend"
            },
            {
                name: "MacroMaster App",
                date: "2023-10-01",
                shortDescription: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.",
                content: "yo homie i just found this sick app to keep my weight in check, you should check it out too!",
                technologies: ["NextJS", "TailwindCSS", "PostgreSQL", "Prisma", "TypeScript", "Azure"],
                github: "https://github.com/macromaster-app/web-app",
                field: "Fullstack"
            },
            {
                name: "MacroMaster App",
                date: "2023-10-01",
                shortDescription: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.",
                content: "yo homie i just found this sick app to keep my weight in check, you should check it out too!",
                technologies: ["NextJS", "TailwindCSS", "PostgreSQL", "Prisma", "TypeScript", "Azure"],
                github: "https://github.com/macromaster-app/web-app",
                field: "Fullstack"
            },
            {
                name: "MacroMaster App",
                date: "2023-10-01",
                shortDescription: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.",
                content: "yo homie i just found this sick app to keep my weight in check, you should check it out too!",
                technologies: ["NextJS", "TailwindCSS", "PostgreSQL", "Prisma", "TypeScript", "Azure"],
                github: "https://github.com/macromaster-app/web-app",
                field: "Fullstack"
            }
        ],
        isActive: true
    },
    {
        name: "Drafts",
        icon: <File size={iconSize} />,
        projects: [
            {
                name: "MacroMaster App",
                date: "2023-10-01",
                shortDescription: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.",
                content: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minus atque commodi ipsam sit sint praesentium",
                technologies: ["NextJS", "TailwindCSS"],
                github: "blank",
                field: "Fullstack"
            }
        ],
        isActive: true
    },
    {
        name: "Trash",
        icon: <Trash2 size={iconSize} />,
        isActive: false
    },
    {
        name: "Archive",
        icon: <Archive size={iconSize} />,
        isActive: false
    }
]