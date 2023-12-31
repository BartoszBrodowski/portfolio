'use client'

import { NavTabInfo } from "@/interfaces/navtab.interface";
import { FunctionComponent, useState } from "react";
import { navTabs } from "@/data/navtabs.data";
import { Project } from "@/interfaces/project.interface";
import NavTab from "./NavTab";

interface NavTabsListProps {
    tabs: NavTabInfo[];
    setProjects: (projects: Project[]) => void;
}
 
const NavTabsList: FunctionComponent<NavTabsListProps> = ({tabs, setProjects}) => {
    const [clicked, setClicked] = useState<number>(0);

    const changeTab = (index: number): void => {
        setClicked(index);
        setProjects(navTabs[index].projects!)
    }
    return (  
        <ul className="flex flex-col gap-1 m-2">
            {navTabs.map((tab, index) => {
                return (
                    <NavTab isClicked={clicked === index} changeTab={changeTab} key={index} tab={tab} index={index} />
                )
            })}
        </ul>
    );
}
 
export default NavTabsList;