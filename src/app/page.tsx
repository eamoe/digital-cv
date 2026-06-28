import Nav              from '@/components/portfolio/Nav'
import Hero             from '@/components/portfolio/Hero'
import ExecutiveSummary from '@/components/portfolio/ExecutiveSummary'
import About            from '@/components/portfolio/About'
import Principles       from '@/components/portfolio/Principles'
import Projects         from '@/components/portfolio/Projects'
import Skills           from '@/components/portfolio/Skills'
import Process          from '@/components/portfolio/Process'
import Trajectory       from '@/components/portfolio/Trajectory'
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
        {/* Leadership Philosophy */}
        <About />
        <Principles />
        {/* Case Studies */}
        <Projects />
        {/* Capabilities */}
        <Skills />
        <Process />
        {/* Career Journey */}
        <Trajectory />
        {/* AI Vision */}
        <Vision />
        <Notes />
        <Contact />
      </main>
      <Footer />
    </>
  )
}
