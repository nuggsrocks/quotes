import 'core-js/stable';
import 'regenerator-runtime/runtime';
import '../scss/index.scss';

const rootDiv = document.querySelector('div#root');

class Quote {

	static displayQuote(quote, author) {
		let figure = document.querySelector('main figure');

		figure.style.visibility = 'hidden';

		let blockquote = figure.querySelector('blockquote');

		blockquote.style.backgroundColor = getRandomColor();

		blockquote.innerHTML = `<p>${quote}</p>`;

		figure.querySelector('figcaption').innerHTML = `- ${author}`;

		figure.style.visibility = 'visible';
	}
}



const getRandomColor = () => {
	const getRandomNumber = () => {
		return Math.round(Math.random() * (255 - 100) + 100);
	};

	return `rgb(${getRandomNumber()},${getRandomNumber()},${getRandomNumber()})`;
};


const fetchNewQuote = () => {
	fetch('https://api.quotable.io/random')
		.then(res => res.json())
		.then(data => Quote.displayQuote(data['content'], data['author']))
		.catch(e => console.error(e));
};

fetchNewQuote();

document.querySelector('button#newQuote').onclick = () => fetchNewQuote();