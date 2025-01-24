import React from 'react';
import Navbar from '../components/Navbar';
import HeroSection from '../components/HeroSection';
import StatsSection from '../components/StatsSection';
import OfferingsSection from '../components/OfferingsSection';
import AboutSection from '../components/AboutSection';
import Footer from '../components/Footer';
// import TallyPopup from '../components/TallyPopup';
import ChatWidget from '../components/ChatWidget';

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-green-50 to-white">
      <Navbar />
      <main>
        <HeroSection />
        <StatsSection />
        <OfferingsSection />
        <AboutSection />
        {/* <TallyPopup /> */}
      </main>
      <ChatWidget/>
      <Footer />
    </div>
  );
}

export default App;