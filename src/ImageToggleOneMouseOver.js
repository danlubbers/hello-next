import React,  { useRef } from 'react'

const ImageToggleOneMouseOver = ({primaryImage, secondaryImage}) => {

const imageRef = useRef(null);

  return (
    <div>
      <img onMouseOver={() => {
        imageRef.current.src = secondaryImage;
      }} onMouseOut={() => {
        imageRef.current.src = primaryImage;

      }}
        src={primaryImage} alt="" width='800px' ref={imageRef}
        />
    </div>
  )
}

export default ImageToggleOneMouseOver;