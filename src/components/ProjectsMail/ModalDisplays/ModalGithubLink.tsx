import { Github } from 'lucide-react';
import Link from 'next/link';
import React, { FunctionComponent } from 'react';

const ModalGithubLink: FunctionComponent<ContentProps> = ({ github }) => {
	return (
		<div className='flex flex-col gap-4'>
			<h2 className='font-semibold text-xl'>📷 Check out the design on Github README:</h2>
			<Link href={github} target='#' className='flex items-center gap-2'>
				<Github size={32} />
				<span className='hover:text-main-green transition-all transform-150'>{github}</span>
			</Link>
		</div>
	);
};

export default ModalGithubLink;
