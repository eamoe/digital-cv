import Nav  from '@/components/portfolio/Nav'
import Hero from '@/components/portfolio/Hero'

export default function Home() {
  return (
    <>
      <Nav />
      <main className="bg-background">
        <Hero />
        <section id="about"      className="min-h-screen" />
        <section id="trajectory" className="min-h-screen" />
        <section id="skills"     className="min-h-screen" />
        <section id="process"    className="min-h-screen" />
        <section id="projects"   className="min-h-screen" />
        <section id="vision"     className="min-h-screen" />
        <section id="notes"      className="min-h-screen" />
        <section id="contact"    className="min-h-screen" />
      </main>
    </>
  )
}
