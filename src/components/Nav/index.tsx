'use client';

import { IconTooltip } from '@/interfaces/icon-tooltip.interface';
import { Tooltip } from '@nextui-org/react';
import { FolderDot, Home, Info, Lightbulb, Mail } from 'lucide-react';
import { Button } from '../ui/button';
import Link from 'next/link';

const iconSize = 24;

interface NavTooltip extends IconTooltip {
	id: string;
}

const icons: NavTooltip[] = [
	{
		element: <Home size={iconSize} />,
		tooltipText: 'Home',
		id: 'home',
	},
	{
		element: <Info size={iconSize} />,
		tooltipText: 'About',
		id: 'about',
	},
	{
		element: <Lightbulb size={iconSize} />,
		tooltipText: 'Skills',
		id: 'skills',
	},
	{
		element: <FolderDot size={iconSize} />,
		tooltipText: 'Projects',
		id: 'projects',
	},
	{
		element: <Mail size={iconSize} />,
		tooltipText: 'Contact',
		id: 'contact',
	},
];

const Nav = () => {
	function scrollToElement(id: string) {
		const element = document.getElementById(id);

		if (element) {
			element.scrollIntoView({ behavior: 'smooth' });
		}
	}
	return (
		<div className='fixed left-0 top-1/2 transform -translate-y-1/2 rounded-md p-3 hidden lg:block'>
			<ul className='flex flex-col gap-4'>
				{icons.map((icon, index) => {
					return (
						<Tooltip
							delay={0}
							closeDelay={0}
							key={index}
							content={icon.tooltipText}
							placement='left'>
							<Button
								onClick={() => scrollToElement(icon.id)}
								variant='outline'
								className='p-0 px-2 flex items-center justify-center'>
								{icon.element}
							</Button>
						</Tooltip>
					);
				})}
			</ul>
		</div>
	);
};

export default Nav;
