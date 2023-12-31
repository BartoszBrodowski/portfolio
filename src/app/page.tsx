import Hero from '@/components/Hero'
import Nav from '@/components/Projects/Nav'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24 py-0 text-main-black dark:text-white dark:bg-main-black">
      <Hero />
      <Nav />
    </main>
  )
}
