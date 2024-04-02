// JavaScript backend logic

var blueCarInterval, redCarInterval;
var userBet;
var userChoice;
var userBalance = 200;

document.getElementById('raceButton').addEventListener('click', startRace);

function startRace() {
    // Play the sound effect
    document.getElementById('raceSound').play();

    // Prompt the user to input a wager
    userBet = prompt("Enter the amount you want to wager (at least $10):");

    // Check if the input is valid
    if (userBet >= 10 && userBet <= userBalance) {
        userBalance -= userBet;
        alert("Your current balance: $" + userBalance);

        // Prompt the user to pick a car
        userChoice = prompt("Choose the car you want to bet on (blue or red):");

        // Check if the user picked a valid car
        if (userChoice.toLowerCase() === 'blue' || userChoice.toLowerCase() === 'red') {
            var blueCar = document.getElementById('blueCar');
            var redCar = document.getElementById('redCar');
            var winner;
            if (userChoice.toLowerCase() === 'red') {
                winner = Math.random() < 0.3 ? 'red' : 'blue';
            } else {
                winner = Math.random() < 0.7 ? 'red' : 'blue';
            }
            blueCar.style.left = winner === 'blue' ? '80%' : '0';
            redCar.style.left = winner === 'red' ? '80%' : '0';
            document.getElementById('raceButton').disabled = true;

            setTimeout(function () {
                var resultMessage;
                if (winner === userChoice.toLowerCase()) {
                    userBalance += userBet * 2;
                    resultMessage = 'Congratulations! You won $' + userBet * 2;
                } else {
                    resultMessage = 'Sorry, you lost $' + userBet;
                }
                alert(resultMessage + "\nYour current balance: $" + userBalance);
                stopCars(); 
            }, 3000);  

            blueCarInterval = setInterval(function () {
                moveCar(blueCar, 5);
            }, 80);
            redCarInterval = setInterval(function () {
                moveCar(redCar, 4.99); 
            }, 80);
        } else {
            alert("Please choose a valid car (blue or red).");
        }
    } else {
        alert("Please enter a valid wager amount (at least $10 and within your balance).");
    }
}

function moveCar(car, speed) {
    car.style.left = parseFloat(car.style.left) + speed + '%';
    if (parseFloat(car.style.left) >= 80) {
        stopCar(car);
    }
}

function stopCar(car) {
    clearInterval(car === blueCar ? blueCarInterval : redCarInterval);
}

function stopCars() {
    stopCar(blueCar);
    stopCar(redCar);
}