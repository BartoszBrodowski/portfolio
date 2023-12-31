import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Separator } from "@/components/ui/separator";
import { Project } from "@/interfaces/project.interface";
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
                    <div>
                        <h1 className="text-sm font-semibold">{project.name}</h1>
                        <p className="text-xs w-[300px]">{project.shortDescription}</p>
                    </div>
                </div>
                <span className="text-xs text-muted-foreground">{project.date}</span>
            </div>
            <Separator />
        </>
    );
}
 
export default SenderInfo;