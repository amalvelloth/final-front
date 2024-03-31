
import './App.css';
import Category from './components/Category/Category';
import Subcategory from './components/Subcategory/Subcategory';
import Login from './components/Login/Login';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Categorydetails from './components/Category/Categorydetails';
import Subcategorydetails from './components/Subcategory/Subcategorydetails';
import Home from './components/Adminpanel/Home';
import Sidebar from './components/Adminpanel/Sidebar';
import Topbar from './components/Adminpanel/Topbar';
import React, { useEffect, useState } from 'react';
import Item from './components/Item/Item';
import Itemdetails from './components/Item/Itemdetails';
import Viewpro from './util/Viewpro';
import ULogin from './util/ULogin';
import UHome from './util/UHome';
import Img from './util/Img';
import Buy from './util/Buy';
import Tnk from './util/Tnk';
import Reason from './util/Reason';
import Buycnl from './util/Buycnl';
import LoginSignup from './util/LoginSignup';
import Orderdetails from './components/orderdetails/Orderdetails';

  function App() {
    
  
  return (
    <div className='App'>
            
      
      <BrowserRouter>
      {/* <Navbar/> */}
      <Routes>
        
        <Route path={'/'}element={<Login/>}></Route>
        <Route path={'/Home'}element={<Home />}></Route>
        <Route path={'/viewdetails'}element={<Categorydetails method='get'/>}></Route>
        <Route path={'/sview'}element={<Subcategorydetails method='get'/>}></Route>
        <Route path={'/itview'}element={<Itemdetails method='get'/>}></Route>
        <Route path={'/Orview'}element={<Orderdetails method='get'/>}></Route>
        <Route path={'/viewpro'}element={<Viewpro/>}></Route>
        <Route path={'/u'}element={<ULogin method='post'/>}></Route>
        <Route path={'/uh'}element={<UHome method='post'/>}></Route>
        
        <Route path={'/buy'}element={<Buy method='post'/>}></Route>

        <Route path={'/tnk'}element={<Tnk method='post'/>}></Route>

        <Route path={'/res'}element={<Reason method='post'/>}></Route>

        <Route path={'/buycnl'}element={<Buycnl method='post'/>}></Route>

        <Route path={'/Authentication'}element={<LoginSignup method='post'/>}></Route>
        

        <Route path={'/img/:id'}element={<Img method='post'/>}></Route>
        <Route path='/s'element={<Subcategory method='post'/>}/>
      <Route path='/c'element={<Category method='post'/>}/>
      <Route path='/i'element={<Item method='post'/>}/>

      </Routes>

     </BrowserRouter>
    
    </div>
  );
}

export default App; 
