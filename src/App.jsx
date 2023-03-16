import { useState, useEffect } from "react";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Home";
import Sam from "./Creators/Sam/Sam.jsx";
import ReactGA from "react-ga";

function App() {
  function initializeReactGA() {
    ReactGA.initialize("G-FRTXDTS3MK");
    ReactGA.pageview("/");
  }

  useEffect(() => {
    initializeReactGA();
  }, []);

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/sam" element={<Sam />} />
      </Routes>
    </div>
  );
}

export default App;
