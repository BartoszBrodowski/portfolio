import { ScrollShadow } from '@nextui-org/react';
import { FunctionComponent, ReactElement, ReactNode } from 'react';

interface ModalCardProps {
	className?: string;
	children: ReactElement<any, any>[] | ReactNode[] | ReactElement<any, any>;
}

const ModalCard: FunctionComponent<ModalCardProps> = ({ className, children }) => {
	return (
		<div className={'flex flex-col gap-4 ' + className}>
			<ScrollShadow size={50} className='h-[450px] pt-4'>
				{children}
			</ScrollShadow>
		</div>
	);
};

export default ModalCard;
