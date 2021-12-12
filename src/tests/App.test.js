import {render, screen, fireEvent} from '@testing-library/react'
import App from '../App'

test('button has correct initial color', () => {
  render(<App />)
  const button = screen.getByRole('button', {name: /change to blue/i})
  expect(button).toBeInTheDocument()
  expect(button).toHaveStyle({backgroundColor: 'red'})
})

test('button turns blue when clicked', () => {
  render(<App />)
  const button = screen.getByRole('button', {name: /change to blue/i})
  fireEvent.click(button)
  expect(button).toHaveStyle({backgroundColor: 'blue'})
  expect(button).toHaveTextContent(/change to red/i)
})

test('initial condition', () => {
  render(<App />)

  //check that the button start out enabled
  const button = screen.getByRole('button', {name: /change to blue/i})
  expect(button).toBeEnabled()

  // check that the checkout starts  out unchecked
  const checkbox = screen.getByRole('checkbox')
  expect(checkbox).not.toBeChecked()

  fireEvent.click(checkbox)
  expect(button).toBeDisabled()
  expect(checkbox).toBeChecked()
})
