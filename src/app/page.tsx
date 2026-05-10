import Nav        from '@/components/portfolio/Nav'
import Hero       from '@/components/portfolio/Hero'
import About      from '@/components/portfolio/About'
import Trajectory from '@/components/portfolio/Trajectory'
import Skills   from '@/components/portfolio/Skills'
import Process   from '@/components/portfolio/Process'
import Projects  from '@/components/portfolio/Projects'
import Vision    from '@/components/portfolio/Vision'
import Notes     from '@/components/portfolio/Notes'

export default function Home() {
  return (
    <>
      <Nav />
      <main className="bg-background">
        <Hero />
        <About />
        <Trajectory />
        <Skills />
        <Process />
        <Projects />
        <Vision />
        <Notes />
        <section id="contact"    className="min-h-screen" />
      </main>
    </>
  )
}
