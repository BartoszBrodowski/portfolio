'use client';

import { FunctionComponent, useState } from "react";
import Nav from "./Nav";
import ProjectsInfo from "./ProjectIsnfo";
import { Separator } from "../ui/separator";
import { Project } from "@/interfaces/project.interface";
import { navTabs } from "@/data/navtabs.data";

const Projects: FunctionComponent = () => {
    const [currentProjects, setCurrentProjects] = useState<Project[]>(navTabs[0].projects || []);

    const changeProjects = (projects: Project[]) => {
        setCurrentProjects(projects)
        console.log(projects)
    }
    return (  
        <div className="flex justify-center items-start h-full w-full border rounded-md">
            <Nav setProjects={changeProjects} /> 
            <Separator orientation="vertical" />
            <ProjectsInfo projects={currentProjects} />
        </div>
    );
}
 
export default Projects;
