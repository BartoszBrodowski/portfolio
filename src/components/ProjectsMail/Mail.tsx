'use client'

import { FunctionComponent, useState } from "react";
import Nav from "./ProjectNav/Nav";
import ProjectsInfo from "./ProjectList/ProjectIsnfo";
import { Project } from "@/interfaces/project.interface";
import { mainNavTabs } from "@/data/navtabs.data";
import MobileNav from "./ProjectNav/MobileNav";

interface ProjectMailProps {
    
}
 
const ProjectMail: FunctionComponent<ProjectMailProps> = () => {
    const [clickedProject, setClickedProject] = useState<Project>({} as Project);
    const [field, setField] = useState<string>('All');
    const [currentProjects, setCurrentProjects] = useState<Project[]>(mainNavTabs[0].projects || []);

    const changeProjects = (projects: Project[]) => {
        setCurrentProjects(projects)
        console.log(projects)
    }

    const changeProjectIndex = (project: Project) => {
        setClickedProject(project)
    }

    const changeFilterField = (field: string) => {
        setField(field)
    }


    return (  
        <div className="w-full h-full">
            {/* <MobileNav currentFilterField={field} setProjects={changeProjects} changeFilterField={changeFilterField} /> */}
            <div className="flex flex-col lg:flex-row justify-center items-start h-[560px] w-full border rounded-md">
                <Nav currentFilterField={field} setProjects={changeProjects} changeFilterField={changeFilterField} /> 
                <ProjectsInfo filterField={field} project={clickedProject} setClickedProject={changeProjectIndex} projects={currentProjects} />
            </div>
        </div>
    );
}
 
export default ProjectMail;