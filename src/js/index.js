import '../scss/index.scss'

import 'regenerator-runtime/runtime'
import 'core-js/stable'

import { fetchNewQuote } from './fetchNewQuote'

import { constructQuote } from './constructQuote'
import { constructLoadingIcon } from './constructLoadingIcon'
import { animate } from './animate'
import { getRandomColor } from './getRandomColor'

const root = document.querySelector('#root')

const loadingIcon = constructLoadingIcon()

const state = {
  quote: null,
  error: null
}

const transitionTime = 400

const waitForFetch = () => {
  loadingIcon.style.setProperty('opacity', '0')

  root.append(loadingIcon)

  loadingIcon.style.setProperty('background-color', getRandomColor())

  animate.fadeIn(loadingIcon, transitionTime).then(() => {
    animate.fadeOut(loadingIcon, transitionTime).then(() => {
      if (state.quote !== null) {
        loadingIcon.remove()
        root.append(state.quote)
        animate.fadeIn(state.quote, transitionTime).then(() => {
        })

        return
      }

      waitForFetch()
    })
  })
}

const init = () => {
  fetchNewQuote().then(data => {
    state.quote = constructQuote(data)
  })

  waitForFetch()
}

init()

document.querySelector('#newQuote').onclick = () => {
  animate.fadeOut(state.quote, transitionTime).then(() => {
    state.quote.remove()
    state.quote = null
    init()
  })
}
