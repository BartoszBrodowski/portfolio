import React, { FunctionComponent } from 'react';
import ModalCard from '../ModalCard';
import ModalTechnologies from '../ModalTechnologies';
import ModalGithubLink from '../ModalGithubLink';
import { IconTooltip } from '@/interfaces/icon-tooltip.interface';
import AngularIcon from '@/icons/AngularIcon';
import Content from './Content';
import SpringBootIcon from '@/icons/SpringBootIcon';
import JavaIcon from '@/icons/JavaIcon';
import ModalHeader from '../ModalHeader';
import ModalContent from '../ModalContent';
import Link from 'next/link';
import { Github } from 'lucide-react';

const iconSize = 32;

const icons: IconTooltip[] = [
	{
		element: <AngularIcon size={iconSize} />,
		tooltipText: 'Angular',
	},
	{
		element: <SpringBootIcon size={iconSize} />,
		tooltipText: 'Spring Boot',
	},
	{
		element: <JavaIcon size={iconSize} />,
		tooltipText: 'Java',
	},
];

const WineExchange: FunctionComponent<ContentProps> = ({ github }) => {
	return (
		<ModalCard className='flex flex-col gap-6'>
			<ModalHeader>🍷 WineExchange</ModalHeader>
			<ModalContent>
				<ModalTechnologies icons={icons} />
				<Content />
				<ModalGithubLink github={github} />
				<Link
					href='https://github.com/BartoszBrodowski/wine-exchange-springboot'
					target='#'
					className='flex items-center gap-2'>
					<Github size={32} />
					<span className='hover:text-main-green transition-all transform-150'>
						https://github.com/BartoszBrodowski/wine-exchange-springboot
					</span>
				</Link>
			</ModalContent>
		</ModalCard>
	);
};

export default WineExchange;
