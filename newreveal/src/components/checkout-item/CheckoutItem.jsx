import React from 'react'
import './CheckoutItem.scss'
import { useContext } from 'react'
import { CartContext } from '../../contexts/CartContext'

const CheckoutItem = ( { cartItem } ) => {
    const { name, imageUrl, price, quantity } = cartItem

    const { clearItemFromCart, addItemToCart, removeItemFromCart } = useContext(CartContext)

    const clearItemHandler =  () => clearItemFromCart(cartItem)
    const addItemHandler = () => addItemToCart(cartItem)
    const removeItemHandler = () => removeItemFromCart(cartItem)

  return (
    <div className='checkout-item-container'>
        <div className='image-container'>
            <img src={imageUrl} alt={`${name}`}/>
        </div>
        <span className='name'>{name}</span>
        <span className='quantity'>
            {/* &#10094; is html code for < */}
            <div className='arrow' onClick={removeItemHandler}>&#10094;</div>
            <span className='value'>
            {quantity}
            </span>
            {/* &#10095; is html code for > */}
            <div className='arrow' onClick={addItemHandler}>&#10095;</div>
            </span>
        <span className='price'>${price}</span>
        {/* &#10005 is html code for X */}
        <div className='remove-button' onClick={clearItemHandler}>&#10005;</div>
    </div>
  )
}

export default CheckoutItem