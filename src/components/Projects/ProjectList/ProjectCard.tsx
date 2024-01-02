import { FunctionComponent } from "react";
import { Card, CardContent, CardFooter, CardHeader } from "../../ui/card";
import { Project } from "@/interfaces/project.interface";
import { Badge } from "../../ui/badge";
import { formatDistanceToNow } from "date-fns";
import { Dot } from "lucide-react";

interface ProjectCardProps {
    project: Project;
    index: number;
    changeProject: (project: Project) => void;
}
 
const ProjectCard: FunctionComponent<ProjectCardProps> = ({project, index, changeProject}) => {
    return (  
        <Card className="hover:bg-accent hover:cursor-pointer transition-all"
        onClick={() => changeProject(project)}
        >
            <CardHeader className="p-4 pb-2">
                <div className="flex justify-between items-center">
                    <h2 className="text-sm font-semibold">{project.name}</h2>
                    <span className="flex items-center gap-2 text-xs">
                        {formatDistanceToNow(new Date(project.date), {
                            addSuffix: true,
                        })}
                        <span className="flex h-2 w-2 rounded-full bg-main-green" />
                    </span>
                </div>
            </CardHeader>
            <CardContent className="text-muted-foreground text-xs line-clamp-3 py-1 px-4">
                {project.shortDescription.substring(0, 300)}
            </CardContent>
            <CardFooter className="mt-2 p-4 pt-2">
                <ul className="flex gap-1 flex-wrap">
                    {project.technologies.map((technology, index) => {
                        return (
                            <Badge key={index} variant={index > 2 ? 'secondary' : undefined}>
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