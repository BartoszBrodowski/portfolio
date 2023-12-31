import { Project } from "@/interfaces/project.interface";
import { FunctionComponent } from "react";
import ProjectCard from "./ProjectCard";

interface ProjectsListProps {
    projects: Project[];
    setClickedProject: (index: number) => void
}
 
const ProjectsList: FunctionComponent<ProjectsListProps> = ({projects, setClickedProject}) => {
    const changeProject = (index: number): void => {
        setClickedProject(index);
    }
    return (  
        <ul className="p-4">
            {projects.map((project, index) => {
                return (
                    <ProjectCard 
                    key={index}
                    project={project}
                    changeProject={changeProject}
                    index={index}
                    />
                )
            })}
        </ul>
    );
}
 
export default ProjectsList;