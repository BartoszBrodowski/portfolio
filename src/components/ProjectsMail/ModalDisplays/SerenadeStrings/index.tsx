import { FunctionComponent } from 'react';
import ModalCard from '../ModalCard';
import ModalContent from '../ModalContent';
import ModalGithubLink from '../ModalGithubLink';
import ModalHeader from '../ModalHeader';
import Content from './Content';
import ModalTechnologies from '../ModalTechnologies';
import NextIcon from '@/icons/NextIcon';
import { IconTooltip } from '@/interfaces/icon-tooltip.interface';
import TailwindIcon from '@/icons/TailwindIcon';
import PrismaIcon from '@/icons/Prisma';
import PostgreSQLIcon from '@/icons/PostgreSQL';
import TRPCIcon from '@/icons/TRPCIcon';

const iconSize = 32;

const icons: IconTooltip[] = [
	{
		element: <NextIcon size={iconSize} />,
		tooltipText: 'Redux',
	},
	{
		element: <TailwindIcon size={iconSize} />,
		tooltipText: 'TailwindCSS',
	},
	{
		element: <PostgreSQLIcon size={iconSize} />,
		tooltipText: 'Prisma',
	},
	{
		element: <PrismaIcon size={iconSize} />,
		tooltipText: 'React',
	},
];

const SerenadeStrings: FunctionComponent<ContentProps> = ({ github }) => {
	return (
		<ModalCard className='flex flex-col gap-6'>
			<ModalHeader>🎵 Serenade Strings</ModalHeader>
			<ModalContent>
				<ModalTechnologies icons={icons} />
				<Content />
				<ModalGithubLink github={github} />
			</ModalContent>
		</ModalCard>
	);
};

export default SerenadeStrings;
