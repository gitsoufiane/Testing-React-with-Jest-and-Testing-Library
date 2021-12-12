import React from 'react'

function App() {
  const [color, setColor] = React.useState('red')
  const [checked, setChecked] = React.useState(false)
  const newColor = color === 'red' ? 'blue' : 'red'

  function changeColor(e) {
    setColor(newColor)
  }
  return (
    <div>
      <button
        style={{backgroundColor: color}}
        onClick={changeColor}
        disabled={checked}
      >
        Change to {newColor}
      </button>
      <input
        type="checkbox"
        id="enable-button-checkbox"
        aria-checked={checked}
        onChange={e => setChecked(e.target.checked)}
      />
    </div>
  )
}

export default App
