import { useState } from 'react'
import './App.css'
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import { Navbar } from './Navbar';
import {Snake} from './Snake';


function App() {

  return (
    <div className="App">
      <Router>
        <Navbar/>
        <Routes>
          <Route path="/" element={<h1>Home</h1>} />
          <Route path="/snake" element={<Snake/>} />
          <Route path="*" element={<h1>ERROR NOT FOUND</h1>} />
        </Routes>
      </Router> 
    </div>
    
  );
}

export default App
