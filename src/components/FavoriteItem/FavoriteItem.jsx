import React from 'react'
import { removeFromFavorite } from '../../features/productsSlice'
import { useDispatch } from 'react-redux'
import { AiOutlineClose } from 'react-icons/ai'
import './FavoriteItem.scss'


const FavoriteItem = ({product}) => {
  const dispatch = useDispatch()

  return (
      <div className="favorite-item__content">
        <div className="favorite-item__card">
            <div className="favorite-item__img">
                <img src={product.image} alt="product"/>
            </div>
            <div className="favorite-item__info">
                <h1 className="favorite-item__title">{product.title}</h1>
                <div className="favorite-item__category">{product.category}</div>
                <p className="favorite-item__description">{product.description}</p>
                <button className="favorite-item__btn">ADD TO CART</button>
            </div>
            <button className="delete-btn"
              onClick={() => dispatch(removeFromFavorite(product.id))}>
              <AiOutlineClose style={{fontSize: '1.5rem'}}/>
            </button>                
        </div>
      </div>
  )
}

export default FavoriteItem