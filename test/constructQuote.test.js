import { constructQuote } from '../src/js/constructQuote'

describe('constructQuote()', () => {
  test('should return element with quote and author displayed', () => {
    const quote = { author: 'Lincoln', content: 'Four score and seven years ago' }

    const element = constructQuote(quote)

    expect(element.textContent).toMatch(quote.author)
    expect(element.textContent).toMatch(quote.content)
  })
})
