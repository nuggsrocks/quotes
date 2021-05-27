import { getRandomColor } from './getRandomColor'

export const displayQuote = (quoteObj) => {
  const figure = document.querySelector('main figure')

  figure.style.visibility = 'hidden'

  const blockquote = figure.querySelector('blockquote')

  blockquote.style.backgroundColor = getRandomColor()

  if (blockquote.childNodes.length > 0) {
    blockquote.removeChild(blockquote.childNodes[0])
  }

  blockquote.append(quoteObj.content)

  const figcaption = figure.querySelector('figcaption')

  if (figcaption.childNodes.length > 0) {
    figcaption.removeChild(figcaption.childNodes[0])
  }

  figcaption.append(`- ${quoteObj.author}`)

  figure.style.visibility = 'visible'
}
