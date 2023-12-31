'use client';

import { FunctionComponent, useState } from "react";
import Nav from "./ProjectNav/Nav";
import ProjectsInfo from "./ProjectIsnfo";
import { Separator } from "../ui/separator";
import { Project } from "@/interfaces/project.interface";
import { navTabs } from "@/data/navtabs.data";

const Projects: FunctionComponent = () => {
    const [clickedProject, setClickedProject] = useState<number>(0);
    const [field, setField] = useState<string>('Frontend');
    const [currentProjects, setCurrentProjects] = useState<Project[]>(navTabs[0].projects || []);

    const changeProjects = (projects: Project[]) => {
        setCurrentProjects(projects)
        console.log(projects)
    }

    const changeProjectIndex = (index: number) => {
        setClickedProject(index)
    }

    const changeFilterField = (field: string) => {
        setField(field)
    }

    return (  
        <div className="flex justify-center items-start h-full min-h-[600px] w-full border rounded-md">
            <Nav currentFilterField={field} setProjects={changeProjects} changeFilterField={changeFilterField} /> 
            <Separator orientation="vertical" />
            <ProjectsInfo filterField={field} clickedProjectIndex={clickedProject} setClickedProject={changeProjectIndex} projects={currentProjects} />
        </div>
    );
}
 
export default Projects;
