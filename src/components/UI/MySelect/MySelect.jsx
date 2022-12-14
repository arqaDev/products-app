import React, { useState } from 'react'
import { sortProducts } from '../../../features/productsSlice'
import { useDispatch } from 'react-redux/es/exports'
import './MySelect.scss'


const MySelect = () => {
  const [isOpened, setIsOpened] = useState(false)
  const [sortTitle, setSortTitle] = useState('Sort by')
  const dropdownMenu = ['dropdown-menu']
  const dispatch = useDispatch()

  function setSortType(sort) {
    dispatch(sortProducts(sort))

    // change select title 
    if (sort === 'LOWEST_PRICE') {
      setSortTitle('Lowest Price')
    } else {
      setSortTitle('Highest Price')
    }

    setIsOpened(false)
  }

  if (isOpened) {
    dropdownMenu.push('active')
  }
  
  function toggleBtn() {
    setIsOpened(!isOpened)
  }

  return (
    <fieldset className='select'>
      <button className={dropdownMenu.join(' ')} onClick={toggleBtn}>{sortTitle}</button>
      { isOpened && 
        (
          <div>
            <ul className='sort-list' style={{position: 'absolute', left: '0'}}>
              <li className='sort_value' onClick={() => setSortType('LOWEST_PRICE')}>Lowest Price</li>
              <li className='sort_value' onClick={() => setSortType('HIGHEST_PRICE')}>Highest Price</li>
            </ul>
          </div>
        )
      }
    </fieldset>
  )
}

export default MySelect