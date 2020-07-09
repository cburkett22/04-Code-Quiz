let secondsLeft = 30;
let timeEl = document.querySelector('#timer');
let startBtn = document.querySelector('#startBtn');

startBtn.addEventListener('click', function startQuiz() {
    let timerInterval = setInterval(function() {
        secondsLeft--;
        timeEl.textContent = "Time Left: " + secondsLeft;

        if (secondsLeft === 0) {
            clearInterval(timerInterval);
            alert("TIMES UP! Let's see how you did.");
        }
    }, 1000);

    let startEl = document.getElementById('start');
    let qOneEl = document.getElementById('question-1');

    let questions = [
    {
        question: "1. A _______ is an error in a program that prevents the program from running as expected.",
        choices: ["A", "B", "C", "D"],
        correctAns: "B"
    },
    {
        question: "2. What does a for loop do?",
        choices: ["A", "B", "C", "D"],
        correctAns: "C"
    },
    {
        question: "3. A _______ is a placeholder for a piece of information that can change.",
        choices: ["A", "B", "C", "D"],
        correctAns: "A"
    },
    {
        question: "",
        choices: ["A", "B", "C", "D"],
        correctAns: "C"
    },
    {
        question: "",
        choices: ["A", "B", "C", "D"],
        correctAns: "D"
    }];

    startEl.style.display = "none";
    qOneEl.style.display = "contents";

    let pTagOne = document.getElementById('p1');

    pTagOne.textContent = questions.question[0];

});