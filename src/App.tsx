import Header from './components/Header';
import Hero from './components/Hero';
import CompanyOverview from './components/CompanyOverview';
import Services from './components/Services';
import Process from './components/Process';
import WhyChooseUs from './components/WhyChooseUs';
import About from './components/About';
import Portfolio from './components/Portfolio';
import Contact from './components/Contact';
import Footer from './components/Footer';
import OverviewModal from './components/OverviewModal';

export default function App() {
  return (
    <div className="min-h-screen bg-black">
      <Header />
      <OverviewModal />
      <main>
        <Hero />
        <CompanyOverview />  {/* About Us / Mission & Vision */}
        <Services />         {/* Our Expertise */}
        <Process />          {/* Our Workflow */}
        <WhyChooseUs />      {/* Why Choose Us */}
        <About />            {/* Our Leadership & Team */}
        <Portfolio />        {/* Gallery / Projects */}
        <Contact />          {/* Connect With Us */}
      </main>
      <Footer />
    </div>
  );
}
