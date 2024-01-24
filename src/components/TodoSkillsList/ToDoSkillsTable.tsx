import { AdvanceLevel } from '@/enums/advance-level.enum';
import { Skill } from '@/interfaces/skill.interface';
import { cn } from '@/lib/utils';
import { Checkbox, Chip } from '@nextui-org/react';
import { FunctionComponent } from 'react';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '../ui/table';

interface ToDoSkillsTableProps {
	skills: Skill[];
}

const ToDoSkillsTable: FunctionComponent<ToDoSkillsTableProps> = ({ skills }) => {
	const compareByAdvancementLevel = (a: Skill, b: Skill) => {
		const order = [AdvanceLevel.ADVANCED, AdvanceLevel.INTERMEDIATE, AdvanceLevel.BEGINNER];
		return order.indexOf(a.advancementLevel) - order.indexOf(b.advancementLevel);
	};
	return (
		<div className='h-full'>
			<Table>
				<TableHeader>
					<TableRow>
						<TableHead className='w-[150px]'>Status</TableHead>
						<TableHead className='flex items-center gap-4 w-[100px]'>Skill</TableHead>
						<TableHead>Advancement</TableHead>
						<TableHead className='hidden lg:inline'>Description</TableHead>
						<TableHead className='text-right whitespace-nowrap'>Started learning</TableHead>
					</TableRow>
				</TableHeader>
				<TableBody>
					{skills.sort(compareByAdvancementLevel).map((skill, index) => (
						<TableRow key={index}>
							<TableCell>
								<Checkbox defaultSelected lineThrough>
									<h1 className='hidden lg:block'>To learn</h1>
								</Checkbox>
							</TableCell>
							<TableCell className='font-medium'>{skill.name}</TableCell>
							<TableCell
								className={cn(
									skill.advancementLevel === AdvanceLevel.ADVANCED && 'text-green-500',
									skill.advancementLevel === AdvanceLevel.INTERMEDIATE && 'text-yellow-500',
									skill.advancementLevel === AdvanceLevel.BEGINNER && 'text-red-500'
								)}>
								<Chip
									variant='flat'
									className={cn(
										skill.advancementLevel === AdvanceLevel.ADVANCED && 'bg-main-green',
										skill.advancementLevel === AdvanceLevel.INTERMEDIATE && 'bg-main-orange',
										skill.advancementLevel === AdvanceLevel.BEGINNER && 'bg-main-red text-white'
									)}>
									{skill.advancementLevel}
								</Chip>
							</TableCell>
							<TableCell className='hidden lg:block'>{skill.description}</TableCell>
							<TableCell className='text-right'>{skill.startedLearningDate}</TableCell>
						</TableRow>
					))}
				</TableBody>
			</Table>
		</div>
	);
};

export default ToDoSkillsTable;
