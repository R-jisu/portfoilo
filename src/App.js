import React from "react";
import { Routes, Route } from "react-router-dom";
import Nav from "./components/nav/Nav";
import Aboutme from "./pages/Aboutme";
import Contact from "./pages/Contact";
import Skills from "./pages/Skills";
import Works from "./pages/Works";

function App() {
  return (
    <>
      <Nav />
      <Routes>
        <Route path="/" element={<Aboutme />}></Route>
        <Route path="/skills" element={<Skills />}></Route>
        <Route path="/works" element={<Works />}></Route>
        <Route path="/contact" element={<Contact />}></Route>
      </Routes>
    </>
  );
}

export default App;
