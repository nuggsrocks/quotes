
const fade = (type, element, time) => {
  const opacityDelta = 1 / time * 1000 / 60

  return new Promise(resolve => {
    const increment = () => {
      const opacity = element.style.getPropertyValue('opacity')

      let nextOpacity

      if (type === 'in') {
        nextOpacity = Number(opacity) + opacityDelta

        if (nextOpacity > 1) {
          element.style.setProperty('opacity', '1')
          return resolve(nextOpacity)
        }
      }
      if (type === 'out') {
        nextOpacity = Number(opacity) - opacityDelta
        if (nextOpacity < 0) {
          element.style.setProperty('opacity', '0')
          return resolve()
        }
      }
      element.style.setProperty('opacity', nextOpacity.toString())

      setTimeout(increment, 1000 / 60)
    }

    increment()
  })

}

export const animate = {
  fade,
  fadeIn: (element, time) => fade('in', element, time),
  fadeOut: (element, time) => fade('out', element, time)
}
