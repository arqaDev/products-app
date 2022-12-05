import React from 'react'
import { Link } from 'react-router-dom'
import {
    BsYoutube,
    BsTwitter,
    BsFacebook,
    BsInstagram 
} from 'react-icons/bs'
import './Footer.scss'
import logo from '../../assets/logo.png'


const Footer = () => {

  return (
    <div className='footer__container'>
        <div className="footer__info">
            <div className="footer__shop footer-list">
                <h3>SHOP</h3>
                <div className='footer__item'>
                    <a href="#top">Men's clothing</a>
                </div>
                <div className='footer__item'>
                    <a href="#top">Women's clothing</a>
                </div>
                <div className='footer__item'>
                    <a href="#top">Electronic</a>
                </div>
                <div className='footer__item'>
                    <a href="#top">Jewelery</a>
                </div>
            </div>
            <div className="footer__help footer-list">
                <h3>HELP</h3>
                <div className='footer__item'>
                    <a href="#top">Customer Service</a>
                </div>
                <div className='footer__item'>
                    <a href="#top">My Account</a>
                </div>
                <div className='footer__item'>
                    <a href="#top">Store Locator</a>
                </div>
                <div className='footer__item'>
                    <a href="#top">Legal & Privecy</a>
                </div>
            </div>
            <div className="footer__corporate footer-list">
                <h3>CORPORATE INFO</h3>
                <div className='footer__item'>
                    <a href="#top">Career at Products Shop</a>
                </div>
                <div className='footer__item'>
                    <a href="#top">About Products Shop Group</a>
                </div>
                <div className='footer__item'>
                    <a href="#top">Investor Relations</a>
                </div>
                <div className='footer__item'>
                    <a href="#top">Legal & Privecy</a>
                </div>
            </div>
        </div>
        <div className="footer__social">
            <ul>
                <li><a href="#top"><BsYoutube style={{fontSize: '1.3rem'}}/></a></li>
                <li><a href="#top"><BsTwitter style={{fontSize: '1.3rem'}}/></a></li>
                <li><a href="#top"><BsFacebook style={{fontSize: '1.3rem'}}/></a></li>
                <li><a href="#top"><BsInstagram style={{fontSize: '1.3rem'}}/></a></li>
            </ul>
        </div>
        <div className="footer__logo">
            <Link to={'/'}>
                <img className='logo' src={logo} alt="logo" />
            </Link>
        </div>
    </div>
  )
}

export default Footer
