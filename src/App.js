import React from 'react';
import Navbar from './components/navbar/navbar';
import { Outlet } from 'react-router-dom';
import "./App.css"

function App() {  
  return (
    <div className="App-wrapper">
      <div className='App'>
      <Navbar classname="Navbar"/>
      <Outlet className="Outlet"/>
      </div>
    </div>
  );
}

export default App;