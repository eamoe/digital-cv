import Nav        from '@/components/portfolio/Nav'
import Hero       from '@/components/portfolio/Hero'
import About      from '@/components/portfolio/About'
import Trajectory from '@/components/portfolio/Trajectory'
import Skills     from '@/components/portfolio/Skills'

export default function Home() {
  return (
    <>
      <Nav />
      <main className="bg-background">
        <Hero />
        <About />
        <Trajectory />
        <Skills />
        <section id="process"    className="min-h-screen" />
        <section id="projects"   className="min-h-screen" />
        <section id="vision"     className="min-h-screen" />
        <section id="notes"      className="min-h-screen" />
        <section id="contact"    className="min-h-screen" />
      </main>
    </>
  )
}
