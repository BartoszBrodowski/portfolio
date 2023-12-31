import { NavTabInfo } from "@/interfaces/navtab.interface";
import { File, Inbox, Trash2, Archive } from "lucide-react";

const iconSize = 20

export const navTabs: NavTabInfo[] = [
    {
        name: "Inbox",
        icon: <Inbox size={iconSize} />,
        projects: [
            {
                name: "Guitar shop",
                date: "2021-08-01",
                description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.",
                technologies: ["React", "TypeScript", "TailwindCSS", "Node.js", "Express.js", "MongoDB"],
                github: "blank",

            },
            {
                name: "MacroMaster",
                date: "2023-10-01",
                description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minus atque commodi ipsam sit sint praesentium",
                technologies: ["NextJS", "TailwindCSS"],
                github: "blank"
            }
        ],
        isActive: true
    },
    {
        name: "Drafts",
        icon: <File size={iconSize} />,
        projects: [
            {
                name: "MacroMaster",
                date: "2023-10-01",
                description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minus atque commodi ipsam sit sint praesentium",
                technologies: ["NextJS", "TailwindCSS"],
                github: "blank"
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