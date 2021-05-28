export const animate = {
  fadeIn: (root, element) => {
    element.style.setProperty('opacity', '0')

    root.append(element)

    return new Promise(resolve => {
      const increment = () => {
        const opacity = element.style.getPropertyValue('opacity')

        const nextOpacity = Number(opacity) + 0.05

        if (nextOpacity >= 1) {
          element.style.setProperty('opacity', '1')
          return resolve()
        }
        element.style.setProperty('opacity', nextOpacity.toString())

        window.setTimeout(increment, 25)
      }

      increment()
    })
  },
  fadeOut: (element) => {
    element.style.setProperty('opacity', '1')

    return new Promise(resolve => {
      const increment = () => {
        const opacity = element.style.getPropertyValue('opacity')

        const nextOpacity = Number(opacity) - 0.05

        if (nextOpacity <= 0) {
          element.style.setProperty('opacity', '0')
          element.remove()
          return resolve()
        }
        element.style.setProperty('opacity', nextOpacity.toString())

        window.setTimeout(increment, 25)
      }

      increment()
    })
  }
}
