import { constructQuote } from './constructQuote'

describe('constructQuote()', () => {
  test('should return element with blockquote and author caption', () => {
    const quote = { author: 'Lincoln', content: 'Four score and seven years ago' }

    const element = constructQuote(quote)

    expect(element).toBeInstanceOf(HTMLElement)

    const blockquote = element.querySelector('blockquote')

    const figcaption = element.querySelector('figcaption')

    expect(blockquote.textContent).toEqual(quote.content)

    expect(figcaption.textContent).toEqual('- ' + quote.author)
  })
})
