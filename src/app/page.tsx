import AboutMe from '@/components/AboutMe';
import Contact from '@/components/Contact';
import Hero from '@/components/Hero';
import Nav from '@/components/Nav';
import Projects from '@/components/ProjectsMail';
import ToDoSkillsList from '@/components/TodoSkillsList';

export default function Home() {
	return (
		<main className='flex min-h-screen flex-col items-center justify-between xl:px-[10%] lg:py-0 lg:p-24 md:p-16 p-4 text-main-black dark:text-white dark:bg-main-black h-full gap-28'>
			<Nav />
			<Hero />
			<AboutMe />
			<ToDoSkillsList />
			<Projects />
			<Contact />
		</main>
	);
}
