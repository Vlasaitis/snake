import React from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import { Navbar } from './Navbar';
import Snake from './games/snake';
// import {Snake} from './assets/snake';


function App() {
  return (
    <div className="App">
      <Router>
        <Navbar/>
        <Routes>
          <Route path="/" element={<Snake/>} />
          <Route path="/snake" element={<Snake/>} />
          <Route path="*" element={<h1>ERROR NOT FOUND</h1>} />
        </Routes>
      </Router> 
    </div>
    
  );
}

export default App
