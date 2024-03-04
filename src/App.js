import logo from './logo.svg';
import './App.css';
import ColorBlock from './ColorBlock.js'
import React, {useState} from 'react'

function App() {
  let [colors, setColors] = useState([
    'violet', 'blue', 'lightblue', 'green', 'greenyellow', 'yellow', 'orange', 'red'
  ])

  let colorMap = colors.map((color, i) => {
    return (
      <ColorBlock color={color} />
    )
  })
  return (
    <div className="App">
    {colors.map((color, i) => 
        <ColorBlock key={i} color={color} />
    )}
</div>
  );
}

export default App;
