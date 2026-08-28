import NavBar from './components/NavBar'
import Hero from './components/Hero'
import About from './components/About'
import Research from './components/Research'
import Patent from './components/Patent'
import Publications from './components/Publications'
import Projects from './components/Projects'
import Teaching from './components/Teaching'
import Recognition from './components/Recognition'
import Tools from './components/Tools'
import Contact from './components/Contact'
import Footer from './components/Footer'

export default function App() {
  return (
    <>
      <NavBar />
      <main id="top">
        <Hero />
        <About />
        <Research />
        <Patent />
        <Publications />
        <Projects />
        <Teaching />
        <Recognition />
        <Tools />
        <Contact />
      </main>
      <Footer />
    </>
  )
}
