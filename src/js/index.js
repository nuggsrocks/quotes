import '../scss/index.scss'

import 'regenerator-runtime/runtime'
import 'core-js/stable'

import { fetchNewQuote } from './fetchNewQuote'

import { constructQuote } from './constructQuote'
import { constructLoadingIcon } from './constructLoadingIcon'
import { animate } from './animate'

const root = document.querySelector('#root')

const loadingIcon = constructLoadingIcon()

const state = {
  quote: null,
  error: null
}

const init = () => {
  fetchNewQuote().then(data => {
    state.quote = constructQuote(data)
  })

  const callback = () => {
    animate.fadeIn(root, loadingIcon).then(() => {
      animate.fadeOut(loadingIcon).then(() => {
        if (state.quote !== null) {
          animate.fadeIn(root, state.quote)
          return
        }

        console.log('callback called')
        callback()
      })
    })
  }

  callback()
}

init()

document.querySelector('#newQuote').onclick = () => {
  animate.fadeOut(state.quote).then(() => {
    state.quote = null
    init()
  })
  state.quote = null
}
