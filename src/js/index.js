document.onload = () => {
  fetchNewQuote();

  document.querySelector('button#newQuote').onclick = fetchNewQuote;
};

const displayQuote = (quote, author) => {
  const figure = document.querySelector('main figure');

  figure.style.visibility = 'hidden';

  const blockquote = figure.querySelector('blockquote');

  blockquote.style.backgroundColor = getRandomColor();


  if (blockquote.childNodes.length > 0) {
    blockquote.removeChild(blockquote.childNodes[0]);
  }

  blockquote.append(quote);

  const figcaption = figure.querySelector('figcaption');

  if (figcaption.childNodes.length > 0) {
    figcaption.removeChild(figcaption.childNodes[0]);
  }

  figcaption.append(`- ${author}`);

  figure.style.visibility = 'visible';
};


const getRandomColor = () => {
  const getRandomRgbValue = () => {
    return Math.round(Math.random() * (255 - 100) + 100);
  };

  return `rgb(${getRandomRgbValue()},${getRandomRgbValue()},${getRandomRgbValue()})`;
};


const fetchNewQuote = () => {
  fetch('https://api.quotable.io/random')
      .then((res) => res.json())
      .then((data) => displayQuote(data['content'], data['author']))
      .catch((e) => console.error(e));
};
