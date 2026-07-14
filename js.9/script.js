const quotes = [
    "Success is not final.",
    "Stay hungry, stay foolish.",
    "Code. Debug. Repeat.",
    "Small progress is still progress.",
    "Dream big, start small."
];
const quote = document.getElementById("QuoteText")

const showRandomQuote = () =>{
    const randomIndex = Math.floor(Math.random() * quotes.length);
    quote.textContent = quotes[randomIndex];
}