import React from 'react';
import Menu from '../src/components/menu';
import './App.css';
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import Navbar from './components/navbar';
import HeroDetails from './components/herodetails';

function App() {
  return (
    <div className="App">
    <Navbar />
    <BrowserRouter>
      <Routes>
          <Route  path='/' element={<Menu/>} />
          <Route exact path='/kof/:heroName' Component={HeroDetails} />
      </Routes>
      </BrowserRouter>
    </div>

    
  );
}

export default App;
