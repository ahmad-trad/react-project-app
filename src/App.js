import React from "react";
import {  Routes , Route , BrowserRouter as Router} from 'react-router-dom';
import Header from "./COMPONET/header/Header";
import Home from "./COMPONET/Home/Home";



function App() {
  return (

  <>
  <Router>
    <Header />

      <Routes>
        <Route exact="true" path="/" element={<Home />} />
        <Route path="servar" element={<Home />} />
        <Route path="work" element={<Home />} />
        <Route  path="about" element={<Home />} />
      </Routes>

  </Router>
  </>
  );
}

export default App;
