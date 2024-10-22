import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./components/Home";
import About from "./components/About";
import Contact from "./components/ContactUs";
import HospitalPharmacy from "./components/Services/HospitalPharmacy";
import EthicsCommittee from "./components/Services/EthicsCommittee";
import DocumentsArchiving from "./components/Services/DocumentsArchiving";

function App() {
  return (
    <Router>
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />

            <Route path="/contact" element={<Contact />} />
            <Route path="/services/hospital" element={<HospitalPharmacy />} />
            <Route path="/services/ethics" element={<EthicsCommittee />} />
            <Route
              path="/services/archiving"
              element={<DocumentsArchiving />}
            />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
