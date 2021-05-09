const displayQuote = require('./displayQuote');
const fetchNewQuote = require('./fetchNewQuote');

const init = () => {
  fetchNewQuote().then((data) => displayQuote(data));
};

init();

module.exports = init;
