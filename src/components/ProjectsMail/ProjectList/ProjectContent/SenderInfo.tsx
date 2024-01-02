import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Separator } from "@/components/ui/separator";
import { Project } from "@/interfaces/project.interface";
import { AppWindow, Github } from "lucide-react";
import Link from "next/link";
import { FunctionComponent, useEffect, useRef, useState } from "react";

interface SenderInfoProps {
    project: Project;
    initials: string;
}
 
const SenderInfo: FunctionComponent<SenderInfoProps> = ({project, initials}) => {
    const [isLinkVisible, setIsLinkVisible] = useState(true);

    const linkRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const handleResize = () => {
            if (linkRef.current) {
                const isLinkVisible = linkRef.current.offsetWidth >= 400;
                setIsLinkVisible(isLinkVisible);
            }
        };
    
        const resizeObserver = new ResizeObserver(handleResize);
    
        if (linkRef.current) {
          resizeObserver.observe(linkRef.current);
        }
    
        return () => {
          if (linkRef.current) {
            resizeObserver.unobserve(linkRef.current);
          }
        };
    }, []);    

    return (  
            <>
            <div ref={linkRef} className="flex justify-between items-start p-4">
                <div className="flex items-center gap-4">
                    <Avatar>
                        <AvatarFallback>{initials}</AvatarFallback>
                    </Avatar>
                    <div className="flex flex-col gap-2">
                        <h1 className="text-sm font-semibold">{project.name}</h1>
                        <div className="text-xs flex items-center underline hover:cursor-pointer">
                            <div className="min-w-2 pr-2">
                                <Github size={16} />
                            </div>
                            {isLinkVisible ? (
                                <Link className="hover:text-main-green transition-all transform-150" href={project.github} target="#">
                                    {project.github}
                                </Link>
                            ) :
                            (
                                <Link className="hover:text-main-green transition-all transform-150" href={project.github} target="#">
                                    Github
                                </Link>
                            ) 
                            }
                        </div>
                        {project.preview && (
                            <div className="text-xs flex items-center underline hover:cursor-pointer">
                                <div className="min-w-2 pr-2">
                                    <AppWindow size={16} />
                                </div>
                            {isLinkVisible ? (
                                <Link className="hover:text-main-green transition-all transform-150" href={project.preview} target="#">
                                    {project.preview}
                                </Link>
                            ) :
                            (
                                <Link className="hover:text-main-green transition-all transform-150" href={project.preview} target="#">
                                    Live Preview
                                </Link>
                            )}
                            </div>
                        )}
                    </div>
                </div>
            <span className="text-xs text-muted-foreground">{project.date}</span>
            </div>
            <Separator />
        </>
    );
}
 
export default SenderInfo;