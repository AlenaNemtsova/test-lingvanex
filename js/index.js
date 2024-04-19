'use strict';

const buttons = document.querySelectorAll('.users__button');
const cards = document.querySelectorAll('.users-card__content');

const showActive = function (event) {
    buttons.forEach((button) => (
        button.classList.remove('active')
    ))
    event.target.classList.add('active');

    let type = event.target.dataset.type;
    let card = document.getElementById(type)

    cards.forEach((card) => (
        card.classList.remove('active')
    ))
    card.classList.add('active');
}

buttons.forEach(function (button) {
    button.addEventListener('click', showActive)
})