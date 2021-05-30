import { animate } from './animate'

describe('animate', () => {
  describe('fade()', () => {
    it('should call setTimeout', async () => {
      jest.spyOn(window, 'setTimeout')

      const element = document.createElement('div')

      await animate.fade('in', element, 50)

      expect(setTimeout).toHaveBeenCalled()
    })
  })
  describe('fadeIn()', () => {
    it('should fade given element in', async () => {
      const element = document.createElement('div')

      await animate.fadeIn(element, 10)

      expect(element.style.getPropertyValue('opacity')).toEqual('1')
    })
  })
  describe('fadeOut()', () => {
    it('should fade out given element', async () => {
      const element = document.createElement('div')

      await animate.fadeOut(element, 10)

      expect(element.style.getPropertyValue('opacity')).toEqual('0')
    })
  })
})
