import { getAllProjects } from '@/data/navtabs.data';
import { Project } from '@/interfaces/project.interface';
import { Search } from 'lucide-react';
import { FunctionComponent, useState } from 'react';
import { Input } from '../../ui/input';
import { ScrollArea } from '../../ui/scroll-area';
import { Separator } from '../../ui/separator';
import ProjectCard from './ProjectCard';

interface ProjectsListProps {
	clickedProject: Project;
	projects: Project[];
	setClickedProject: (project: Project) => void;
	setSearchFilter: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const ProjectsList: FunctionComponent<ProjectsListProps> = ({
	clickedProject,
	projects,
	setClickedProject,
	setSearchFilter,
}) => {
	const [searchValue, setSearchValue] = useState<string>('');

	const changeProject = (project: Project): void => {
		setClickedProject(project);
	};

	const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
		setSearchValue(event.target.value);
		setSearchFilter(event);
	};

	const filteredProjects = projects.filter((project) =>
		project.name.toLowerCase().includes(searchValue.toLowerCase())
	);

	const allProjects = getAllProjects();

	return (
		<div className='flex h-full'>
			<Separator orientation='vertical' className='hidden lg:block' />
			<div className='flex flex-col w-full'>
				<div className='flex items-center relative p-4'>
					<Search className='absolute left-6 text-muted-foreground' size={18} />
					<Input
						placeholder='Search'
						className='pl-8 w-full'
						value={searchValue}
						onChange={handleSearchChange}
					/>
				</div>
				<ScrollArea className='h-[550px]'>
					<div className='hidden lg:block flex flex-col gap-2 p-4 pt-0 mb-16'>
						{filteredProjects.map((project, index) => {
							const isClicked = project === clickedProject;
							return (
								<ProjectCard
									className='mb-4'
									key={index}
									project={project}
									changeProject={changeProject}
									mobile={false}
									isClicked={isClicked}
								/>
							);
						})}
					</div>
					<div className='block lg:hidden flex flex-col gap-2 p-4 pt-0'>
						{allProjects.map((project, index) => {
							return (
								<ProjectCard key={index} project={project} changeProject={changeProject} mobile />
							);
						})}
					</div>
				</ScrollArea>
			</div>
		</div>
	);
};

export default ProjectsList;
