'use client'

import { NavTabInfo } from "@/interfaces/navtab.interface";
import { FunctionComponent, useState } from "react";
import { mainNavTabs, otherNavTabs } from "@/data/navtabs.data";
import { Project } from "@/interfaces/project.interface";
import NavTab from "./NavTab";
import { Separator } from "@/components/ui/separator";

interface NavTabsListProps {
    setProjects: (projects: Project[]) => void;
}
 
const NavTabsList: FunctionComponent<NavTabsListProps> = ({setProjects}) => {
    const [clicked, setClicked] = useState<number>(0);

    const changeTab = (index: number): void => {
        setClicked(index);
        setProjects(mainNavTabs[index].projects!)
    }
    return (  
        <>
            <ul className="flex flex-col gap-1 m-2 md:m-4">
                {mainNavTabs.map((tab, index) => {
                    return (
                        tab.name === 'Drafts' ?
                            <NavTab isClicked={clicked === index} changeTab={changeTab} key={index} tab={tab} index={index} />
                        :
                            <NavTab isClicked={clicked === index} changeTab={changeTab} key={index} tab={tab} index={index} />
                    )
                })}
            </ul>
            <Separator className="hidden lg:block" />
            <ul className="flex flex-col gap-1 m-2 md:m-4">
                {otherNavTabs.map((tab, index) => {
                    return (
                        <NavTab isClicked={false} changeTab={changeTab} key={index} tab={tab} index={index} />
                    )
                })}
            </ul>
        </>
    );
}
 
export default NavTabsList;