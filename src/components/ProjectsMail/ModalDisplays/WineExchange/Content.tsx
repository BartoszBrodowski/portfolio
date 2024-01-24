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
						The main difficulty of this project was to manage data exchange between the two (meaning
						data types and data updates). Another big one was to use the UI library and also make it
						fit my styling needs.
					</p>
				</div>

				<h2 className='font-semibold text-2xl'>🎓 What have I learned?</h2>
				<p className='ml-4'>
					My goal was to learn how to build apps using{' '}
					<span className='font-semibold'>Angular</span> while connecting it to a{' '}
					<span className='font-semibold'>Spring Boot</span> API for the full Java-Angular stack
					experience.
				</p>
				<p className='text-lg font-semibold'>Things I learned/improved on:</p>
				<ul className='ml-4'>
					<li className='flex items-center'>
						<Dot size={24} />
						Undestanding of building fullstack apps with Angular
					</li>
					<li className='flex items-center'>
						<Dot size={24} />
						Spring Boot API building and proper OOP, Clean Code practices
					</li>
					<li className='flex items-center'>
						<Dot size={24} />
						Data passing and fetching in Angular
					</li>
					<li className='flex items-center'>
						<Dot size={24} />
						Using UI library in Angular (PrimeNG)
					</li>
				</ul>
			</div>
		</ModalContent>
	);
};

export default Content;
