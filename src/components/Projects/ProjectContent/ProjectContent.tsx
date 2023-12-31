import { Project } from "@/interfaces/project.interface";
import { FunctionComponent } from "react";
import ProjectContentHeader from "./ProjectContentHeader";
import { Separator } from "@/components/ui/separator";

interface ProjectContentProps {
    project: Project;
}
 
const ProjectContent: FunctionComponent<ProjectContentProps> = ({project}) => {
    return ( 
        <div className="flex flex-col w-full">
            <ProjectContentHeader />
            <Separator />
        </div>
    );
}
 
export default ProjectContent;