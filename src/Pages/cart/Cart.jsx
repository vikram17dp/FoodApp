import React, { useContext } from 'react'
import './Cart.css'
import { StoreContext } from '../../context/StoreContext'
import { useNavigate } from 'react-router-dom'

const Cart = () => {
  const {cartItems,food_list,removeFromCarts,getTotalCartAmount} = useContext(StoreContext)
  const navgiate = useNavigate();
  return (
   
      <div className="cart">
        <div className="cart-item">
          <div className="cart-items-title">
            <p>Items</p>
            <p>Title</p>
            <p>Price</p>
            <p className='quantity'>Quantity</p>
            <p>Total</p>
            <p>Remove</p>
   
          </div>
          <br/>
          <hr />
          {food_list.map((item,index)=>{
              if(cartItems[item._id]>0)
                {
                return(
                  <div key={item._id}>
                     <div key={item._id}className="cart-items-title cart-items-item ">
                  <img src={item.image} alt="" />
                  <p className='titlename'>{item.name}</p>
                  <p>${item.price}</p>
                  <p>{cartItems[item._id]}</p>
                  <p>${item.price*cartItems[item._id]}</p>
                  <p onClick={()=>removeFromCarts(item._id)}className='cross'>X</p>

              </div>
              <hr />
                  </div>
                 
                )
              }
          })}
        </div>
          <div className="cart-bottom">
            <div className="cart-total">
              <h2>Cart Total</h2>
              <div>
                <div className="cart-total-details">
                  <p>SubTotal</p>
                  <p>${getTotalCartAmount()}</p>
                </div>
                <hr />
                <div className="cart-total-details">
                    <p>Delivery Fee</p>
                    <p>${getTotalCartAmount()===0?0:2}</p>
                </div>
                <hr />
                <div className="cart-total-details">
                  <b>Total</b>
                  <b>${getTotalCartAmount()===0?0:getTotalCartAmount()+2}</b>
                </div>
              </div>
              <button onClick={()=>navgiate('/order')}>PROCEED TO CHECKOUT</button>
            </div>
            <div className="cart-promocode">
              <div>
                <p>If You a promo code , Enter it here</p>
                <div className="cart-promocode-input">
                  <input type="text" placeholder='promo code '/>
                  <button>Submit</button>
                </div>
              </div>
            </div>
          </div>


      </div>
  )
}

export default Cart
