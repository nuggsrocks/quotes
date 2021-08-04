import '../scss/index.scss'

import 'regenerator-runtime/runtime'
import 'core-js/stable'

import { fetchNewQuote } from './fetchNewQuote'

import { constructQuote } from './constructQuote'
import { constructLoadingIcon } from './constructLoadingIcon'
import { getRandomColor } from './getRandomColor'
import animate from 'animate'
const root = document.querySelector('#root')

const loadingIcon = constructLoadingIcon()

loadingIcon.style.setProperty('opacity', '0')

root.append(loadingIcon)

const state = {
  quote: null,
  error: null
}

const transitionTime = 400

const newQuoteBtn = document.querySelector('button#newQuote')

const waitForFetch = () => {

  loadingIcon.style.setProperty('background-color', getRandomColor())

  animate.fadeIn(loadingIcon, transitionTime)

  setTimeout(() => animate.fadeOut(loadingIcon, transitionTime), transitionTime)

  setTimeout(() => {
    if (state.quote === null) {
      waitForFetch()
    } else {
      loadingIcon.remove()
      root.append(state.quote)
      animate.fadeIn(state.quote, transitionTime)
      setTimeout(() => {
        newQuoteBtn.onclick = refresh
      })
    }
  }, transitionTime * 2)
}

const init = () => {
  fetchNewQuote().then(data => {
    state.quote = constructQuote(data)
  })

  waitForFetch()
}

init()

const refresh = () => {
  console.log('click')

  newQuoteBtn.onclick = null

  animate.fadeOut(state.quote, transitionTime)

  setTimeout(() => {
    state.quote.remove()

    state.quote = null

    root.append(loadingIcon)

    init()
  }, transitionTime)
}
