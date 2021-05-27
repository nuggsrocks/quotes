import { getRandomColor } from './getRandomColor'

describe('getRandomColor()', () => {
  test('should return valid rgb string format', () => {
    const rgbString = getRandomColor()

    expect(rgbString).toMatch(/rgb\((\d{1,3},){2}\d{1,3}\)/)
  })
  test('should return valid rgb values', () => {
    const rgbString = getRandomColor()

    const colorValues = rgbString.match(/\d{1,3}/g)

    expect(colorValues.filter((value) => Number(value) > 255 || Number(value) < 0)).toStrictEqual([])
  })
})
