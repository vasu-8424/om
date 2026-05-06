import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Process from './components/Process';
import Portfolio from './components/Portfolio';
import Contact from './components/Contact';
import WhyChooseUs from './components/WhyChooseUs';
import Services from './components/Services';
import ValueProposition from './components/ValueProposition';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen bg-black">
      <Header />
      <main>
        {/* ── TOP SECTIONS (right below hero) ── */}
        <Hero />
        <Process />
        <Portfolio />
        <Contact />

        {/* ── BOTTOM SECTIONS ── */}
        <WhyChooseUs />
        <Services />
        <ValueProposition />

        {/* ── OUR TEAM — bottom of site ── */}
        <About />
      </main>
      <Footer />
    </div>
  );
}
