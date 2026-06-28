import Nav              from '@/components/portfolio/Nav'
import Hero             from '@/components/portfolio/Hero'
import ExecutiveSummary from '@/components/portfolio/ExecutiveSummary'
import About            from '@/components/portfolio/About'
import Trajectory       from '@/components/portfolio/Trajectory'
import Skills           from '@/components/portfolio/Skills'
import Process          from '@/components/portfolio/Process'
import Principles       from '@/components/portfolio/Principles'
import Projects         from '@/components/portfolio/Projects'
import Vision           from '@/components/portfolio/Vision'
import Notes            from '@/components/portfolio/Notes'
import Contact          from '@/components/portfolio/Contact'
import Footer           from '@/components/portfolio/Footer'

export default function Home() {
  return (
    <>
      <Nav />
      <main className="bg-background">
        <Hero />
        <ExecutiveSummary />
        <About />
        <Trajectory />
        <Skills />
        <Process />
        <Principles />
        <Projects />
        <Vision />
        <Notes />
        <Contact />
      </main>
      <Footer />
    </>
  )
}
