import { displayError } from './displayError'

describe('displayError()', () => {
  it('should display message from error object', () => {
    const error = new Error('message')

    displayError(error)

    expect(document.querySelector('.error').textContent).toEqual(error.message)
  })
})
