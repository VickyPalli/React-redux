import React from 'react';
import "./App.css";
import { BrowserRouter, Routes , Route } from 'react-router-dom';
import Header from './Component/Header';
import Productdetails from './Component/Productdetails';
import Product from './Component/Products';
const App = () => {

  return (
    <div className='app'>
      <BrowserRouter>
       <Header/>
       <Routes>
       <Route path="/" element={<Product/>}/>
       <Route path='/product/:id' element={<Productdetails/>}/>
       </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App



































































































































