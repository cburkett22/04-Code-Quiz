let secondsLeft = 75;
let timeEl = document.querySelector('#timer');

let startBtn = document.querySelector('#startBtn');
startBtn.addEventListener('click', startQuiz());

function startQuiz() {
    let timerInterval = setInterval(function() {
        secondsLeft--;
        timeEl.textContent = "Time Left: " + secondsLeft;

        if (secondsLeft === 0) {
            clearInterval(timerInterval);
        }
    }, 1000);
}





// questionOne: "A _______ is an error in a program that prevents the program from running as expected.",
// questionTwo: "What does a for loop do?",
// questionThree: "A _______ is a placeholder for a piece of information that can change.",
// questionFour: "blah blah blah??",
// questionFive: "blah blah blah??"