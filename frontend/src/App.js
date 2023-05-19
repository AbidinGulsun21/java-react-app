/*eslint-disable*/
import { useEffect, useState } from 'react';
import { Route, Routes, useNavigate } from 'react-router-dom';
import './App.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import 'primereact/resources/primereact.min.css';
import "primereact/resources/themes/lara-light-indigo/theme.css";
import 'bootstrap/dist/css/bootstrap.min.css';

import UserSignUpPage from './pages/UserSignUpPage';
import Footer from './pages/Footer';
import Navbar from './pages/Navbar';
import Home from './pages/Home';
import Login from './pages/Login';


function App() {

  const [windowSize, setWindowSize] = useState({ width: window.innerWidth, height: window.innerHeight });
  const screenHeight = windowSize.height;
  // let isAuthenticate = localStorage.getItem('isAuthenticate');

  const handleResize = () => {
    setWindowSize({
      width: window.innerWidth,
      height: window.innerHeight,
    });
  };


  useEffect(() => {
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (

    <div style={{ position: 'relative', overflowX: 'hidden',minHeight:'100vh' }}>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signup" element={<UserSignUpPage />} />
        <Route path="/login" element={<Login />} />
      </Routes>
      <Footer />


    </div>

  );
}

export default App;
