import { FunctionComponent } from 'react';
import ThemeToggle from '../ThemeProvider/ThemeToggle';
import OccupationText from './OccupationText';
import { GithubIcon, LinkedinIcon } from 'lucide-react';
import Link from 'next/link';

const Hero: FunctionComponent = () => {
	return (
		<div id='home' className='h-full min-h-screen'>
			<ThemeToggle />
			<div className='flex flex-col justify-center items-center lg:items-start gap-20 min-h-screen lg:mt-0 relative w-full'>
				<OccupationText />
				<div className='flex flex-col lg:flex-row items-center gap-16 lg:gap-40 w-full'>
					<span className='lg:w-[580px] text-sm md:text-xl text-center lg:text-justify'>
						I'm passionate about <strong>Web Development</strong>. Currently looking for a job,
						while learning NextJS and Angular with SpringBoot.
						<br></br>
						Based in <strong>Gdańsk, Poland📍</strong>
					</span>
					<div className='flex flex-col gap-4 text-lg lg:text-2xl items-center lg:items-baseline'>
						<div className='flex flex-col gap-2 link dark:after:bg-white'>
							<Link
								href='https://github.com/BartoszBrodowski'
								target='_blank'
								className='flex items-center gap-2'>
								<GithubIcon className='w-7 h-7 lg:w-9 lg:h-9' />
								Github
							</Link>
						</div>
						<div className='flex flex-col gap-2 link dark:after:bg-white '>
							<Link
								href='https://www.linkedin.com/in/bartoszbrodowski/'
								target='_blank'
								className='flex items-center gap-2'>
								<LinkedinIcon strokeWidth={1.5} className='w-7 h-7 lg:w-9 lg:h-9' />
								LinkedIn
							</Link>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Hero;
