import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; // Ensure Router, Routes, and Route are imported
import Navbar from './components/navbar.jsx'; // Correct file paths
import Hero from './components/hero.jsx';
import Products from './components/Products.jsx';
import ProductsPage from './components/ProductsPage.jsx'; // For the separate Products Page
import AboutUs from './components/AboutUs.jsx';
import WhyUs from './components/WhyUs.jsx';
import Footer from './components/Footer.jsx';
import AboutUsPage from './components/AboutUsPage.jsx';
import ContactUsPage from './components/ContactUsPage.jsx';

import './index.css';

function App() {
  return (
    <Router>
      <Navbar />
      <div className="max-width-container">
        <Routes>
          <Route path="/" element={
            <>
              <Hero />
              <Products />
              <AboutUs />
              <WhyUs />
            </>
          } />
          <Route path="/products" element={<ProductsPage />} />
          <Route path="/about" element={<AboutUsPage />} />
          <Route path="/contact" element={<ContactUsPage />} />
        </Routes>
      </div>
      <Footer />
    </Router>
  );
}

export default App;