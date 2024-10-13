import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import ImageSection from './components/ImageSection';
import Footer from './components/Footer';
import About from './components/About';
import WhyChooseUs from './components/WhyChooseUs';
import ContactUs from './components/ContactUs';
function App() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        {/* <Hero />
        <ImageSection /> */}
        <About />
        <WhyChooseUs />
        <ContactUs />
      </main>
      <Footer />
    </div>
  );
}

export default App;