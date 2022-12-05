import React, { useState } from 'react'
import { BsSearch } from 'react-icons/bs'
import { useDispatch } from 'react-redux';
import { findProducts } from '../../../features/productsSlice';
import MyButton from '../MyButton/MyButton';
import MySelect from '../MySelect/MySelect';
import './SearchButton.scss'
import './SearchInput.scss'



const MyForm = ({inputPlaceholder}) => {
  const dispatch = useDispatch()
  const [state, setState] = useState('')

  function addSearch(e) {
    e.preventDefault()
    dispatch(findProducts(state))   
  }

  return (
    <form onSubmit={addSearch} style={{display: 'flex', width: '100%', flexDirection: 'row', justifyContent: 'space-between', position: 'relative', margin: '60px 0'}}>
        <div style={{position: 'relative'}}>
            <input className='searchInput' placeholder={inputPlaceholder} value={state} onChange={(e) => setState(e.target.value)}/>
            <MyButton className='searchButton' type='submit'><BsSearch /></MyButton>
        </div>
        <div>
          <MySelect />
        </div> 
    </form>
  )
}

export default MyForm