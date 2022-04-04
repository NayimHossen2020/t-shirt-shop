import React from 'react';
import './App.css';
import Header from './Components/Header/Header';
import Home from './Components/Home/Home';
import { Routes, Route } from "react-router-dom";
import Review from './Components/Review/Review';
import GrandPa from './Components/GrandPa/GrandPa';

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/home' element={<Home></Home>}></Route>
        <Route path='/review' element={<Review></Review>}></Route>
        <Route path='/grandpa' element={<GrandPa></GrandPa>}></Route>
      </Routes>
    </div>
  );
}

export default App;
