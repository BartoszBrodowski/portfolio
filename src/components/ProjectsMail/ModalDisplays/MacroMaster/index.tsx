import React, { FunctionComponent } from 'react';
import ModalCard from '../ModalCard';
import ModalHeader from '../ModalHeader';
import ModalContent from '../ModalContent';
import ModalGithubLink from '../ModalGithubLink';
import Content from './Content';
import ModalTechnologies from '../ModalTechnologies';
import { IconTooltip } from '@/interfaces/icon-tooltip.interface';
import NextIcon from '@/icons/NextIcon';
import TailwindIcon from '@/icons/TailwindIcon';
import MySQLIcon from '@/icons/MySQLIcon';

const iconSize = 32;

const icons: IconTooltip[] = [
	{
		element: <NextIcon size={iconSize} />,
		tooltipText: 'NextJS',
	},
	{
		element: <TailwindIcon size={iconSize} />,
		tooltipText: 'TailwindCSS',
	},
	{
		element: <MySQLIcon size={iconSize} />,
		tooltipText: 'MySQL',
	},
];

const MacroMaster: FunctionComponent<ContentProps> = ({ github }) => {
	return (
		<ModalCard className='flex flex-col gap-6'>
			<ModalHeader>🍎 MacroMaster</ModalHeader>
			<ModalContent>
				<ModalTechnologies icons={icons} />
				<Content />
				<ModalGithubLink github={github} />
			</ModalContent>
		</ModalCard>
	);
};

export default MacroMaster;
