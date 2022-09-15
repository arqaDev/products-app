import React from 'react'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { AiOutlineHeart, AiOutlineShopping } from 'react-icons/ai'
import logo from '../../assets/logo.png'
import './Header.scss'


const Header = () => {
  const cart = useSelector(state => state.products.cart)
  const favorite = useSelector(state => state.products.favorite)
  
  return (
    <header>
        <nav className='header-nav'>
          <Link to={'/'}>
            <img className='logo' src={logo} alt="logo"/>
          </Link>
            <ul>
              <Link to={'/favorite'}>
                <li className='favorite-icon'><AiOutlineHeart style={{fontSize: '3rem'}}/>
                  {favorite.length > 0
                    &&
                    <span className='favorite-qty'>
                      {favorite.length}
                    </span>
                  }
                </li>
              </Link>
              <Link to={'/cart'}>
                <li className='cart-icon'><AiOutlineShopping style={{fontSize: '3rem'}}/>
                  {cart.length > 0
                    &&
                    <span className='cart-qty'>
                      {cart.length}
                    </span>
                  }
                </li>
              </Link>
            </ul>
        </nav>
    </header> 
  )
}

export default Header