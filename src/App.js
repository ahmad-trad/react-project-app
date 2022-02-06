import React from "react";
import {  Routes , Route , BrowserRouter as Router} from 'react-router-dom';
import Header from "./COMPONET/header/Header";
import Home from "./COMPONET/Home/Home";
import About from "./COMPONET/Home/home-componentes/about/About";
import Portfolio from "./COMPONET/Home/home-componentes/portfolio/Portfolio";
import Services from "./COMPONET/Home/home-componentes/services/Services";


function App() {
  return (

  <>
  <Router>
    <Header />

      <Routes>
        <Route exact="true" path="/" element={<Home />} />
        <Route path="servar" element={<Services />} />
        <Route path="work" element={<Portfolio />} />
        <Route  path="about" element={<About />} />
      </Routes>

  </Router>
  </>
  );
}

export default App;
