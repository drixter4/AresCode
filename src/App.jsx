import Navbar from './components/Nav/Navbar';
import Hero from './components/Hero/Hero';
import Services from './components/Services/Services';
import About from './components/About/About';
import Technologies from './components/Technologies/Technologies';
import Portfolio from './components/Portfolio/Portfolio';
import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer';
import WhatsAppFloatButton from './components/WhatsappButton/WhatsAppFloatButton';

export default function App() {
  return (
    <div className="relative overflow-x-hidden">
      <Navbar />
      <main>
        <Hero />
        <Services />
        <About />
        <Technologies />
        <Portfolio />
        <Contact />
      </main>
      <Footer />
      <WhatsAppFloatButton />
    </div>
  );
}
