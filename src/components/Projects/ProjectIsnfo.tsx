'use client'

import { FunctionComponent } from "react";
import { ResizableHandle, ResizablePanel, ResizablePanelGroup } from "../ui/resizable";
import { Separator } from "../ui/separator";
import { Project } from "@/interfaces/project.interface";
import { Card, CardContent, CardFooter, CardHeader } from "../ui/card";
import { Badge } from "../ui/badge";
import ProjectCard from "./ProjectCard";
import ProjectsList from "./ProjectsList";

interface ProjectsInfoProps {
    projects: Project[];
}
 
const ProjectsInfo: FunctionComponent<ProjectsInfoProps> = ({projects}) => {
    return (  
        <ResizablePanelGroup
            direction="horizontal"
            className="min-h-[200px] w-full"
        >
            <ResizablePanel style={{ minWidth: '400px' }} defaultSize={25}>
                <h1 className="font-bold text-xl p-4">Projects Info</h1>
                <Separator />
                <ProjectsList projects={projects} />
            </ResizablePanel>
            <ResizableHandle withHandle />
            <ResizablePanel defaultSize={75}>
                <div className="flex h-full items-center justify-center p-6">
                    <span className="font-semibold">Content</span>
                </div>
            </ResizablePanel>
        </ResizablePanelGroup>
    )
}
 
export default ProjectsInfo;