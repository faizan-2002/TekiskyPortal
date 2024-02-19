import React from "react";
import Header from "./Common/Pages/Header.jsx";
import { Routes, Route, useLocation } from "react-router-dom";
import Home from "./Common/Home.jsx";
import Courses from "./Common/Courses.jsx";
import Footer from "./Common/Pages/Footer.jsx";

const App = () => {
  const location = useLocation();
  const currRoute = location.pathname;
  return (
    <div>
      {currRoute === "/" || currRoute === "/signup" ? <></> : <Header />}
      <Routes>
        <Route path="Home/" element={<Home />} />
        <Route path="/Courses" element={<Courses />} />
      </Routes>
      {currRoute === "/" || currRoute === "/signup" ? <></> : <Footer />}
    </div>
  );
};

export default App;
