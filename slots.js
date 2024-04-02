document.addEventListener('DOMContentLoaded', function() {
  const reels = document.querySelectorAll('.reel');
  const spinBtn = document.getElementById('spin-btn');
  const symbols = ['slotcherry', 'slotbar', 'slot7','slotclover','slotcard']; // Updated symbols
  const imagesPath = 'images/';
  
  let spinSound = new Audio('slotmachinesound.mp3'); // Create an audio object
  
  let userBalance = 100; // Initial user balance
  let userBet;

  function spin() {
    try {
      // Prompt the user to place a wager
      userBet = prompt('Enter your wager (minimum $10):');
      if (userBet === null) return; // Exit if the user cancels
      userBet = parseInt(userBet);
      if (isNaN(userBet) || userBet < 10 || userBet > userBalance) {
        alert('Invalid wager. Please enter a valid amount.');
        return;
      }
      
      // Play the spin sound
      spinSound.play();
      
      // Spin the first column 10 times
      spinColumn(0, 5, () => {
        // After spinning the first column, delay for one second
        setTimeout(() => {
          // Spin the middle column 10 times
          spinColumn(1, 5, () => {
            // After spinning the middle column, delay for one second
            setTimeout(() => {
              // Spin the right column 10 times
              spinColumn(2, 5, () => {
                // After spinning the third column, wait for one second before checking for winning combinations
                setTimeout(() => {
                  checkWin();
                }, 100);
              });
            }, 100);
          });
        }, 100);
      });
    } catch (error) {
      console.error('An error occurred while spinning:', error);
    }
  }

  // Function to spin a single column a specified number of times
  function spinColumn(columnIndex, spins, callback) {
    let spinCount = 0;

    const spinInterval = setInterval(() => {
      reels[columnIndex].innerHTML = ''; // Clear the column before spinning
      for (let i = 0; i < 3; i++) {
        const randomIndex = Math.floor(Math.random() * symbols.length);
        const symbol = symbols[randomIndex];
        const img = document.createElement('img');
        img.src = imagesPath + symbol + '.png';
        img.alt = symbol;
        reels[columnIndex].appendChild(img); // Append the symbol to the column
      }

      spinCount++;
      if (spinCount === spins) {
        clearInterval(spinInterval); // Stop spinning when reaching the desired number of spins
        callback(); // Execute the callback function after spinning
      }
    }, 300); // Spin delay (adjust as needed)
  }

  // Function to check for winning combinations
  function checkWin() {
    // Check horizontal rows
    for (let i = 0; i < 3; i++) {
      const symbolsInRow = [
        reels[0].children[i].alt,
        reels[1].children[i].alt,
        reels[2].children[i].alt
      ];
      if (symbolsInRow.every(symbol => symbol === symbolsInRow[0])) {
        handleWin();
        return; // Exit function if a winning combination is found
      }
    }

    // Check vertical columns
    for (let i = 0; i < 3; i++) {
      const symbolsInColumn = [
        reels[i].children[0].alt,
        reels[i].children[1].alt,
        reels[i].children[2].alt
      ];
      if (symbolsInColumn.every(symbol => symbol === symbolsInColumn[0])) {
        handleWin();
        return; // Exit function if a winning combination is found
      }
    }

    // If no winning combination is found
    handleLoss();
  }

  // Function to handle winning
  function handleWin() {
    // Update user balance and display winning message
    userBalance += userBet * 2; // Double the wager for winning
    alert('Congratulations! You win! Your balance: $' + userBalance);
  }

  // Function to handle loss
  function handleLoss() {
    // Deduct the wager from the user's balance and display losing message
    userBalance -= userBet;
    alert('Sorry, try again! Your balance: $' + userBalance);
  }

  spinBtn.addEventListener('click', spin);
});