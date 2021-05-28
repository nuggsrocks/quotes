import { constructLoadingIcon } from './constructLoadingIcon'

describe('constructLoadingIcon()', () => {
  it('should add div with class "loading" to the given root element and return the div', () => {
    const div = constructLoadingIcon()

    expect(div).toBeInstanceOf(HTMLElement)
    expect(div.classList).toContain('loading')
  })
})
