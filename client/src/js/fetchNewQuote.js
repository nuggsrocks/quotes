const fetchNewQuote = async () => {
  try {
    const response = await fetch('https://api.quotable.io/random');
    if (response.ok) {
      return await response.json();
    } else {
      console.error(new Error('request failed'));
      return null;
    }
  } catch (e) {
    console.error(e);
    return null;
  }
};

module.exports = fetchNewQuote;
