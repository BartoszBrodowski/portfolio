import { Project } from "@/interfaces/project.interface";
import { FunctionComponent } from "react";
import ProjectCard from "./ProjectCard";

interface ProjectsListProps {
    projects: Project[];
}
 
const ProjectsList: FunctionComponent<ProjectsListProps> = ({projects}) => {
    return (  
        <ul className="p-4">
            {projects.map((project) => {
                return (
                    <ProjectCard project={project} />
                )
            })}
        </ul>
    );
}
 
export default ProjectsList;