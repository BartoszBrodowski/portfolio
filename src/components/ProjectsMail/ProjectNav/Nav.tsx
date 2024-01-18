'use client'

import { Separator } from "@/components/ui/separator";
import { Project } from "@/interfaces/project.interface";
import { FunctionComponent } from "react";
import NavTabsList from "./NavTabsList";
import ProfileTab from "./ProfileTab";

interface NavProps {
    currentFilterField: string;
    setProjects: (projects: Project[]) => void;
    changeFilterField: (field: string) => void;
}

const Nav: FunctionComponent<NavProps> = ({currentFilterField, setProjects, changeFilterField}) => {
    return (  
        <div className="xl:w-full lg:max-w-[250px] sm:max-w-[200px] my-0 hidden lg:block">
            <nav>
                <ProfileTab currentField={currentFilterField} changeFilterField={changeFilterField} />
                <Separator orientation="horizontal" className="mb-2" />
                <NavTabsList setProjects={setProjects} />
            </nav>
        </div>
    );
}
 
export default Nav;