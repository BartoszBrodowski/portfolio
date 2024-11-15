import { FunctionComponent } from 'react';
import ModalCard from '../ModalCard';
import ModalContent from '../ModalContent';
import ModalHeader from '../ModalHeader';
import Content from './Content';
import ModalTechnologies from '../ModalTechnologies';
import ReduxIcon from '@/icons/ReduxIcon';
import { IconTooltip } from '@/interfaces/icon-tooltip.interface';
import TailwindIcon from '@/icons/TailwindIcon';
import ReactIcon from '@/icons/ReactIcon';

interface GuitarShopProps {
	github: string;
}

const iconSize = 32;

const icons: IconTooltip[] = [
	{
		element: <ReduxIcon size={iconSize} />,
		tooltipText: 'Redux',
	},
	{
		element: <TailwindIcon size={iconSize} />,
		tooltipText: 'TailwindCSS',
	},
	{
		element: <ReactIcon size={iconSize} />,
		tooltipText: 'React',
	},
];

const GuitarShop: FunctionComponent<GuitarShopProps> = ({ github }) => {
	return (
		<ModalCard>
			<ModalHeader>🎸 Guitar shop</ModalHeader>
			<ModalContent>
				<ModalTechnologies icons={icons} />
				<Content github={github} />
			</ModalContent>
		</ModalCard>
	);
};

export default GuitarShop;
