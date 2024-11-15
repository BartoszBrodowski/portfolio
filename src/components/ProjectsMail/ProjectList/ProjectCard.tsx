import { Project } from '@/interfaces/project.interface';
import { useDisclosure } from '@nextui-org/react';
import { formatDistanceToNow } from 'date-fns';
import { Github } from 'lucide-react';
import Link from 'next/link';
import { FunctionComponent } from 'react';
import { Badge } from '../../ui/badge';
import { Card, CardContent, CardFooter, CardHeader } from '../../ui/card';
import ProjectModal from './ProjectContent/ProjectModal';
import { cn } from '@/lib/utils';

interface ProjectCardProps {
	project: Project;
	changeProject: (project: Project) => void;
	mobile: boolean;
	className?: string;
	isClicked?: boolean;
}

const ProjectCard: FunctionComponent<ProjectCardProps> = ({
	project,
	changeProject,
	mobile,
	className,
	isClicked,
}) => {
	const { isOpen, onOpen, onOpenChange } = useDisclosure();
	const showProject = (): void => {
		changeProject(project);
		if (mobile) {
			onOpen();
		}
	};
	return (
		<Card
			className={cn('hover:bg-accent hover:cursor-pointer transition-all', className, {
				'bg-accent': isClicked,
			})}
			onClick={() => showProject()}>
			<CardHeader className='p-4 pb-2'>
				<div className='flex justify-between items-center'>
					<h2 className='text-sm font-semibold'>{project.name}</h2>
					<div className='flex items-center gap-2 text-xs'>
						{formatDistanceToNow(new Date(project.date), {
							addSuffix: true,
						})}
						<span className='flex h-2 w-2 rounded-full bg-main-green' />
					</div>
				</div>
			</CardHeader>
			<CardContent className='text-xs line-clamp-3 py-1 px-4'>
				<div className='flex items-center gap-2 mb-2'>
					<Github size={12} />
					<Link
						href={project.github}
						target='#'
						className='hover:text-main-green transition-all transform-150 w-fit underline'>
						{project.github}
					</Link>
				</div>
				<ProjectModal
					project={project}
					isOpen={isOpen}
					onOpenChange={onOpenChange}
					onClose={onOpenChange}
				/>
				<p className='text-muted-foreground'>{project.shortDescription.substring(0, 300)}</p>
			</CardContent>
			<CardFooter className='mt-2 p-4 pt-2'>
				<ul className='flex gap-1 flex-wrap'>
					{project.technologies.map((technology, index) => {
						return (
							<Badge key={index} variant={index > 2 ? 'secondary' : undefined}>
								{technology}
							</Badge>
						);
					})}
				</ul>
			</CardFooter>
		</Card>
	);
};

export default ProjectCard;
