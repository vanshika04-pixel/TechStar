
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Home from "./components/Home";
import "./styles/App.scss";
import "./styles/header.scss";
import "./styles/home.scss";
import Footer from "./components/Footer"
import "./styles/footer.scss";
import Contact from "./components/Contact";
import  "./styles/contact.scss"
import Services from "./components/Services";
import "./styles/mediaquery.scss"
function App() {
  return (
    <>
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Contact/>}/>
        <Route path="/services" element={<Services/>}/>
      </Routes>
      
    </Router>
    <Footer />
    </>
  );
}

export default App;







