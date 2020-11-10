import React from 'react';
import './App.css';
import AboutMe from './components/AboutMe';
import Header from './components/Header';
import Navbar from './components/Navbar';


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
