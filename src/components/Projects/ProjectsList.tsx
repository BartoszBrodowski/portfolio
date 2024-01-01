import { Project } from "@/interfaces/project.interface";
import { FunctionComponent, useState } from "react";
import ProjectCard from "./ProjectCard";
import { Separator } from "../ui/separator";
import { ScrollArea } from "../ui/scroll-area";
import { Input } from "../ui/input";
import { Search } from "lucide-react";

interface ProjectsListProps {
    projects: Project[];
    setClickedProject: (project: Project) => void;
    setSearchFilter: (event: React.ChangeEvent<HTMLInputElement>) => void;
}
 
const ProjectsList: FunctionComponent<ProjectsListProps> = ({projects, setClickedProject, setSearchFilter}) => {
    const [searchValue, setSearchValue] = useState<string>("");

    const changeProject = (project: Project): void => {
        setClickedProject(project);
    }

    const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
        setSearchValue(event.target.value);
        setSearchFilter(event);
    }

    const filteredProjects = projects.filter(project => project.name.toLowerCase().includes(searchValue.toLowerCase()));

    return (  
        <div className="flex h-full">
            <Separator orientation="vertical" />
            <div className="flex flex-col w-full">
                <div className="flex items-center relative p-4">
                  <Search className="absolute left-6 text-muted-foreground" size={18} />
                  <Input placeholder="Search" className="pl-8 w-full" value={searchValue} onChange={handleSearchChange} />
                </div>
                <ScrollArea className="h-[550px]">
                    <div className="flex flex-col gap-2 p-4 pt-0">
                        {filteredProjects.map((project, index) => {
                            return (
                                <ProjectCard 
                                key={index}
                                project={project}
                                changeProject={changeProject}
                                index={index}
                                />
                            )
                        })}
                    </div>
                </ScrollArea>
            </div>
        </div>
    );
}
 
export default ProjectsList;