import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { useParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import {
    addCurrentProduct,
    addToCart,
    addToFavorite,
    removeFromFavorite
} from '../../features/productsSlice'
import { AiOutlineHeart } from 'react-icons/ai'
import './ProductDetails.scss'


const ProductDetails = () => {
  const [isActive, setIsActive] = useState(false)
  const product = useSelector(state => state.products.currentProduct)
  const dispatch = useDispatch()
  const params = useParams()
  
  useEffect(() => {
    const getProduct = async () => {
      const resp = await axios.get(`https://fakestoreapi.com/products/${params.id}`)
      dispatch(addCurrentProduct(resp.data))
    }
    getProduct()
  }, [params.id, dispatch])

  const addItemToCart = () => {
    dispatch(addToCart(product))
  }

  const addItemToFavorite = (bool) => {
    const active = !bool
    if (active) {
      dispatch(addToFavorite(product))
    } else {
      dispatch(removeFromFavorite(product.id))
    }
    setIsActive(!isActive)
  }

  return (
    <div className='product-detail'>
      <div className="product__picture">
        <img src={product.image} alt="item" />
      </div>
      <div className="product__info">
        <h1 className='product__title'>{product.title}</h1>
        <div className='product__category'>
          {product.category}
        </div>
        <div className='product__description'>
          {product.description}
        </div>
        <div className="product__price">
          $ {product.price} 
        </div>
        <div className="product__btns">
          <button className='cart-btn' onClick={() => addItemToCart()}>ADD TO CART</button>
          <button
            className={isActive ? 'favorite-btn active' : 'favorite-btn'}
            onClick={() => addItemToFavorite(isActive)}>
              <AiOutlineHeart style={{fontSize: '1.7rem'}}/>
          </button>
        </div>
      </div>
    </div>
  )
}

export default ProductDetails
