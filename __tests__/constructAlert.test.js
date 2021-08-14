import { constructAlert } from '../src/js/constructAlert'

describe('constructAlert()', () => {
  it('should return element that displays error message', () => {
    const error = new Error('error message')

    const alertElement = constructAlert(error)

    expect(alertElement.textContent).toMatch(error.message)
  })
})
