import { getRandomColor } from './getRandomColor'

export const constructQuote = (quoteObj) => {
  const figure = document.createElement('figure')

  const blockquote = document.createElement('blockquote')

  blockquote.style.backgroundColor = getRandomColor()

  blockquote.append(quoteObj.content)

  const figcaption = document.createElement('figcaption')

  figcaption.append(`- ${quoteObj.author}`)

  figure.append(blockquote)
  figure.append(figcaption)

  return figure
}
