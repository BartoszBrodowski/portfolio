import { Project } from "@/interfaces/project.interface";
import { FunctionComponent } from "react";

interface ProjectContentProps {
    project: Project;
}
 
const ProjectContent: FunctionComponent<ProjectContentProps> = ({project}) => {
    return ( 
        <div>
            {project.name}
        </div>
    );
}
 
export default ProjectContent;