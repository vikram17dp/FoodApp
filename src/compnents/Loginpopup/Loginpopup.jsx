import React, { useState } from 'react'
import './Loginpopup.css'
import { assets } from '../../assets/assets'
import propTypes from 'prop-types'


const Loginpopup = ({setShowLogin}) => {
    const [currState,setCurrState]= useState("sign up")
  return (
    <div className='login-popup'>
        <form  className="login-popup-container">
            <div className="login-popup-title">
                <h2>{currState}</h2>
                <img  onClick={()=>setShowLogin(false)}src={assets.cross_icon} alt="" />
            </div>
            <div className="login-popup-inputs">
              
                {currState==="Log in"?<></>:  <input type="text" placeholder='Your name' required />}
                <input type="email" placeholder='Your email' required />
                <input type="password" placeholder='Your password'  required />
            </div>
            <button type='submit'>{currState==="sign up"?"Create account":"Login"}</button>
            <div className="Login-popup-condition">
                <input type="checkbox"  />
                <p>By continuing, i agree to the terms of use & privacy policy.</p>
            </div>
            {currState==="Log in"?
            <p>Create a account? <span onClick={()=>setCurrState("sign up")}>click here</span></p>:<p>Alerady have an account? <span onClick={()=>setCurrState("Log in")}>Login here</span></p>}
        
        </form>
     
    </div>
  )
}
Loginpopup.propTypes={
    setShowLogin:propTypes.func.isRequired
}

export default Loginpopup
