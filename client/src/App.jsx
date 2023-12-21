import './App.css';
/* Hooks */
import { useState, useEffect } from "react";
import { Routes, Route, useLocation, useNavigate } from "react-router-dom";
/* Components */
import LandingPage from './components/LandingPage/LandingPage';
import Home from './components/HomePage/Home';
import Detail from './components/DetailPage/Detail';
import FormCreate from './components/FormPage/FormCreate';
import Error from './components/Error/Error';

const App = () => {

  

  return (
    <div>
      <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/home" element={<Home />} />
      <Route path="/detail" element={<Detail />} />
      <Route path="/create" element={<FormCreate/>}/>
      <Route path="*" element={<Error />} />
    </Routes>
    </div>
  )
}

export default App
