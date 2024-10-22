
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './components/Home';
import About from './components/About';
import Services from './components/Services';
import Contact from './components/ContactUs';

function App() {
  return (
    <Router>
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/services" element={<Services />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;





// import Navbar from './components/Navbar';
// import Footer from './components/Footer';
// import Home from './components/Home';
// // import About from './components/About';
// // import WhyChooseUs from './components/WhyChooseUs';
// // import ContactUs from './components/ContactUs';
// function App() {
//   return (
//     <div className="min-h-screen flex flex-col">
//       <Navbar />
//       <main className="flex-grow">
//         {/* <Hero />
//         <ImageSection /> */}
//         <Home />
//         {/* <About />
//         <WhyChooseUs />
//         <ContactUs /> */}
//       </main>
//       <Footer />
//     </div>
//   );
// }

// export default App;