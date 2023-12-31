import { Project } from "@/interfaces/project.interface";
import { FunctionComponent } from "react";
import ProjectContentHeader from "./ProjectContentHeader";
import { Separator } from "@/components/ui/separator";
import SenderInfo from "./SenderInfo";

interface ProjectContentProps {
    project: Project;
}
 
const ProjectContent: FunctionComponent<ProjectContentProps> = ({project}) => {
    return ( 
        <div className="flex flex-col w-full">
            <ProjectContentHeader />
            <Separator />
            <SenderInfo project={project} />
        </div>
    );
}
 
export default ProjectContent;