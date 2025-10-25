import react from 'react'
import Header from '../components/Header';
import HeroSection from '../components/HeroSection';
import ClientLoop from '../components/ClientLoop';
import About from '../components/About';
import Work from '../components/Work';
import Testimonial from '../components/Testimonial';
import Contact from '../components/Contact';
import Follow from '../components/Follow';
import Footer from '../components/Footer';
import Divider from '../components/Divider';
  // import Client from './components/Client';

const Home = ()=> {
  return (
    <>
      
      <Header />
      <HeroSection />
      <ClientLoop />
      <Divider />
       <About />
      <Divider />
      <Work />
      <Divider />
      <Testimonial />
      <Divider />
      <Contact />
       <Follow />
      <Footer />
      {/* <Client /> */}
   

    </>
   
  );
}

export default Home;
