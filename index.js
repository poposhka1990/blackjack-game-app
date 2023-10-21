let hasBlackJack = false
let isAlive = true
let message = ''
let firstCard = 4
let secondCard = 10
let cards = [ firstCard, secondCard ]
let sum = firstCard + secondCard
let messageEl = document.querySelector('#message-el')
let sumEl = document.querySelector('#sum-el')
let cardsEl = document.querySelector('#cards-el')

function startGame() {
    renderGame()
}

function renderGame() {
    sumEl.textContent = 'Sum: ' + sum
    cardsEl.textContent = 'Cards: ' + cards[0] + ' ' + cards[1]
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

function newCard() {
    let nextCard = 9
    sum += nextCard
    cards.push(nextCard)
    renderGame()
}
