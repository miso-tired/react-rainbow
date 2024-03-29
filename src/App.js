import logo from './logo.svg';
import './App.css';
import React, { useState } from 'react'
import ColorBlock from './ColorBlock.js'
import ColorForm from './ColorForm.js'

function App() {
  let [colors, setColors] = useState([
    'violet', 'blue', 'lightblue', 'green', 'greenyellow', 'yellow', 'orange', 'red'
  ])

  let colorMap = colors.map((color, i) => {
    return (
      <ColorBlock color={color} />
    )
  })

  const addColor = (newColor) => {
    setColors([colors, newColor])
  }

  return (
    <div className="App">
    {colors.map((color, i) => 
        <ColorBlock key={i} color={color} />
    )}
    <ColorForm addColor={addColor} />
</div>
  )
}

export default App;
