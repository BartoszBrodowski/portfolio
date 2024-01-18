import { FunctionComponent, ReactElement, ReactNode } from 'react';

interface ModalHeaderProps {
	children: ReactElement<any, any>[] | ReactNode[] | ReactElement<any, any>;
	className?: string;
}

const ModalContent: FunctionComponent<ModalHeaderProps> = ({ children, className }) => {
	return <div className={'flex flex-col gap-4' + ' ' + className}>{children}</div>;
};

export default ModalContent;
