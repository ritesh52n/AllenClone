import logo from "./logo.svg";
import "./App.css";
import Footer from "./Component/Footer.jsx";
import Header from "./Component/Header.jsx";
import Home from "./Pages/Home.jsx";
import Adsat from "./Pages/Adsat.jsx";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

function App() {
  return (
    <>
      <Router>
        <Header />
        <div className="Body" style={{ minHeight: "90vh" }}>
          <Routes>
            <Route path="/" Component={Home} />
            <Route path="/Adsat" Component={Adsat} />
          </Routes>
        </div>
        <Footer />
      </Router>
    </>
  );
}

export default App;
