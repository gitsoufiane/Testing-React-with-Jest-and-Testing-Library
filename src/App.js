import React from 'react'

function App() {
  const [color, setColor] = React.useState('red')
  const newColor = color === 'red' ? 'blue' : 'red'

  function changeColor(e) {
    setColor(newColor)
  }
  return (
    <div>
      <button style={{backgroundColor: color}} onClick={changeColor}>
        Change to {newColor}
      </button>
    </div>
  )
}

export default App
