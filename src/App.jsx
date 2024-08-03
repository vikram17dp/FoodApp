import React, { useState } from 'react'
import NavBar from './compnents/NavBar/NavBar'
import { Route, Routes } from 'react-router-dom'
import Home from './Pages/Home/Home'
import Cart from './Pages/cart/Cart'
import PlaceOrder from './Pages/PlaceOrder/PlaceOrder'
import Footer from './compnents/Footer/Footer'
import Loginpopup from './compnents/Loginpopup/Loginpopup'



const App = () => {

  const [ShowLogin,setShowLogin] = useState(false);
  

  return (
    <>
    {ShowLogin?<Loginpopup setShowLogin={setShowLogin}/>:<></>}
    <div className='app'>
     <NavBar setShowLogin={setShowLogin}/>
      <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/cart' element={<Cart/>}/>
          <Route path='/order' element={<PlaceOrder/>}/>
      </Routes>
    </div>
    <Footer/>
    </>
    
  )
}

export default App
