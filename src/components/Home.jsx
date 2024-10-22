import { useRef } from 'react';
import Hero from './Hero';
import ImageSection from './ImageSection';

function Home() {
  const imageSectionRef = useRef(null);

  const scrollToImageSection = () => {
    if (imageSectionRef.current) {
      imageSectionRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div>
      <Hero onScrollToImageSection={scrollToImageSection} />
      <div ref={imageSectionRef}>
        <ImageSection />
      </div>
    </div>
  );
  
}

export default Home;
