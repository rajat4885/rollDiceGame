document.addEventListener('DOMContentLoaded', () => {
  const images = [
    "./assets/dice-1.png",
    "./assets/dice-2.png",
    "./assets/dice-3.png",
    "./assets/dice-4.png",
    "./assets/dice-5.png",
    "./assets/dice-6.png"
  ];

  const newGame = document.querySelector('.new-game-btn')
  const rollDice = document.querySelector('.roll-dice-btn');
  const diceIMG = document.querySelector('.game-dice-image > img');
  const switchPlayer = document.querySelector('.switch-player-btn');
  const activePlayerContainer = document.querySelector('.active-player');

  const player1 = document.querySelector('.left-game-container');
  const player2 = document.querySelector('.right-game-container');

  //Click on new game button--->

  newGame.addEventListener('click', () => {
    diceIMG.src = images[0];
    document.querySelectorAll('.total-score').forEach((li) => {
      li.textContent = 0;
    })
    document.querySelectorAll('.player-score').forEach((li) => {
      li.textContent = 0;
    })


    // Switch player
    player2.classList.remove('active-player');
    player1.classList.add('active-player');

  })



  switchPlayer.addEventListener('click', () => {
    if (player1.classList.contains('active-player')) {
      const currentScore = parseInt(player1.querySelector('.player-1-current-score  .current-score-player-1').textContent);
      const finalScoreEl = player1.querySelector('.player-1-score');
      const finalScore = parseInt(finalScoreEl.textContent);

      // Add current score to final score
      finalScoreEl.textContent = finalScore + currentScore;

      // Reset current score
      player1.querySelector('.player-1-current-score > .total-score').textContent = 0;

      // Switch player
      player1.classList.remove('active-player');
      player2.classList.add('active-player');
    } else if (player2.classList.contains('active-player')) {
      const currentScore = parseInt(player2.querySelector('.player-2-current-score  .current-score-player-2').textContent);
      const finalScoreEl = player2.querySelector('.player-2-score');
      const finalScore = parseInt(finalScoreEl.textContent);

      // Add current score to final score
      finalScoreEl.textContent = finalScore + currentScore;

      player2.querySelector('.player-2-current-score > .total-score').textContent = 0;

      player2.classList.remove('active-player');
      player1.classList.add('active-player');
    }
  });

  //Click on rollDice button--->

  rollDice.addEventListener('click', () => {
    const randomNumber = Math.floor(Math.random() * images.length); // 0–5
    diceIMG.src = images[randomNumber];

    increaseScore(randomNumber);

  });

  function increaseScore(num) {
    const activePlayerContainer = document.querySelector('.active-player');

    let currentScoreSpan;

    if (activePlayerContainer.classList.contains('left-game-container')) {
      currentScoreSpan = activePlayerContainer.querySelector('.current-score-player-1');
    } else if (activePlayerContainer.classList.contains('right-game-container')) {
      currentScoreSpan = activePlayerContainer.querySelector('.current-score-player-2');
    }

    const currentScore = parseInt(currentScoreSpan.textContent);
    currentScoreSpan.textContent = currentScore + num + 1; // because dice image is 0–5, so +1
  }

});

