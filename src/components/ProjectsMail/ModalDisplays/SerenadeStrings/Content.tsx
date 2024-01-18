import { Dot } from 'lucide-react';
import ModalContent from '../ModalContent';

const Content = () => {
	return (
		<ModalContent>
			<p className='text-lg'>
				Fullstack e-commerce application utilizing NextJS, Prisma, PostgreSQL and TailwindCSS
				inspired by my project "Guitar Shop" from 2022/2023, but using more up to date technologies.
			</p>
			<div className='flex flex-col gap-2'>
				<div className='flex flex-col gap-2'>
					<h2 className='text-2xl font-semibold'>⛰️ Main Difficulties</h2>
					<p className='ml-4'>
						The main difficulty of this project was to use as much SSR rendering. It forced me to
						write components in a structure that allowed for asynchronous components and data
						fetching with Prisma server client.
					</p>
				</div>

				<h2 className='font-semibold text-2xl'>🎓 What have I learned?</h2>
				<p className='ml-4'>
					My main focus was to manage fetching the data effectively and efficiently while doing as
					much as using <span className='font-semibold'>Server Side Rendering</span>.
				</p>
				<p className='text-lg font-semibold'>Things I learned/improved on:</p>
				<ul className='ml-4'>
					<li className='flex items-center'>
						<Dot size={24} />
						SSR Handling
					</li>
					<li className='flex items-center'>
						<Dot size={24} />
						PostgreSQL database management
					</li>
					<li className='flex items-center'>
						<Dot size={24} />
						Loading States
					</li>
					<li className='flex items-center'>
						<Dot size={24} />
						Broadened my knowledge of NextJS
					</li>
				</ul>
			</div>
		</ModalContent>
	);
};

export default Content;
