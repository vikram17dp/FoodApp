import React, {useContext } from 'react'
import propTypes from 'prop-types'
import { assets } from '../../assets/assets'
import './FoodItem.css'
import { StoreContext } from '../../context/StoreContext.jsx'


const FoodItem = ({id,name,price,description,image}) => {
    // const [itemCount,setitemCount]=useState(0);
    const{cartItems,addToCart,removeFromCarts} = useContext(StoreContext);
  return (
    <div className='food-item'>
        <div className="food-item-img-conatiner">
            <img src={image} className='food-item-image' />

            {
                !cartItems[id]?<img className='add' src={assets.add_icon_white} onClick={()=>addToCart(id)}/>:<div className='food-item-counter'>
                    <img src={assets.remove_icon_red} onClick={()=>removeFromCarts(id)} alt="" />
                    <p>{cartItems[id]}</p>
                    <img src={assets.add_icon_white} onClick={()=>addToCart(id)} />
                </div>
            }
        </div>
        <div className="food-item-info">
            <div className="food-item-name-rating">
                <p>{name}</p>
                <img src={assets.rating_starts} alt="" />
            </div>
            <p className='food-item-dec'>{description}</p>
            <p className='food-item-price'>${price}</p>
        </div>
      
    </div>
  )
}
FoodItem.propTypes={
    id:propTypes.string.isRequired,
    name:propTypes.string.isRequired,
    price:propTypes.number.isRequired,
    description:propTypes.string.isRequired,
    image:propTypes.string.isRequired
}
export default FoodItem
