import NextIcon from '@/icons/NextIcon';
import PrismaIcon from '@/icons/PrismaIcon';
import TailwindIcon from '@/icons/TailwindIcon';
import { IconTooltip } from '@/interfaces/icon-tooltip.interface';
import { Tooltip } from '@nextui-org/react';
import { FunctionComponent } from 'react';

interface ModalTehcnologiesProps {
	icons: IconTooltip[];
}

const ModalTechnologies: FunctionComponent<ModalTehcnologiesProps> = ({ icons }) => {
	return (
		<div className='flex items-center gap-1'>
			<h1 className='font-semibold text-md'>Technologies: </h1>
			<div className='flex gap-1'>
				{icons.map((icon, index) => {
					return (
						<Tooltip
							delay={0}
							closeDelay={0}
							key={index}
							content={icon.tooltipText}
							placement='bottom'>
							<div className='flex items-center justify-center'>{icon.element}</div>
						</Tooltip>
					);
				})}
			</div>
		</div>
	);
};

export default ModalTechnologies;
