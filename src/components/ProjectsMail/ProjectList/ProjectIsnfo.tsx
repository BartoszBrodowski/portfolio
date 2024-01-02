'use client'

import { Project } from "@/interfaces/project.interface";
import { FunctionComponent, useState } from "react";
import { ResizableHandle, ResizablePanel, ResizablePanelGroup } from "../../ui/resizable";
import { Separator } from "../../ui/separator";
import ProjectContent from "./ProjectContent/ProjectContent";
import ProjectsList from "./ProjectsList";

interface ProjectsInfoProps {
    projects: Project[];
    project: Project;
    setClickedProject: (project: Project) => void;
    filterField: string;
}
 
const ProjectsInfo: FunctionComponent<ProjectsInfoProps> = ({projects, project, setClickedProject, filterField}) => {
    const [searchFilter, setSearchFilter] = useState<string>("");

    const changeSearchFilter = (event: React.ChangeEvent<HTMLInputElement>): void => {
        setSearchFilter(event.target.value);
    }

    const filteredProjects = projects.filter(project => {
        return (
            (filterField === 'All' || project.field === filterField) &&
            project.name.toLowerCase().includes(searchFilter.toLowerCase())
        );
    });
    return (  
        <ResizablePanelGroup
            direction="horizontal"
            className="min-h-[400px] w-full"
        >
            <ResizablePanel minSize={30}>
                <div className="flex h-[68px]">
                    <Separator orientation="vertical" />
                    <h1 className="flex items-center font-bold text-xl p-4">Projects</h1>
                </div>
                <Separator />
                <ProjectsList projects={filteredProjects} setClickedProject={setClickedProject} setSearchFilter={changeSearchFilter} />
            </ResizablePanel>
            <ResizableHandle withHandle />
            <ResizablePanel minSize={40}>
                <div className="flex h-full items-start justify-center">
                    <ProjectContent project={project} />
                </div>
            </ResizablePanel>
        </ResizablePanelGroup>
    )
}
 
export default ProjectsInfo;