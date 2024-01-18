import React, { FunctionComponent } from 'react';
import ModalCard from '../ModalCard';
import ModalHeader from '../ModalHeader';
import ModalContent from '../ModalContent';
import ModalGithubLink from '../ModalGithubLink';
import Content from './Content';

const MacroMaster: FunctionComponent<ContentProps> = ({ github }) => {
	return (
		<ModalCard className='flex flex-col gap-6'>
			<ModalHeader>🍎 MacroMaster</ModalHeader>
			<ModalContent>
				<Content />
				<ModalGithubLink github={github} />
			</ModalContent>
		</ModalCard>
	);
};

export default MacroMaster;
