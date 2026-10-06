import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Services from "./pages/Services";
import Pricing from "./pages/Pricing";
import HowItWorks from "./pages/HowItWorks";
import About from "./pages/About";
import Offers from "./pages/Offers";
import Contact from "./pages/Contact";
import BookPickup from "./pages/BookPickup";


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/services" element={<Services />} />
        <Route path="/pricing" element={<Pricing />} />
        <Route path="/how-it-works" element={<HowItWorks />} />
        <Route path="/about" element={<About />} />
        <Route path="/offers" element={<Offers />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/book-pickup" element={<BookPickup />} />
      
      </Routes>
    </BrowserRouter>
  );
}

export default App;