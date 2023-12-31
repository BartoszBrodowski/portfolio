import { FunctionComponent } from "react";
import { Card, CardContent, CardFooter, CardHeader } from "../ui/card";

import { Project } from "@/interfaces/project.interface";
import { Badge } from "../ui/badge";

interface ProjectCardProps {
    project: Project
}
 
const ProjectCard: FunctionComponent<ProjectCardProps> = ({project}) => {
    return (  
        <Card className="hover:bg-accent hover:cursor-pointer transition-all">
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
    );
}
 
export default ProjectCard;