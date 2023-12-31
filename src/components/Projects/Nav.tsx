'use client'

import { navTabs } from "@/data/navtabs.data";
import { FunctionComponent, useState } from "react";
import NavTab from "./NavTab";
import { Project } from "@/interfaces/project.interface";

interface NavProps {
    setProjects: (projects: Project[]) => void
}

const Nav: FunctionComponent<NavProps> = ({setProjects}) => {
    const [clicked, setClicked] = useState<number>(0);

    const changeTab = (index: number): void => {
        setClicked(index);
        setProjects(navTabs[index].projects!)
    }

    return (  
        <div className="w-full max-w-[200px] m-2">
            <nav>
                <ul className="flex flex-col gap-1">
                    {navTabs.map((tab, index) => {
                        return (
                            <NavTab isClicked={clicked === index} changeTab={changeTab} key={index} tab={tab} index={index} />
                        )
                    })}
                </ul>
            </nav>
        </div>
    );
}
 
export default Nav;