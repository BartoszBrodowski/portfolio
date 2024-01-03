import GuitarShop from "@/components/ProjectsMail/ModalDisplays/GuitarShop";
import { NavTabInfo } from "@/interfaces/navtab.interface";
import { File, Inbox, Trash2, Archive, UsersRound, Bell, MessagesSquare, Tag, AlertCircle } from "lucide-react";

const iconSize = 20

const mainNavTabs: NavTabInfo[] = [
    {
        name: "Inbox (done)",
        icon: <Inbox size={iconSize} />,
        projects: [
            {
                name: "Guitar Shop",
                date: "2022-01-30",
                shortDescription: " Hi Visitor, \n\nThis is the Guitar Shop project, a frontend e-commerce web application. Little addition of backend in form of a database and authentication using JWT. \n\nI've made this project as a final for Frontend Web Development course at my University. Since then I've developed significantly as a programmer, but I think it shows my journey quite well. Currently, I would do things very differently, the primary thing being to change JS to TS, but that's what I knew back then. \n\nI hope you'll enjoy it! \n\nBest regards, \nBartosz Brodowski",
                technologies: ["React", "Redux", "TailwindCSS", "JavaScript", "Express.js", "MongoDB"],
                github: "https://github.com/BartoszBrodowski/frontend-uni/tree/main/guitar-shop",
                field: "Frontend",
                modalComponent: <GuitarShop github={'https://github.com/BartoszBrodowski/frontend-uni/tree/main/guitar-shop'} />
            },
            {
                name: "MacroMaster App",
                date: "2023-10-01",
                shortDescription: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.",
                technologies: ["NextJS", "TailwindCSS", "PostgreSQL", "Prisma", "TypeScript", "Azure"],
                github: "https://github.com/macromaster-app/web-app",
                field: "Fullstack",
                preview: "https://macro-master-app.vercel.app/"
            },
        ],
        isActive: true
    },
    {
        name: "Drafts (in progress)",
        icon: <File size={iconSize} />,
        projects: [
            {
                name: "MacroMaster App",
                date: "2023-10-01",
                shortDescription: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.",
                technologies: ["NextJS", "TailwindCSS"],
                github: "blank",
                field: "Fullstack"
            },
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
    },
]

const otherNavTabs: NavTabInfo[] = [
    {
        name: "Social",
        icon: <UsersRound size={iconSize} />,
        isActive: false
    },
    {
        name: "Notifications",
        icon: <Bell size={iconSize} />,
        isActive: false
    },
    {
        name: "Forums",
        icon: <MessagesSquare size={iconSize} />,
        isActive: false
    },
    {
        name: "Tags",
        icon: <Tag size={iconSize} />,
        isActive: false
    },
    {
        name: "Spam",
        icon: <AlertCircle size={iconSize} />,
        isActive: false
    },

]

export { mainNavTabs, otherNavTabs }