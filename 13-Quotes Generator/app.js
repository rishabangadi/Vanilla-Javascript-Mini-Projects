const stoicQuotes = [
  {
    quote:
      "The key is to keep company only with people who uplift you, whose presence calls forth your best.",
    author: "Epictetus",
  },
  {
    quote: "Wealth consists not in having great possessions, but in having few wants.",
    author: "Epictetus",
  },
  {
    quote: "The more we value things outside our control, the less control we have.",
    author: "Epictetus",
  },
  {
    quote:
      "Happiness and freedom begin with a clear understanding of one principle: some things are within our control, and some things are not.",
    author: "Epictetus",
  },
  {
    quote:
      "Man is not worried by real problems so much as by his imagined anxieties about real problems.",
    author: "Epictetus",
  },
  {
    quote:
      "He is a wise man who does not grieve for the things which he has not, but rejoices for those which he has.",
    author: "Epictetus",
  },
  {
    quote: "The world is nothing but change, our life is only perception.",
    author: "Marcus Aurelius",
  },
  {
    quote: "The soul becomes dyed with the color of its thoughts.",
    author: "Marcus Aurelius",
  },
  {
    quote:
      "Very little is needed to make a happy life; it is all within yourself, in your way of thinking.",
    author: "Marcus Aurelius",
  },
  {
    quote: "He who lives in harmony with himself lives in harmony with the universe.",
    author: "Marcus Aurelius",
  },
  {
    quote:
      "You have power over your mind, not outside events. Realize this, and you will find strength.",
    author: "Marcus Aurelius",
  },
  {
    quote:
      "The only way to deal with externals that are frightening and unpredictable is to realize that they have nothing to do with you.",
    author: "Epictetus",
  },
  {
    quote:
      "Freedom is the only worthy goal in life. It is won by disregarding things that lie beyond our control.",
    author: "Epictetus",
  },
  {
    quote: "Waste no more time arguing what a good man should be. Be one.",
    author: "Marcus Aurelius",
  },
  {
    quote:
      "If you are distressed by anything external, the pain is not due to the thing itself, but to your estimate of it, and this you have the power to revoke at any moment.",
    author: "Marcus Aurelius",
  },
];

const form = document.querySelector(".form-container");
const numberOfQuotes = document.getElementById("quoteNumber");
const quotesContainer = document.querySelector(".quotes-container");

form.addEventListener("submit", function (e) {
  e.preventDefault();
  const value = numberOfQuotes.value;
  randomNumber = Math.floor(Math.random() * stoicQuotes.length);
  if (isNaN(value) || value <= 0 || value > 15) {
    quotesContainer.innerHTML = `<div class="quote-container">
    <p class="quote">${stoicQuotes[randomNumber].quote}</p>
    <p class="author">${stoicQuotes[randomNumber].author}</p>
</div>`;
  } else {
    let tempQuote = stoicQuotes.slice(0, value);
    tempQuote = tempQuote.map(function (item) {
      return `<div class="quote-container">
      <p class="quote">${item.quote}</p>
      <p class="author">${item.author}</p>
  </div>`;
    });
    tempQuote = tempQuote.join("");
    quotesContainer.innerHTML = tempQuote;
  }
});
