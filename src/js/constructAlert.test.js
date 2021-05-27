import { constructAlert } from './constructAlert'

describe('constructAlert()', () => {
  it('should construct alert message element from error object', () => {
    const error = new Error('error message')

    const alertElement = constructAlert(error)

    expect(alertElement).toBeInstanceOf(HTMLElement)
    expect(alertElement.textContent).toEqual(error.message)
  })
})
