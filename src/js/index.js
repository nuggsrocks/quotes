import '../scss/index.scss'

import 'regenerator-runtime/runtime'
import 'core-js/stable'

import { fetchNewQuote } from './fetchNewQuote'

import { displayQuote } from './displayQuote'
import { displayError } from './displayError'

const init = () => {
  fetchNewQuote()
    .then((data) => displayQuote(data))
    .catch(error => displayError(error))
}

init()

document.querySelector('#newQuote').onclick = init
