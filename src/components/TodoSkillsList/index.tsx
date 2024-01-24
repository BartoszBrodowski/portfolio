'use client';

import { todoSkills } from '@/data/todo-skills.data';
import { FunctionComponent } from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '../ui/tabs';
import ToDoSkillsTable from './ToDoSkillsTable';

interface ToDoSkillsListProps {}

const tabs = ['frontend', 'backend', 'python', 'other'];

const ToDoSkillsList: FunctionComponent<ToDoSkillsListProps> = () => {
	return (
		<div id='skills' className='flex items-center min-h-screen w-full'>
			<div className='flex flex-col justify-start items-center gap-8 w-full min-h-[700px]'>
				<div className='flex flex-col text-center gap-2'>
					<h1 className='text-2xl md:text-3xl lg:text-5xl font-bold'>Skills</h1>
					<p className='sm:text-sm md:text-md lg:text-lg text-muted-foreground'>
						I better start working so I'm done by the end of the day...
					</p>
				</div>
				<Tabs defaultValue={tabs[0]} className='w-full lg:w-4/5 h-full'>
					<TabsList className='grid w-full grid-cols-4 lg:w-3/5 xl:w-2/5'>
						{tabs.map((tab, index) => {
							return (
								<TabsTrigger key={index} value={tab}>
									{tab.charAt(0).toUpperCase() + tab.slice(1)}
								</TabsTrigger>
							);
						})}
					</TabsList>
					{todoSkills.map((field, index) => {
						return (
							<TabsContent key={index} value={field.name} className='w-full h-full'>
								<ToDoSkillsTable skills={field.skills} />
							</TabsContent>
						);
					})}
				</Tabs>
			</div>
		</div>
	);
};

export default ToDoSkillsList;
