import React, { useState } from 'react'

const index = () => {

  const [text, setText] = useState('');
  const [history, setHistory] = useState([]);


  return (
    <div>
      <input 
        placeholder="Enter some text" 
        onChange={(e => {
          setText(e.target.value)
          setHistory([...history, e.target.value])
        })}
      />
      <p>{text}</p>
      <br/>
      <ul>
        {history.map(e => {
          return (
            <div>{e}</div>
          )
        })}
      </ul>
    </div>
  )
}

export default index;