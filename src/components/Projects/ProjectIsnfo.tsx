'use client'

import { Project } from "@/interfaces/project.interface";
import { FunctionComponent } from "react";
import { ResizableHandle, ResizablePanel, ResizablePanelGroup } from "../ui/resizable";
import { Separator } from "../ui/separator";
import ProjectContent from "./ProjectContent/ProjectContent";
import ProjectsList from "./ProjectsList";

interface ProjectsInfoProps {
    projects: Project[];
    clickedProjectIndex: number;
    setClickedProject: (index: number) => void;
    filterField: string;
}
 
const ProjectsInfo: FunctionComponent<ProjectsInfoProps> = ({projects, clickedProjectIndex, setClickedProject, filterField}) => {
    const filteredProjects = projects.filter(project => project.field === filterField)
    return (  
        <ResizablePanelGroup
            direction="horizontal"
            className="min-h-[200px] w-full"
        >
            <ResizablePanel style={{ minWidth: '400px' }} defaultSize={25}>
                <h1 className="font-bold text-xl p-4">Projects Info</h1>
                <Separator />
                <ProjectsList projects={filteredProjects} setClickedProject={setClickedProject} />
            </ResizablePanel>
            <ResizableHandle withHandle />
            <ResizablePanel defaultSize={75}>
                <div className="flex h-full items-start justify-center">
                    <ProjectContent field={filterField} project={projects[clickedProjectIndex]} />
                </div>
            </ResizablePanel>
        </ResizablePanelGroup>
    )
}
 
export default ProjectsInfo;