import React from 'react'
import { useSelector } from 'react-redux'
import FavoriteItem from '../components/FavoriteItem/FavoriteItem'


const Favorite = () => {
  const favoriteProducts = useSelector(state => state.products.favorite)
  const products = favoriteProducts.map(product => <FavoriteItem product={product} key={product.id}/>)

  return (
    <div>
      {favoriteProducts.length > 0
        ? products
        : <h1 style={{marginTop: '4rem', fontSize: '2rem', display: 'flex', justifyContent: 'center'}}>Your wish list is empty!</h1>
      }
    </div>
  )
}

export default Favorite