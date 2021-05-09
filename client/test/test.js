const getRandomColor = require('../src/js/getRandomColor');
const fetchNewQuote = require('../src/js/fetchNewQuote');
const displayQuote = require('../src/js/displayQuote');
const fs = require('fs');
const path = require('path');

const mockFetch = (response) => {
  return jest.fn(() => {
    return Promise.resolve(response);
  });
};

describe('displayQuote()', () => {
  test('should display quote and author in dom', () => {
    const html = fs.readFileSync(path.resolve('./src/index.html'));

    document.documentElement.innerHTML = html.toString();

    displayQuote({author: 'Lincoln', content: 'Four score and seven years ago'});

    const blockquote = document.querySelector('blockquote');

    expect(blockquote.textContent).toEqual('Four score and seven years ago');

    const figcaption = document.querySelector('figcaption');

    expect(figcaption.textContent).toEqual('- Lincoln');
  });

  test('should remove existing quote from dom before adding new one', () => {
    const html = fs.readFileSync(path.resolve('./src/index.html'));

    document.documentElement.innerHTML = html.toString();

    displayQuote({author: 'Lincoln', content: 'Four score and seven years ago'});

    displayQuote({author: 'Kennedy', content: 'Ask not'});

    const blockquote = document.querySelector('blockquote');

    expect(blockquote.textContent).toEqual('Ask not');

    const figcaption = document.querySelector('figcaption');

    expect(figcaption.textContent).toEqual('- Kennedy');
  });
});

describe('getRandomColor()', () => {
  test('should return valid rgb string format', () => {
    const rgbString = getRandomColor();

    expect(rgbString).toMatch(/rgb\(([0-9]{1,3},){2}[0-9]{1,3}\)/);
  });
  test('should return valid rgb values', () => {
    const rgbString = getRandomColor();

    const colorValues = rgbString.match(/\d{1,3}/g);

    expect(colorValues.filter((value) => Number(value) > 255 || Number(value) < 0)).toStrictEqual([]);
  });
});

describe('fetchNewQuote()', () => {
  afterEach(() => {
    fetch.mockClear();
  });


  test('should return valid quote object on success', async () => {
    global.fetch = mockFetch({ok: true, status: 200, json: () => Promise.resolve({_id: 'alpha123'})});

    const data = await fetchNewQuote();

    expect(data).toStrictEqual({_id: 'alpha123'});
  });

  test('should return null and log error on failure', async () => {
    global.fetch = jest.fn(() => {
      return Promise.resolve({ok: false, status: 404});
    });

    console.error = jest.fn();

    const data = await fetchNewQuote();

    expect(data).toBeNull();
    expect(console.error).toHaveBeenCalled();
  });

  test('should return null and log error on promise rejection', async () => {
    global.fetch = jest.fn(() => {
      return Promise.reject(TypeError);
    });

    console.error = jest.fn();

    const data = await fetchNewQuote();

    expect(data).toBeNull();
    expect(console.error).toHaveBeenCalled();
  });
});
