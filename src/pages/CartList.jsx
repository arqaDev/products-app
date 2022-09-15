import React from 'react'
import { useSelector } from 'react-redux'
import CartItem from '../components/CartItem/CartItem'


const CartList = () => {
  const cartProducts = useSelector(state => state.products.cart)
  const products = cartProducts.map(product => <CartItem product={product} key={product.id}/>)

  return (
    <div>
      {cartProducts.length > 0
        ? products
        : <h1 style={{marginTop: '4rem', fontSize: '2rem', display: 'flex', justifyContent: 'center'}}>Your cart is empty!</h1>
      }
    </div>
  )
}

export default CartList