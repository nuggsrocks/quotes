import { constructAlert } from '../src/js/constructAlert'

describe('constructAlert()', () => {
  it('should construct alert message element from error object', () => {
    const error = new Error('error message')

    const alertElement = constructAlert(error)

    expect(alertElement.textContent).toMatch(error.message)
  })
})
