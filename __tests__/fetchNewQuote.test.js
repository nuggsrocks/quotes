import { fetchNewQuote } from '../src/js/fetchNewQuote'

describe('fetchNewQuote()', () => {
  afterEach(() => {
    global.fetch.mockClear()
  })

  test('should resolve to valid quote object on success', async () => {
    const data = { _id: 'alpha123' }
    const response = { ok: true, status: 200, json: () => Promise.resolve(data) }
    global.fetch = jest.fn(() => {
      return Promise.resolve(response)
    })

    await expect(fetchNewQuote()).resolves.toStrictEqual(data)
  })

  test('should reject with error on failure', async () => {
    global.fetch = jest.fn(() => {
      return Promise.resolve({ ok: false, status: 404 })
    })

    await expect(fetchNewQuote()).rejects.toThrow()
  })

  test('should reject with error on promise rejection', async () => {
    global.fetch = jest.fn(() => {
      return Promise.reject(new Error('network failure'))
    })

    await expect(fetchNewQuote()).rejects.toThrow()
  })
})
