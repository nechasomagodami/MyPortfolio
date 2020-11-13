import React from 'react';
import './App.css';
import AboutMe from './components/AboutMe/MainInfo/AboutMe';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';


function App() {
  return (
    <div className='app-wrapper'>
     <Header />
     <Navbar />
     <AboutMe />
    </div>
  );
}

export default App;
