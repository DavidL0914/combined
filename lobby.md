---
layout: wow
---

<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Casino Lobby</title>
    <style>
        body {
            margin: 0;
            padding: 0;
            font-family: Arial, sans-serif;
            background-image: url('https://cdnb.artstation.com/p/assets/images/images/020/074/583/large/janina-heese-lacuna-lobby-02.jpg?1566258841');
            background-size: cover;
            background-position: center;
            color: #fff; /* White text */
            overflow-x: hidden; /* Prevent horizontal scrolling */
        }
        #lobby {
            position: relative;
            display: flex;
            justify-content: space-between;
            align-items: center;
            height: 100vh;
            padding: 0 50px; /* Add padding */
        }
        .game-machine {
            cursor: pointer;
            transition: transform 0.3s, transform-origin 0.3s;
            position: absolute;
        }
        .game-machine.active {
            transform: scale(1.1);
        }
        .slot-machine {
            width: 300px;
            height: auto;
            top: 55%;
            left: 40%;
        }
        .racing-game {
            width: 140px;
            height: auto;
            top: 61%;
            left: 30%;
        }
        .blackjack {
            width: 300px;
            height: auto;
            top: 68%;
            left: 55%;
        }
        .kitchen {
            width: 500px;
            height: auto;
            top: 55%;
            left: 73%;
        }
        .basketball-game {
            width: 150px;
            height: auto;
            top: 52%;
            left: 15%;
        }
        #player {
            position: absolute;
            bottom: 10%; /* Adjust the vertical position */
            left: 5%; /* Start from the left side of the screen */
            width: 150px;
            height: auto;
            z-index: 999; /* Ensure the player is above other elements */
            transform: scaleX(1); /* Ensure the player initially faces right */
        }
    </style>
</head>
<body>
    <div id="lobby">
        <img class="game-machine slot-machine" src="https://files.catbox.moe/ppdfq9.png" alt="Slot Machine" data-machine="slot" onclick="playSlotMachine()"/>
        <img class="game-machine racing-game" src="https://files.catbox.moe/dxq8fv.png" alt="Racing Game Machine" data-machine="racing" onclick="playRacingGame()"/>
        <img class="game-machine blackjack" src="https://files.catbox.moe/89arwk.png" alt="Blackjack Machine" data-machine="blackjack" onclick="playBlackjack()"/>
        <img class="game-machine kitchen" src="https://files.catbox.moe/93wg09.png" alt="Kitchen Area" data-machine="kitchen" onclick="goToKitchen()"/>
        <img class="game-machine basketball-game" src="https://files.catbox.moe/cug5o8.png" alt="Basketball Game Machine" data-machine="basketball" onclick="playBasketball()"/>
        <img id="player" src="https://files.catbox.moe/awdtts.png" alt="Player Character">
    </div>

    <script>
        document.addEventListener("DOMContentLoaded", function(event) { 
            const player = document.getElementById("player");
            const machines = document.querySelectorAll(".game-machine");

            let playerX = player.offsetWidth / 2; // Start from the left side of the screen
            const playerSpeed = 10;
            const playerWidth = player.offsetWidth;

            // Function to move the player left or right
            function movePlayer(direction) {
                if (direction === 'left' && playerX > playerWidth / 2) {
                    playerX -= playerSpeed;
                    player.style.transform = 'scaleX(-1)'; // Flip the player image horizontally
                } else if (direction === 'right' && playerX < lobby.offsetWidth - playerWidth / 2) {
                    playerX += playerSpeed;
                    player.style.transform = 'scaleX(1)'; // Reset the player image
                }
                player.style.left = playerX + 'px';
                updateMachineSize();
            }

            // Function to update the size of the machine based on player position
            function updateMachineSize() {
                machines.forEach(machine => {
                    const machineRect = machine.getBoundingClientRect();
                    const playerRect = player.getBoundingClientRect();

                    if (playerRect.left + playerRect.width / 2 >= machineRect.left &&
                        playerRect.left + playerRect.width / 2 <= machineRect.right) {
                        machine.classList.add('active');
                    } else {
                        machine.classList.remove('active');
                    }
                });
            }

            // Event listener for keyboard input
            document.addEventListener('keydown', function(event) {
                const key = event.key.toLowerCase();
                if (key === 'a' || key === 'd') {
                    movePlayer(key === 'a' ? 'left' : 'right');
                } else if (key === 'w') {
                    if (playerX > lobby.offsetWidth - playerWidth - 100) {
                        // Go to different link when player is on the very right side
                        window.location.href = "http://127.0.0.1:4100/frontcasts/ML.html";
                    } else {
                        machines.forEach(machine => {
                            if (machine.classList.contains('active')) {
                                switch (machine.getAttribute('data-machine')) {
                                    case 'slot':
                                        playSlotMachine();
                                        break;
                                    case 'racing':
                                        playRacingGame();
                                        break;
                                    case 'blackjack':
                                        playBlackjack();
                                        break;
                                    case 'kitchen':
                                        if (playerX > 600) {
                                            goToKitchen();
                                        } else {
                                            // Go to different link when player is on the right side of the kitchen
                                            window.location.href = "http://127.0.0.1:4100/frontcasts/recipe.html";
                                        }
                                        break;
                                    case 'basketball':
                                        playBasketball();
                                        break;
                                    default:
                                        break;
                                }
                            }
                        });
                    }
                }
            });
        });

        function playSlotMachine() {
            window.location.href = "http://127.0.0.1:4100/frontcasts/slots"; // Link to the slot machine game
        }

        function playRacingGame() {
            window.location.href = "http://127.0.0.1:4100/frontcasts/racebet"; // Link to the racing game
        }

        function playBlackjack() {
            window.location.href = "http://127.0.0.1:4100/frontcasts/blackjack"; // Link to the blackjack game
        }

        function goToKitchen() {
            window.location.href = "http://127.0.0.1:4100/frontcasts/search.html"; // Link to the kitchen webpage
        }

        function playBasketball() {
            window.location.href = "http://127.0.0.1:4100/frontcasts/basketball"; // Link to the basketball game
        }
    </script>
</body>
</html>
