import React from 'react'
import './Carousel.scss'


const CarouselItem = ({ ...props}) => {
  return (
    <div className='item' {...props}>
      <img src={props.img} style={{height: '100%', width: '100%'}} alt="carousel" />
    </div>
  )
}

export default CarouselItem