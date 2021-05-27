export const fetchNewQuote = async () => {
  const response = await global.fetch('https://api.quotable.io/random')
  if (!response.ok) {
    throw new Error('request failed')
  }

  return await response.json()
}
