let firstCard = 4
let secondCard = 17
let sum = firstCard + secondCard
let hasBlackJack = false
let isAlive = true
let message = ''

let messageEl = document.querySelector('#message-el')
let sumEl = document.querySelector('#sum-el')
let cardsEl = document.querySelector('#cards-el')

function startGame() {
    sumEl.textContent = 'Sum: ' + sum
    cardsEl.textContent = 'Cards: ' + firstCard + ' ' + secondCard
    if (sum < 21) {
        message = 'Do you want to draw a new card?'
    } else if (sum === 21) {
        message = "Wohoo! You've got Blackjack!"
        hasBlackJack = true
    } else {
        message = "You're out of the game!"
        isAlive = false
    }
    messageEl.textContent = message
}
