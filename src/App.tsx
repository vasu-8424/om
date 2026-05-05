import Header from './components/Header';
import Hero from './components/Hero';
import Services from './components/Services';
import About from './components/About';
import ValueProposition from './components/ValueProposition';
import Process from './components/Process';
import Portfolio from './components/Portfolio';
import Contact from './components/Contact';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen bg-beige-50">
      <Header />
      <main>
        <Hero />
        <About />
        <Services />
        <Process />
        <ValueProposition />
        <Portfolio />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
