import React, { useEffect } from 'react';


const syntax = () => {

  useEffect(() => {
    console.log('effect');
    return  () => {
      console.log('effect cleanup')
    }
  }, [])


  return (
    <div>
   
    </div>
  )
}

export default syntax;