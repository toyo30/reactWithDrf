import React, {useState} from 'react';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Body from './pages/Body';
import About from './pages/About';
import Home from "./pages/Home";
import './App.css';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home name={"Home"} />} />
      <Route path="/about" element={<About name={"About"} />} /> 
    </Routes>
  );
}

export default App;
