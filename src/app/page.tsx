import Hero from '@/components/Hero'
import Nav from '@/components/Nav'
import Projects from '@/components/ProjectsMail'
import SkillsToDoList from '@/components/SkillsTodoList'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24 pt-0 text-main-black dark:text-white dark:bg-main-black h-full gap-16">
      <Nav />
      <Hero />
      <SkillsToDoList />
      <Projects />
    </main>
  )
}
