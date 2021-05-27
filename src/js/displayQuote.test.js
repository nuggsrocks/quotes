import { displayQuote } from './displayQuote'

describe('displayQuote()', () => {
  beforeEach(() => {
    document.body.innerHTML =
      '<main>' +
      ' <figure>' +
      '  <blockquote></blockquote>' +
      '  <figcaption></figcaption>' +
      ' </figure>' +
      '</main>'
  })
  test('should display quote and author in dom', () => {
    displayQuote({ author: 'Lincoln', content: 'Four score and seven years ago' })

    const blockquote = document.querySelector('blockquote')

    expect(blockquote.textContent).toEqual('Four score and seven years ago')

    const figcaption = document.querySelector('figcaption')

    expect(figcaption.textContent).toEqual('- Lincoln')
  })

  test('should remove existing quote from dom before adding new one', () => {
    displayQuote({ author: 'Lincoln', content: 'Four score and seven years ago' })

    displayQuote({ author: 'Kennedy', content: 'Ask not' })

    const blockquote = document.querySelector('blockquote')

    expect(blockquote.textContent).toEqual('Ask not')

    const figcaption = document.querySelector('figcaption')

    expect(figcaption.textContent).toEqual('- Kennedy')
  })
})
