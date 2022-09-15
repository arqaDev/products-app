import React from 'react'
import Header from '../Header/Header'
import Routes from '../../routes/Router'
import Footer from '../Footer/Footer'

const Layout = () => {
  return (
    <div>
        <Header />
        <div className='main'>
            <Routes/>
        </div>
        <Footer/>
    </div>
  )
}

export default Layout