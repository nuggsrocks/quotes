export const getRandomColor = () => {
  const getRandomRgbValue = () => {
    return Math.round(Math.random() * (255 - 100) + 100)
  }

  return `rgb(${getRandomRgbValue()},${getRandomRgbValue()},${getRandomRgbValue()})`
}
