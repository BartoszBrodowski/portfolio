import Hero from '@/components/Hero'
import Projects from '@/components/Projects'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24 py-0 text-main-black dark:text-white h-full">
      <Hero />
      <Projects />
    </main>
  )
}
