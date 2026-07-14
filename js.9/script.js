const quotes = [
    "Success is not final.",
    "Stay hungry, stay foolish.",
    "Code. Debug. Repeat.",
    "Small progress is still progress.",
    "Dream big, start small."
];
const quote = document.getElementById("QuoteText")
const NewQuote = document.getElementById("NewQuote")

const showRandomQuote = () =>{
    const randomIndex = Math.floor(Math.random() * quotes.length);
quote.innerHTML = `<b>Quote:</b> ${quotes[randomIndex]}`;}

NewQuote.addEventListener("click", () =>{
   showRandomQuote()
});

showRandomQuote();