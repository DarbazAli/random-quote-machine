import React, { useState, useEffect } from "react";
import defaultQuots from "./defaultQuots";

const QuoteBox = () => {
  const getRandomItem = (array) =>
    array[Math.floor(Math.random() * array.length)];

  const [quotes, setQuotes] = useState(defaultQuots);
  const [quote, setQuote] = useState(getRandomItem(quotes));

  useEffect(() => {
    const url = "https://type.fit/api/quotes";
    fetch(url)
      .then((res) => res.json())
      .then((data) => setQuotes(data));
  }, []);

  function handleNewQuote() {
    setQuote(getRandomItem(quotes));
  }

  return (
    <div id="quote-box">
      <span id="quote-mark">"</span>
      <h3 id="text">{quote.text}</h3>

      <p id="author">- {quote.author}</p>

      <div id="box-buttons">
        <a href="#" id="tweet-quote">
          Tweet Quote
        </a>

        <button className="btn" id="new-quote" onClick={handleNewQuote}>
          New Quote
        </button>
      </div>
    </div>
  );
};

export default QuoteBox;
