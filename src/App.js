import logo from './logo.svg';
import './App.css';
import ColorBlock from './ColorBlock.js'
import React, {useState} from 'react'

function App() {
  let colors = ['violet', 'blue', 'lightblue', 'green', 'greenyellow', 'yellow', 'orange', 'red']

  let colorMap = colors.map((color, i) => {
    return (
      <ColorBlock color={color} />
    )
  })
  return (
    <div className="App">
      {colorMap}
    </div>
  );
}

export default App;
