import { Routes, Route, Navigate, useLocation } from "react-router-dom";

import Hero from "../pages/Hero";
import About from "../pages/About";
import Github from "../pages/Github";
import Contact from "../pages/Contact";

const Routers = () => {
  const location = useLocation();
  return (
    <Routes location={location} key={location.pathname}>
      
      <Route path="/" element={<Navigate to="home" />} />
      <Route path="/home" element={<Hero />} />
      <Route path="/about" element={<About />} />
      <Route path="/github" element={<Github />} />
      <Route path="/contact" element={<Contact />} />
    </Routes>
  );
};

export default Routers;