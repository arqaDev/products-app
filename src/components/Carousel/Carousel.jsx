import React, { useState } from 'react'
import CarouselItem from './CarouselItem'
import { images } from './carouselImages'
import { BiChevronsRight, BiChevronsLeft } from 'react-icons/bi'
import './Carousel.scss'


const Carousel = () => {
  const [offset, setOffset] = useState(0)

  // get images count for carousel
  const imagesLength = Object.keys(images).length

  //event for left arrow
  const handleLeftArrowClick = () => {
    setOffset((currentOffset) => {
      const newOffset = currentOffset + 100

      return Math.min(newOffset, 0)
    })
  }

  //event for right arrow
  const handleRightArrowClick = () => {
    setOffset((currentOffset) => {
      const newOffset = currentOffset - 100
      const maxOffset = -(100 * (imagesLength -1))
      
      return Math.max(newOffset, maxOffset)
    })
  }

  return (
    <div className='mainContainer'>
      <BiChevronsLeft className='chevronLeft' onClick={handleLeftArrowClick}/>
      <div className='window'>
        <div className='allPagesContainer' style={{transform: `translateX(${offset}%)`}}>
          <CarouselItem className='carouselImages' img={images.img_1} />
          <CarouselItem className='carouselImages' img={images.img_2} />   
          <CarouselItem className='carouselImages' img={images.img_3} />   
        </div>
      </div>
      <BiChevronsRight className='chevronRight' onClick={handleRightArrowClick}/>
    </div>
  )
}

export default Carousel