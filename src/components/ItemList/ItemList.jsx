import React from 'react'
import { useEffect} from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchAsyncProducts } from '../../features/productsSlice'
import Item from '../Item/Item'
import './ItemList.scss'


const ItemsList = () => {
  const products = useSelector(state => state.products.products) 
  const dispatch = useDispatch()

  // render data with products 
  useEffect(() => {
    dispatch(fetchAsyncProducts())
  }, [dispatch])  

  return (
    <section className="item-list">
      <div className='item-list__container'>
        {products.map(item => <Item item={item} key={item.id}/>)}
      </div>
    </section>
  )
}

export default ItemsList