import React from "react";
import Header from "./Common/Header.jsx";
import { Routes, Route, useLocation } from "react-router-dom";

const App = () => {
  const location = useLocation();
  const currRoute = location.pathname;
  return (
    <div>
      {currRoute === "/" ? <></> : <Header />}
      <Routes>
        <Route path="/" element={<Header />} />
      </Routes>
    </div>
  );
};

export default App;
