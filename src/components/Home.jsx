import { useRef } from 'react';
import Hero from './Hero';
import ImageSection from './ImageSection';

function Home() {
  const imageSectionRef = useRef(null);

  return (
    <div>
      <Hero scrollToImageSection={() => imageSectionRef.current.scrollIntoView({ behavior: 'smooth' })} />
      <ImageSection ref={imageSectionRef} />
    </div>
  );
}

export default Home;
