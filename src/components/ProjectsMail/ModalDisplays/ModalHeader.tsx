import { FunctionComponent } from 'react';

interface ModalHeaderProps {
	children: string;
	className?: string;
}

const ModalHeader: FunctionComponent<ModalHeaderProps> = ({ children, className }) => {
	return <h1 className={'font-bold text-4xl mb-4 ' + className}>{children}</h1>;
};

export default ModalHeader;
