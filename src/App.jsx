import { useState } from 'react'
import { Routes, Route } from "react-router-dom";
import './App.css'
import Landing from './Components/Landing';

function App() {

  return (
    <>
      <Routes>
        <Route path="/" element={<Landing/>} />
        {/* <Route path="error" element={<ErrorModal />} /> */}
      </Routes>
    </>
  );
}

export default App
