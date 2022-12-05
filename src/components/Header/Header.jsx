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
    <header className='header'>
        <div className='header__logo'>
            <Link to={'/'}>
                <img className='header__logo-img' src={logo} alt='logo'/>
            </Link>
        </div>
        <nav className='header__nav'>
            <ul className='header__list menu'>
              <Link to={'/favorite'}>
                <li className='menu__item favorite-icon'><AiOutlineHeart style={{fontSize: '3rem'}}/>
                  {favorite.length > 0
                    &&
                    <span className='menu__favorite-qty'>
                      {favorite.length}
                    </span>
                  }
                </li>
              </Link>
              <Link to={'/cart'}>
                <li className='menu__item cart-icon'><AiOutlineShopping style={{fontSize: '3rem'}}/>
                  {cart.length > 0
                    &&
                    <span className='menu__cart-qty'>
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