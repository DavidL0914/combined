---
layout: default
title: Roulette
permalink: /slots
---

<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Slot Machine</title>
  <style>
 /* Global Styles */
body {
  background-image: url('images/slotmachine.png');
  background-size: cover;
  background-position: center;
  background-attachment: fixed;
  margin: 0;
  padding: 0;
  font-family: 'Arial', sans-serif;
  color: #ffffff;
  text-align: center;
}

/* Slot Machine Styles */
.slot-machine {
  border: 10px solid #ffd700; /* Golden border */
  padding: 30px;
  display: inline-block;
  margin: auto;
  border-radius: 15px; /* Rounded corners */
  background-color: rgba(0, 0, 0, 0.7); /* Semi-transparent background */
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.5); /* Shadow effect */
}

.reel-container {
  margin-right: 20px;
  display: inline-block;
  vertical-align: top;
}

.reel {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 20px; /* Increased space between reels */
}

.reel img {
  width: 120px; /* Increased symbol size */
  margin: 10px 0; /* Increased space around symbols */
}

/* Spin Button Styles */
#spin-btn {
  background-color: #ffd700; /* Golden button */
  border: none;
  color: #ff0000; /* Red text */
  padding: 15px 30px;
  font-size: 18px;
  cursor: pointer;
  border-radius: 25px; /* Rounded button */
  margin-top: 30px; /* Increased space above the button */
  transition: all 0.3s ease; /* Smooth hover effect */
}

#spin-btn:hover {
  background-color: #ffdf00; /* Brighter golden color on hover */
}


  </style>
</head>
<body>
  <div class="slot-machine">
    <div class="reel-container">
      <div class="reel">
        <img src="images/slotcard.png" alt="Card">
        <img src="images/slotbar.png" alt="Bar">
        <img src="images/slot7.png" alt="Seven">
      </div>
    </div>
    <div class="reel-container">
      <div class="reel">
        <img src="images/slotcherry.png" alt="Cherry">
        <img src="images/slot7.png" alt="Seven">
        <img src="images/slotclover.png" alt="Clover">
        <!-- Add more images here -->
      </div>
    </div>
    <div class="reel-container">
      <div class="reel">
        <img src="images/slotclover.png" alt="Clover">
        <img src="images/slotcard.png" alt="Card">
        <img src="images/slot7.png" alt="Seven">
        <!-- Add more images here -->
      </div>
    </div>
  </div>
  <br>
  <br>
  <button id="spin-btn">Spin</button>
  <script src="slots.js"></script>
</body>
</html>

<br>
<br>
<body>
<a href="https://jaydenchen17.github.io/casinosim/casinoroom" class="button">Back to Game Room</a>
</body>

<script>
    document.addEventListener('keydown', function(event) {
        const key = event.key.toLowerCase();
        if (key === 's') {
            window.location.href = "http://127.0.0.1:4100/frontcasts/lobby"; // Redirect to the lobby page
        }
    });
</script>