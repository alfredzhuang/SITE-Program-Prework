// Global constants
const cluePauseTime = 333; // how long to pause in between clues
const nextClueWaitTime = 1000; // how long to wait before starting playback of the clue sequence

// Global variables
var clueHoldTime = 1000; // how long to hold each clue's light/sound
var pattern = [];
var progress = 0;
var gamePlaying = false;
var tonePlaying = false;
var volume = 0.5;
var guessCounter = 0;
var timer;

// Functions for game
function startGame() {
  // initialize game variables
  progress = 0;
  clueHoldTime = 1000;
  gamePlaying = true;
  // Create new pattern for new game
  for (let i = 0; i < 8; i++) {
    pattern.push(Math.floor(Math.random() * 8) + 1);
  }
  document.getElementById("startBtn").classList.add("hidden");
  document.getElementById("stopBtn").classList.remove("hidden");
  document.getElementById("timer").classList.remove("hidden");
  // Check if there is a timer to be cleared
  if (timer !== undefined) {
    clearInterval(timer);
    document.getElementById("timer").innerHTML = "Timer: 15s";
  }
  playClueSequence();
}

function stopGame() {
  gamePlaying = false;
  // Clear pattern for next game
  pattern = [];
  document.getElementById("startBtn").classList.remove("hidden");
  document.getElementById("stopBtn").classList.add("hidden");
  document.getElementById("timer").classList.add("hidden");
  // Clear the timer
  clearInterval(timer);
}

function playClueSequence() {
  guessCounter = 0;
  let delay = nextClueWaitTime; //set delay to initial wait time
  for (let i = 0; i <= progress; i++) {
    // for each clue that is revealed so far
    console.log("play single clue: " + pattern[i] + " in " + delay + "ms");
    setTimeout(playSingleClue, delay, pattern[i]); // set a timeout to play that clue
    delay += clueHoldTime;
    delay += cluePauseTime;
  }
  clueHoldTime -= 50;
  setTimeout(function() {
    timer = setTimer();
  }, delay);
}

function loseGame() {
  stopGame();
  alert("Game Over. You lost.");
}

function winGame() {
  stopGame();
  alert("Game Over. You won!");
}

// Sound Synthesis Functions
const freqMap = {
  1: 120.6,
  2: 280.4,
  3: 290.1,
  4: 415.6,
  5: 493.5,
  6: 314.3,
  7: 347.8,
  8: 150.3
};
function playTone(btn, len) {
  o.frequency.value = freqMap[btn];
  g.gain.setTargetAtTime(volume, context.currentTime + 0.05, 0.025);
  tonePlaying = true;
  setTimeout(function() {
    stopTone();
  }, len);
}
function startTone(btn) {
  if (!tonePlaying) {
    o.frequency.value = freqMap[btn];
    g.gain.setTargetAtTime(volume, context.currentTime + 0.05, 0.025);
    tonePlaying = true;
  }
}
function stopTone() {
  g.gain.setTargetAtTime(0, context.currentTime + 0.05, 0.025);
  tonePlaying = false;
}

//Page Initialization
// Init Sound Synthesizer
var context = new AudioContext();
var o = context.createOscillator();
var g = context.createGain();
g.connect(context.destination);
g.gain.setValueAtTime(0, context.currentTime);
o.connect(g);
o.start(0);

// Functions for buttons
function lightButton(btn) {
  document.getElementById("button" + btn).classList.add("lit");
}

function clearButton(btn) {
  document.getElementById("button" + btn).classList.remove("lit");
}

function playSingleClue(btn) {
  if (gamePlaying) {
    lightButton(btn);
    playTone(btn, clueHoldTime);
    setTimeout(clearButton, clueHoldTime, btn);
  }
}

function guess(btn) {
  console.log("user guessed: " + btn);
  if (!gamePlaying) {
    return;
  }
  if (pattern[guessCounter] == btn) {
    // Guess was correct!
    if (guessCounter == progress) {
      if (progress == pattern.length - 1) {
        // Game Over : Win!
        winGame();
      } else {
        // Pattern correct. Add next segment
        progress++;
        // Reset the timer
        clearInterval(timer);
        document.getElementById("timer").innerHTML = "Timer: 15s";
        playClueSequence();
      }
    } else {
      // so far so good... check the next guess
      guessCounter++;
    }
  } else {
    // Guess was incorrect
    // Game Over: Lose!
    loseGame();
  }
}

// Timer function
function setTimer() {
  let time = 15;
  document.getElementById("timer").innerHTML = "Timer: 15s";
  var setTime = setInterval(function() {
    time--;
    document.getElementById("timer").innerHTML = "Timer: " + time + "s";
    // Timer runs out
    if (time === 0 && gamePlaying) {
      document.getElementById("timer").innerHTML = "Timer: 0s";
      loseGame();
      clearInterval(setTime);
    }
  }, 1000);
  return setTime;
}
