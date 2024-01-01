'use client'

import { Project } from "@/interfaces/project.interface";
import { FunctionComponent } from "react";
import { ResizableHandle, ResizablePanel, ResizablePanelGroup } from "../ui/resizable";
import { Separator } from "../ui/separator";
import ProjectContent from "./ProjectContent/ProjectContent";
import ProjectsList from "./ProjectsList";

interface ProjectsInfoProps {
    projects: Project[];
    project: Project;
    setClickedProject: (project: Project) => void;
    filterField: string;
}
 
const ProjectsInfo: FunctionComponent<ProjectsInfoProps> = ({projects, project, setClickedProject, filterField}) => {
    const filteredProjects = projects.filter(project => {
        return filterField === 'All' ? project : project.field === filterField
    })
    return (  
        <ResizablePanelGroup
            direction="horizontal"
            className="min-h-[600px] w-full"
        >
            <ResizablePanel defaultSize={45}>
                <div className="flex h-[72px]">
                    <Separator orientation="vertical" />
                    <h1 className="flex items-center font-bold text-xl p-4">Projects</h1>
                </div>
                <Separator />
                <ProjectsList projects={filteredProjects} setClickedProject={setClickedProject} />
            </ResizablePanel>
            <ResizableHandle withHandle />
            <ResizablePanel defaultSize={55}>
                <div className="flex h-full items-start justify-center">
                    <ProjectContent project={project} />
                </div>
            </ResizablePanel>
        </ResizablePanelGroup>
    )
}
 
export default ProjectsInfo;