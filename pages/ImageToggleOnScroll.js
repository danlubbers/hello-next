import React from 'react';
import ImageToggleOnScroll from '../src/ImageToggleOnScroll';

const imageChangeOnScroll = () => {
  return (
    <div>
      <ImageToggleOnScroll  
          primaryImage='/static/floro-cristina-5107-final.jpg' 
          secondaryImage='./static/floro-cristina-5107-before.jpg'
          alt="" />
      <ImageToggleOnScroll  
          primaryImage='/static/floro-cristina-5107-final.jpg' 
          secondaryImage='./static/floro-cristina-5107-before.jpg'
          alt="" />
      <ImageToggleOnScroll  
          primaryImage='/static/floro-cristina-5107-final.jpg' 
          secondaryImage='./static/floro-cristina-5107-before.jpg'
          alt="" />
      <ImageToggleOnScroll  
          primaryImage='/static/floro-cristina-5107-final.jpg' 
          secondaryImage='./static/floro-cristina-5107-before.jpg'
          alt="" />
      <ImageToggleOnScroll  
          primaryImage='/static/floro-cristina-5107-final.jpg' 
          secondaryImage='./static/floro-cristina-5107-before.jpg'
          alt="" />
      <ImageToggleOnScroll  
          primaryImage='/static/floro-cristina-5107-final.jpg' 
          secondaryImage='./static/floro-cristina-5107-before.jpg'
          alt="" />
    </div>
  )
}

export default imageChangeOnScroll;