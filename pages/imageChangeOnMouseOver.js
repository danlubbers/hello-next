import React from 'react';
import ImageToggleOnMouseOver from '../src/ImageToggleOneMouseOver';

const imageChangeOnMouseOver = () => {
  return (
    <div>
      <ImageToggleOnMouseOver  
          primaryImage='/static/floro-cristina-5107-final.jpg' 
          secondaryImage='./static/floro-cristina-5107-before.jpg'
          alt="" />
    </div>
  )
}

export default imageChangeOnMouseOver;