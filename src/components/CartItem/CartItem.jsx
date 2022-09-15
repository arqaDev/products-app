import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { removeFromCart } from '../../features/productsSlice'
import { AiOutlineClose } from 'react-icons/ai'
import './CartItem.scss'


const CartItem = ({product}) => {
    const [count, setCount] = useState(1)
    const dispatch = useDispatch()

    const increment = () => {
        if (count < 99) {
            const value = Number(count)
            setCount(value + 1)
        }
    }

    const decrement = () => {
        if (count > 1) {
            setCount(count - 1)
        }
    }

    const changeValue = (e) => {
        if (e.target.value <= 99 && e.target.value >= 0) {
            setCount(e.target.value)
        }
    }
    
    return (
        <div className="cart-item__content">
            <div className="cart-item__card">
                <div className="cart-item__img">
                    <img src={product.image} alt="product"/>
                </div>
                <div className="cart-item__info">
                    <h1 className="cart-item__title">{product.title}</h1>
                    <div className="cart-item__counter">
                        <button className="decrement" onClick={decrement}>-</button>
                        <input className="input-value" type="number" value={count} onChange={changeValue} min="1" max="2"/>
                        <button className="increment" onClick={increment}>+</button>
                    </div>
                    <div className="cart-item__price">$ {(product.price * count).toFixed(2)}</div>
                </div>
                <button className="delete-btn" onClick={() => dispatch(removeFromCart(product.id))}><AiOutlineClose style={{fontSize: '1.5rem'}}/></button>
            </div>                
        </div>
        
    )
}

export default CartItem