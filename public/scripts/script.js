// Animatie flippen visitekaartje

const flipCardBtnTurnToBack = document.getElementById('flip-card-btn-turn-to-back');
const flipCardBtnTurnToFront = document.getElementById('flip-card-btn-turn-to-front');
const flipCard = document.querySelector('.wrapper-flipkaart');

flipCardBtnTurnToBack.addEventListener('click', () => {
  flipCard.classList.add('flipped');  // Voeg de 'flipped' class toe
});

// Voeg een event listener toe voor de 'turn to front' knop
flipCardBtnTurnToFront.addEventListener('click', () => {
  flipCard.classList.remove('flipped');  // Verwijder de 'flipped' class
});
