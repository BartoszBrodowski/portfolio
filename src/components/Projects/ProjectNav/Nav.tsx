'use client'

import { navTabs } from "@/data/navtabs.data";
import { FunctionComponent, useState } from "react";
import NavTab from "./NavTab";
import { Project } from "@/interfaces/project.interface";
import NavTabsList from "./NavTabsList";
import ProfileTab from "./ProfileTab";
import { Separator } from "@/components/ui/separator";

interface NavProps {
    currentFilterField: string;
    setProjects: (projects: Project[]) => void;
    changeFilterField: (field: string) => void;
}

const Nav: FunctionComponent<NavProps> = ({currentFilterField, setProjects, changeFilterField}) => {
    return (  
        <div className="w-full max-w-[250px] my-0">
            <nav>
                <ProfileTab currentField={currentFilterField} changeFilterField={changeFilterField} />
                <Separator orientation="horizontal" className="mb-2" />
                <NavTabsList setProjects={setProjects} tabs={navTabs} />
            </nav>
        </div>
    );
}
 
export default Nav;