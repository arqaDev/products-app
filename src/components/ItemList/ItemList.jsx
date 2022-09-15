import React from 'react'
import { useEffect} from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchAsyncProducts } from '../../features/productsSlice'
import Item from '../Item/Item'


const ItemsList = () => {
  const products = useSelector(state => state.products.products) 
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(fetchAsyncProducts())
  }, [dispatch])  

  return (
    <section style={{display: 'flex', width: '100%'}}>
      <div className='container' style={{display: 'grid', padding: '20px', width: '100%', gridTemplateColumns: '1fr 1fr 1fr 1fr', gridRowGap: '40px', overflow: 'hidden'}}>
        {products.map(item => <Item item={item} key={item.id}/>)}
      </div>
    </section>
  )
}

export default ItemsList