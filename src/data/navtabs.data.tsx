import GuitarShop from '@/components/ProjectsMail/ModalDisplays/GuitarShop';
import MacroMaster from '@/components/ProjectsMail/ModalDisplays/MacroMaster';
import SerenadeStrings from '@/components/ProjectsMail/ModalDisplays/SerenadeStrings';
import { NavTabInfo } from '@/interfaces/navtab.interface';
import { Project } from '@/interfaces/project.interface';
import {
	File,
	Inbox,
	Trash2,
	Archive,
	UsersRound,
	Bell,
	MessagesSquare,
	Tag,
	AlertCircle,
} from 'lucide-react';

const iconSize = 20;

const mainNavTabs: NavTabInfo[] = [
	{
		name: 'Inbox (done)',
		icon: <Inbox size={iconSize} />,
		projects: [
			{
				name: 'Guitar Shop (React+Redux)',
				date: '2022-01-30',
				shortDescription:
					"Hi Visitor, \n\nThis is the 🎸 Guitar Shop project, a frontend e-commerce web application. Little addition of backend in form of a database and authentication using JWT. \n\nI've made this project as a final for Frontend Web Development course at my University. Since then I've developed significantly as a programmer, but I think it shows my journey quite well. Currently, I would do things very differently, the primary thing being to change JS to TS, but that's what I knew back then. \n\nI hope you'll enjoy it! \n\nBest regards, \nBartosz Brodowski",
				technologies: ['React', 'Redux', 'TailwindCSS', 'JavaScript', 'Express.js', 'MongoDB'],
				github: 'https://github.com/BartoszBrodowski/frontend-uni/tree/main/guitar-shop',
				field: 'Frontend',
				modalComponent: (
					<GuitarShop
						github={'https://github.com/BartoszBrodowski/frontend-uni/tree/main/guitar-shop'}
					/>
				),
			},
			{
				name: 'Serenade Strings',
				date: '2024-01-01',
				shortDescription:
					"We are currently rebranding Guitar Shop \n\nRebranding is going well, this time using NextJS. In addition I have PostgreSQL database and Prisma ORM. Using tRPC for the API and zod for tRPC input types. It is well supported by Next so the team decided that it would be a good idea. Components are from shadcn UI component library and NextUI, as they're styles match well together. \n\nI am looking forward to talking to you sometime this week about the progress of the project. \n\nBest regards, \nProject Architect",
				technologies: [
					'NextJS',
					'TailwindCSS',
					'TypeScript',
					'PostgreSQL',
					'Prisma',
					'tRPC',
					'Shadcn',
				],
				github: 'https://github.com/BartoszBrodowski/serenade-strings',
				field: 'Fullstack',
				modalComponent: (
					<SerenadeStrings github='https://github.com/BartoszBrodowski/serenade-strings' />
				),
			},
			{
				name: 'MacroMaster App',
				date: '2023-10-01',
				shortDescription:
					'🍎 MacroMaster is waiting to help you with your diet. \n\nIt is a web application that allows you to calculate 💻 your daily caloric needs and track your daily intake of calories and macronutrients. It also allows you to create your own recipes and add them to your daily intake. \n\n Get going with improving your diet today!',
				technologies: ['NextJS', 'TailwindCSS', 'PostgreSQL', 'Prisma', 'TypeScript', 'Azure'],
				github: 'https://github.com/macromaster-app/web-app',
				field: 'Fullstack',
				preview: 'https://macro-master-app.vercel.app/',
				modalComponent: <MacroMaster github='https://github.com/macromaster-app/web-app' />,
			},
		],
		isActive: true,
	},
	{
		name: 'In Progress',
		icon: <File size={iconSize} />,
		projects: [
			{
				name: 'MacroMaster App',
				date: '2023-10-01',
				shortDescription:
					'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.',
				technologies: ['NextJS', 'TailwindCSS'],
				github: 'blank',
				field: 'Fullstack',
			},
		],
		isActive: true,
	},
	{
		name: 'Trash',
		icon: <Trash2 size={iconSize} />,
		isActive: false,
	},
	{
		name: 'Archive',
		icon: <Archive size={iconSize} />,
		isActive: false,
	},
];

const otherNavTabs: NavTabInfo[] = [
	{
		name: 'Social',
		icon: <UsersRound size={iconSize} />,
		isActive: false,
	},
	{
		name: 'Notifications',
		icon: <Bell size={iconSize} />,
		isActive: false,
	},
	{
		name: 'Forums',
		icon: <MessagesSquare size={iconSize} />,
		isActive: false,
	},
	{
		name: 'Tags',
		icon: <Tag size={iconSize} />,
		isActive: false,
	},
	{
		name: 'Spam',
		icon: <AlertCircle size={iconSize} />,
		isActive: false,
	},
];

function getAllProjects() {
	const allProjects: Project[] = [];
	const projectNamesSet = new Set();

	mainNavTabs.forEach((tab) => {
		if (tab.projects && tab.projects.length > 0) {
			tab.projects.forEach((project) => {
				if (!projectNamesSet.has(project.name)) {
					projectNamesSet.add(project.name);
					allProjects.push(project);
				}
			});
		}
	});

	return allProjects;
}

export { mainNavTabs, otherNavTabs, getAllProjects };
