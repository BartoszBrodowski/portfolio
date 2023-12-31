'use client'

import { FunctionComponent } from "react";
import { ResizableHandle, ResizablePanel, ResizablePanelGroup } from "../ui/resizable";
import { Separator } from "../ui/separator";
import { Project } from "@/interfaces/project.interface";
import { Card, CardContent, CardFooter, CardHeader } from "../ui/card";
import { Badge } from "../ui/badge";

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
                <ul className="p-4">
                    {projects.map((project) => {
                        return (
                            <Card>
                                <CardHeader className="p-4">
                                    <div className="flex justify-between items-center">
                                        <h2 className="text-sm font-semibold">{project.name}</h2>
                                        <span className="text-xs">{project.date}</span>
                                    </div>
                                </CardHeader>
                                <CardContent className="text-muted-foreground text-sm line-clamp-3 py-1 px-4">
                                    {project.description.substring(0, 300)}
                                </CardContent>
                                <CardFooter className="mt-2 p-4">
                                    <ul className="flex gap-1 flex-wrap">
                                        {project.technologies.map((technology, index) => {
                                            return (
                                                <Badge variant={index > 2 ? 'secondary' : undefined}>
                                                    {technology}
                                                </Badge>
                                            )
                                        })}
                                    </ul>
                                </CardFooter>
                            </Card>
                        )
                    })}
                </ul>
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