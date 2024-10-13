import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import ImageSection from './components/ImageSection';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        <Hero />
        <ImageSection />
      </main>
      <Footer />
    </div>
  );
}

export default App;