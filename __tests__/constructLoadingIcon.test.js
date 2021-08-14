import { constructLoadingIcon } from '../src/js/constructLoadingIcon'

describe('constructLoadingIcon()', () => {
  it('should return element with class "loading"', () => {
    const div = constructLoadingIcon()

    expect(div.classList).toContain('loading')
  })
})
