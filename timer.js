// Setting time to variables that start at 0
var minutes = 0
var seconds = 0;
var deciseconds = 0;

// Setting start button and timer div to variables
var startButton = document.querySelector('#start');
var timerDiv = document.querySelector('#timer');

// Defining function to assign random colors 
function colorChanger() { 
         var red = Math.round(Math.random() * 255);
         var green = Math.round(Math.random() * 255);
         var blue = Math.round(Math.random() * 255);
         timerDiv.style.color = `rgb(${red}, ${green}, ${blue})`;
};

// Declare timer and auto reset variables
var timer;
var fifteenSecs;

// Defining function to increment the timer
function timerRunning() {
    deciseconds++;
    timerDiv.innerHTML = `${minutes}:${seconds}:${deciseconds}` + '0';

    if (deciseconds >= 10) {
        seconds++;
        deciseconds = 0;
        colorChanger();
    }

    if (seconds >= 60) {
        minutes++;
        seconds=0;
    }
};

// Defining function to reset the timer 
function timerReset() {
    minutes = 0;
    seconds = 0;
    deciseconds = 0;
    startButton.innerText = 'Start';
    timerDiv.innerText='00:00:00';
};

// Event Listener for clicking on button and run function at set interval
startButton.addEventListener("click", function(e) { 
    
    if (e.target.innerHTML === 'Start') {
        e.target.innerHTML = 'Pause';
        timer = setInterval(timerRunning, 100);
    }

    else if (e.target.innerHTML === 'Pause') {
        e.target.innerHTML = 'Resume';
        clearInterval(timer);
        fifteenSecs = setTimeout(timerReset, 15000)
    } 

    else if (e.target.innerHTML = 'Resume') {
        clearTimeout(fifteenSecs);
        e.target.innerHTML = 'Pause';
        timer = setInterval(timerRunning, 100);
    }
}); 

// Event listener for double click on pause button to reset timer
startButton.addEventListener("dblclick", function(e) {
    if (e.target.innerHTML === 'Pause') {
        e.target.innerHTML = 'Start'; 
        clearInterval(timer);
        minutes = 0;
        seconds = 0;
        deciseconds = 0;
        timerDiv.innerHTML = '00:00:00';
    }
})

