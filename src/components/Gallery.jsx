import React from 'react'
import '../App.css';

function Gallery() {
  return (
    <div className='gallery-div'>
      <div class="three-img flex">
            <div class="w-1/3 three-img__img three-img--1"></div>
            <div class="w-1/3 three-img__img three-img--2"></div>
            <div class="w-1/3 three-img__img three-img--3"></div>
      </div>
    </div>
  )
}

export default Gallery