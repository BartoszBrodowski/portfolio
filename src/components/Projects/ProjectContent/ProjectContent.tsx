import { Project } from "@/interfaces/project.interface";
import { FunctionComponent } from "react";
import ProjectContentHeader from "./ProjectContentHeader";
import { Separator } from "@/components/ui/separator";
import SenderInfo from "./SenderInfo";

interface ProjectContentProps {
    project: Project;
}
 
const ProjectContent: FunctionComponent<ProjectContentProps> = ({project}) => {
    const initials = project.name.split(' ').map(word => word[0]).join('')
    return ( 
        <div className="flex flex-col w-full">
            <ProjectContentHeader />
            <Separator />
            <SenderInfo project={project} initials={initials} />
        </div>
    );
}
 
export default ProjectContent;