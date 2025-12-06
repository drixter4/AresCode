import Navbar from "../../components/Nav/Navbar";
import Footer from "../../components/Footer/Footer";
import './home.css'
import Header from "./components/Header";
import About from "./components/About";
import AboutAresCode from "./components/AboutAresCode";
import ServicesTabs from "./components/ServicesTabs";
import ServicesSection from "./components/ServicesSection";
import HeroAres from "./components/Hero";
import ContactSection from "./components/Contact";


export default function Home() {
  return (
    <>
      <Navbar />
      <Header />
      <About />
      <AboutAresCode />
      <ServicesTabs />
      <ServicesSection />
      <ContactSection />
      <HeroAres />

      <Footer />
    </>
  );
}