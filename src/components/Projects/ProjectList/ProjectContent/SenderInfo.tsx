import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Separator } from "@/components/ui/separator";
import { Project } from "@/interfaces/project.interface";
import { AppWindow, Github } from "lucide-react";
import Link from "next/link";
import { FunctionComponent } from "react";

interface SenderInfoProps {
    project: Project;
    initials: string;
}
 
const SenderInfo: FunctionComponent<SenderInfoProps> = ({project, initials}) => {
    return (  
        <>
            <div className="flex justify-between items-start p-4">
                <div className="flex items-center gap-4">
                    <Avatar>
                        <AvatarFallback>
                            {initials}
                        </AvatarFallback>
                    </Avatar>
                    <div className="flex flex-col gap-2">
                        <h1 className="text-sm font-semibold">{project.name}</h1>
                        <h2 className="text-xs flex items-center gap-1 underline hover:cursor-pointer">
                            <Github size={16} />
                            <Link className="hover:text-main-green transition-all transform-150" href={project.github} target="#"> 
                                {project.github}
                            </Link>
                        </h2>
                        {project.preview &&
                            <h2 className="text-xs flex items-center gap-1 underline hover:cursor-pointer">
                                <AppWindow size={16} />
                                <Link className="hover:text-main-green transition-all transform-150" href={project.preview} target="#">
                                    {project.preview}
                                </Link>
                            </h2>
                        }
                    </div>
                </div>
                <span className="text-xs text-muted-foreground">{project.date}</span>
            </div>
            <Separator />
        </>
    );
}
 
export default SenderInfo;