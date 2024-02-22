import { Route, Routes, useLocation } from "react-router-dom";
import Home from "./Common/Pages/Home";
import Login from "./Common/Pages/Login";
import Header from "./Common/Header";
import Footer from "./Common/Footer";
import Courses from "./Common/Pages/Courses";
import Events from "./Common/Pages/Events";
import Blogs from "./Common/Pages/Blogs";

function App() {
  const location = useLocation();
  const currRoute = location.pathname;
  return (
    <div className="App">
      {/* <Header /> */}
      {currRoute === "/" || currRoute === "/SignUp" ? <></> : <Header />}
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/Home" element={<Home />} />
        <Route path="/Courses" element={<Courses />} />
        <Route path="/Events" element={<Events />} />
        <Route path="/Blogs" element={<Blogs />} />
      </Routes>
      {currRoute === "/" || currRoute === "/SignUp" ? <></> : <Footer />}
    </div>
  );
}

export default App;
