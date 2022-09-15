import react from 'react';
import HeroSection from './../components/HeroSection'
import Features from './../components/Features';
import Footer from './../components/Footer';


function Home() {
  return (
    <>
     <HeroSection/>
    <div className="container">
     <Features/>
     </div>
     <Footer/>
    </>
  );
}

export default Home;
