import { animate } from './animate'

describe('animate', () => {
  beforeEach(() => {
    document.body.innerHTML = ''
  })
  describe('fadeIn()', () => {
    it('should fade given element in to root element', async () => {
      window.setTimeout = jest.fn((callback) => callback())

      const element = document.createElement('div')

      await animate.fadeIn(document.body, element)

      expect(document.body.childNodes).toContain(element)
      expect(element.style.getPropertyValue('opacity')).toEqual('1')
      expect(window.setTimeout).toHaveBeenCalled()
    })
  })
  describe('fadeOut()', () => {
    it('should fade given element out and remove it from dom', async () => {
      window.setTimeout = jest.fn((callback) => callback())

      const element = document.createElement('div')
      document.body.append(element)

      await animate.fadeOut(element)

      expect(document.body.childNodes.length).toEqual(0)
      expect(element.style.getPropertyValue('opacity')).toEqual('0')
      expect(window.setTimeout).toHaveBeenCalled()
    })
  })
})
