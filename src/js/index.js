import '../scss/index.scss'

import 'regenerator-runtime/runtime'
import 'core-js/stable'

import { fetchNewQuote } from './fetchNewQuote'

import { constructQuote } from './constructQuote'
import { constructAlert } from './constructAlert'
import { constructLoadingIcon } from './constructLoadingIcon'

const root = document.querySelector('#root')

const loadingIcon = constructLoadingIcon()

const init = () => {
  root.innerHTML = ''
  root.append(loadingIcon)

  fetchNewQuote()
    .then((data) => {
      root.innerHTML = ''
      root.append(constructQuote(data))
    })
    .catch(error => {
      root.innerHTML = ''
      root.append(constructAlert(error))
    })
}

init()

document.querySelector('#newQuote').onclick = init
