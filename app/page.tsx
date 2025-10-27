import NavBar from './components/NavBar';
import Hero from './components/Hero';
import Services from './components/Services';
import About from './components/About';
import Gallery from './components/Gallery';
import Testimonials from './components/Testimonials';
import ContactBooking from './components/ContactBooking';
import Footer from './components/Footer';

export default function HomePage() {
  return (
    <main>
      <NavBar />
      <Hero />
      <Services />
      <About />
      <Gallery />
      <Testimonials />
      <ContactBooking />
      <Footer />
    </main>
  );
}
