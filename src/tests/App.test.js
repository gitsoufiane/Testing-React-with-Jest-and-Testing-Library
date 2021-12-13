import {render, screen, fireEvent} from '@testing-library/react'
import App, {replaceCamelWithSpaces} from '../App'

test('button has correct initial color', () => {
  render(<App />)
  const button = screen.getByRole('button', {
    name: /change to Midnight Blue/i,
  })
  expect(button).toBeInTheDocument()
  expect(button).toHaveStyle({backgroundColor: 'MediumVioletRed'})
})

test('button turns blue when clicked', () => {
  render(<App />)
  const button = screen.getByRole('button', {name: /change to Midnight Blue/i})
  fireEvent.click(button)
  expect(button).toHaveStyle({backgroundColor: 'MidnightBlue'})
  expect(button).toHaveTextContent(/change to Medium Violet Red/i)
})

test('initial condition', () => {
  render(<App />)

  //check that the button start out enabled
  const button = screen.getByRole('button', {name: /change to Midnight Blue/i})
  expect(button).toBeEnabled()

  // check that the checkout starts  out unchecked
  const checkbox = screen.getByRole('checkbox', {
    name: 'Disable Button',
  })
  expect(checkbox).not.toBeChecked()

  fireEvent.click(checkbox)
  expect(button).toBeDisabled()
  expect(checkbox).toBeChecked()
  expect(button).toHaveStyle({backgroundColor: 'grey'})
})

describe('spaces before camel case capital letters', () => {
  test('works for no inner capital letters', () => {
    expect(replaceCamelWithSpaces('Red')).toBe('Red')
  })
  test('works for one inner capital letter', () => {
    expect(replaceCamelWithSpaces('MidnightBlue')).toBe('Midnight Blue')
  })
  test('works for multiple inner capital letters', () => {
    expect(replaceCamelWithSpaces('MediumVioletRed')).toBe('Medium Violet Red')
  })
})
