import React,  { useRef, useEffect, useState } from 'react'

const ImageToggleOnScroll = ({primaryImage, secondaryImage}) => {

const imageRef = useRef(null);
const [inView, setInView] = useState(false);
const [isLoading, setIsLoading] = useState(true);


const isInView = () => {
  if (imageRef.current) {
    const rect = imageRef.current.getBoundingClientRect();
    return rect.top >= 0 && rect.bottom <= window.innerHeight;
  }
}

const scrollHandler = () => {
  setInView(() => {
    return isInView();
  })
}

useEffect(() => {
  window.addEventListener("scroll", scrollHandler);
  setInView(isInView());
  setIsLoading(false);
  return ( () => {
    window.removeEventListener("scroll", scrollHandler);

  }) 
}, [isLoading])


  return !isLoading && (
    <div>
      <img 
        src={inView ? primaryImage : secondaryImage} alt="" width='800px' ref={imageRef}
        />
    </div>
  )
}

export default ImageToggleOnScroll;