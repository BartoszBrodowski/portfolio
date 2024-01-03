'use client'

import { FunctionComponent, useState } from "react";
import Nav from "./ProjectNav/Nav";
import ProjectsInfo from "./ProjectList/ProjectIsnfo";
import { Project } from "@/interfaces/project.interface";
import { mainNavTabs } from "@/data/navtabs.data";

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
        <div className="flex justify-center items-start h-[560px] w-full border rounded-md">
            <Nav currentFilterField={field} setProjects={changeProjects} changeFilterField={changeFilterField} /> 
            <ProjectsInfo filterField={field} project={clickedProject} setClickedProject={changeProjectIndex} projects={currentProjects} />
        </div>
    );
}
 
export default ProjectMail;