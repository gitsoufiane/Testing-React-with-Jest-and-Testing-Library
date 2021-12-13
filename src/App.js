import React from 'react'

export function replaceCamelWithSpaces(colorName) {
  return colorName.replace(/\B([A-Z])\B/g, ' $1')
}

function App() {
  const [color, setColor] = React.useState('MediumVioletRed')
  const [disabled, setDisabled] = React.useState(false)
  const newColor = color === 'MediumVioletRed' ? 'MidnightBlue' : 'MediumVioletRed'

  return (
    <div>
      <button
        style={{ backgroundColor: disabled ? 'grey' : color }}
        onClick={() => setColor(newColor)}
        disabled={disabled}
      >
        Change to {replaceCamelWithSpaces(newColor)}
      </button>
      <br />
      <label htmlFor="enable-button-checkbox">Disable Button</label>
      <input
        type="checkbox"
        id="enable-button-checkbox"
        aria-checked={disabled}
        onChange={e => setDisabled(e.target.checked)}
      />
    </div>
  )
}

export default App
