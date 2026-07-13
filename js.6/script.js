const games = [
    "Valorant",
    "League of Legends",
    "Counter Strike",
    "Battle Grounds",
    "Minefcraft",
    "Last Game"
]

console.log(games.length); //Length of the array
console.log(games[games.length - 1]);

games.push("One More Game") //Push adds the element to the end of the array
console.log(games);

games.pop(); //Pop removes the Last element from the array

const shiftedGame = games.shift();// Shift removes the first element from the array and returns it
console.log(shiftedGame);

games.unshift("New Game");// Unshift adds the element to the beginning of the array
console.log(games);





