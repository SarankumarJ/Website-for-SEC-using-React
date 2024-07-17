import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Header from "./components/Header";
import Home from './components/Home';
import About from './components/AboutUs';
import Courses from './components/Courses';
import Events from './components/Events';
import './App.css';

function App() {
  return (
    <BrowserRouter basename='/Website-for-SEC-using-React/'>
      <Header />
      <div className="main-content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/courses" element={<Courses />} />
          <Route path="/events" element={<Events />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
