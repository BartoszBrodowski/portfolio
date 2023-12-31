import { Project } from "@/interfaces/project.interface";
import { FunctionComponent } from "react";
import ProjectContentHeader from "./ProjectContentHeader";
import { Separator } from "@/components/ui/separator";
import SenderInfo from "./SenderInfo";

interface ProjectContentProps {
    project: Project;
    filterField: string;
}
 
const ProjectContent: FunctionComponent<ProjectContentProps> = ({project, filterField}) => {
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