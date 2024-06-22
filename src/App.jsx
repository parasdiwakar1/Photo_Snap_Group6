import React from 'react';
import { BrowserRouter , Routes, Route } from 'react-router-dom';
import './App.css';
import Form from './Component/Form';
import Navbar from './Component/Navbar';
import Landind from './Component/Landind';
import AddImg from './Component/AddImg';

function App() {
  return (
    <>
      <BrowserRouter >
        <Navbar />
        <Routes>
          <Route path="/" element={<Landind />} />
          <Route path="/login-signup" element={<Form />} />
          <Route path="/editor/*" element={<AddImg />} />
        </Routes>
      </BrowserRouter >
    </>
  );
}

export default App;
