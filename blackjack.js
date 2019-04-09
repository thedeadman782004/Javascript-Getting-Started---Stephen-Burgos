// Blackjack
// Version: 0.1
// Author: Stephen Burgos
// Source: Pluralsight

// Function to build the deck from card objects
function createDeck(){
    let deck = [];
    for (let suitIdx = 0; suitIdx < suits.length; suitIdx++){
        for (let valueIdx = 0; valueIdx < values.length; valueIdx++){
            let card = {
                suit : suits[suitIdx],
                value : values[valueIdx]
            };
            deck.push( card );
        }
    }
    return deck;
}

// Get a string from the card object that can be printed to the console.
function getCardString(card){
    return card.value + " of " + card.suit;
}

// Shift one card from the front of the deck and return that card
function getNextCard(){
    return deck.shift();
}

// Arrays for building the deck
let suits = ["Hearts", "Clubs", "Diamonds", "Spades"];
let values = ["Ace","King","Queen","Jack","Ten","Nine","Eight","Seven","Six","Five","Four","Three","Two"];
let deck = createDeck();

// Deal cards to the player
let playerCards = [ getNextCard(),getNextCard() ];

// Log messages
console.log("Welcome to Blackjack!");
console.log("You are dealt: ");
console.log("   " + getCardString(playerCards[0]));
console.log("   " + getCardString(playerCards[1]));

// Get elements from blackjack.html
let newGameButton = document.getElementById("new-game-button");
let textArea = document.getElementById("text-area");
let hitButton = document.getElementById("hit-button");
let stayButton = document.getElementById("stay-button");
hitButton.style.display = 'none';
stayButton.style.display = 'none';

newGameButton.addEventListener('click', function(){
    textArea = "Started";
    newGameButton.style.display = 'none';
    hitButton.style.display = 'inline';
    stayButton.style.display = 'inline';
});