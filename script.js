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

    // QUESTION 1
    let startEl = document.getElementById('start');
    let qOneEl = document.getElementById('question-1');

    startEl.style.display = "none";
    qOneEl.style.display = "contents";

    document.getElementById('p1').innerHTML = "1. A _______ is an error in a program that prevents the program from running as expected.";
    document.getElementById('q1-c1').innerHTML = "<p>A. Array</p>";
    document.getElementById('q1-c2').innerHTML = "<p>B. Bug</p>";
    document.getElementById('q1-c3').innerHTML = "<p>C. Variable</p>";
    document.getElementById('q1-c4').innerHTML = "<p>D. For Loop</p>";

    let correctAnsEl = document.getElementsByClassName('correct-1');
    let incorrectAnsEl = document.getElementsByClassName('incorrect-1');
    let qTwoEl = document.getElementById('question-2');
    let choicesEl = document.getElementById('choices-1');

    choicesEl.addEventListener('click', function() {
        console.log(this.getAttribute('class'));
        if (correctAnsEl = true) {
            alert('CORRECT!');
            qOneEl.style.display = "none";
            qTwoEl.style.display = "contents";
        } else if (incorrectAnsEl = true) {
            alert('Sorry, that was incorrect.');
            qOneEl.style.display = "none";
            qTwoEl.style.display = "contents";
        }
    });
        
    // correctAns1.addEventListener('click', function() {
    //     alert("CORRECT!");
    //     qOneEl.style.display = "none";
    //     qTwoEl.style.display = "contents";
    // });

    // QUESTION 2
    document.getElementById('p2').innerHTML = "2. What does HTML stand for?";
    document.getElementById('q2-c1').innerHTML = "<p>A. Hyper Text Markup Language</p>";
    document.getElementById('q2-c2').innerHTML = "<p>B. Home Tool Markup Language</p>";
    document.getElementById('q2-c3').innerHTML = "<p>C. Hyperlinks and Text Markup Language</p>";
    document.getElementById('q2-c4').innerHTML = "<p>D. He Texted My Lady</p>";

    let correctAns2 = document.getElementById('q2-c1');
    let qThreeEl = document.getElementById('question-3');

    correctAns2.addEventListener('click', function() {
        alert("CORRECT!");
        qTwoEl.style.display = "none";
        qThreeEl.style.display = "contents";
    });

    // QUESTION 3
    document.getElementById('p3').innerHTML = "3. A(n) _______ is a placeholder for a piece of information that can change.";
    document.getElementById('q3-c1').innerHTML = "<p>A. Conditional</p>";
    document.getElementById('q3-c2').innerHTML = "<p>B. Digital Footprint</p>";
    document.getElementById('q3-c3').innerHTML = "<p>C. IP Address</p>";
    document.getElementById('q3-c4').innerHTML = "<p>D. Variable</p>";

    let correctAns3 = document.getElementById('q3-c4');
    let qFourEl = document.getElementById('question-4');

    correctAns3.addEventListener('click', function() {
        alert("CORRECT!");
        qThreeEl.style.display = "none";
        qFourEl.style.display = "contents";
    });

    // QUESTION 4
    document.getElementById('p4').innerHTML = "4. ";
    document.getElementById('q4-c1').innerHTML = "<p>A. C</p>";
    document.getElementById('q4-c2').innerHTML = "<p>B. </p>";
    document.getElementById('q4-c3').innerHTML = "<p>C. </p>";
    document.getElementById('q4-c4').innerHTML = "<p>D. </p>";

    let correctAns4 = document.getElementById('q4-c1');
    let qFiveEl = document.getElementById('question-5');

    correctAns4.addEventListener('click', function() {
        alert("CORRECT!");
        qFourEl.style.display = "none";
        qFiveEl.style.display = "contents";
    });

    // QUESTION 5
    document.getElementById('p5').innerHTML = "5. ";
    document.getElementById('q5-c1').innerHTML = "<p>A. </p>";
    document.getElementById('q5-c2').innerHTML = "<p>B. </p>";
    document.getElementById('q5-c3').innerHTML = "<p>C. C</p>";
    document.getElementById('q5-c4').innerHTML = "<p>D. </p>";

    let correctAns5 = document.getElementById('q5-c3');
    let scoreEl = document.getElementById('score');

    correctAns5.addEventListener('click', function() {
        alert("CORRECT!");
        qFourEl.style.display = "none";
        scoreEl.style.display = "contents";
    });

});


// questionOne: "A _______ is an error in a program that prevents the program from running as expected.",
// questionTwo: "What does a for loop do?",
// questionThree: "A _______ is a placeholder for a piece of information that can change.",
// questionFour: "blah blah blah??",
// questionFive: "blah blah blah??"

// let questions = [
//     {
//         question: "1. A _______ is an error in a program that prevents the program from running as expected.",
//         choices: ["A", "B", "C", "D"],
//         correctAns: "B"
//     },
//     {
//         question: "2. What does a for loop do?",
//         choices: ["A", "B", "C", "D"],
//         correctAns: "C"
//     },
//     {
//         question: "3. A _______ is a placeholder for a piece of information that can change.",
//         choices: ["A", "B", "C", "D"],
//         correctAns: "A"
//     },
//     {
//         question: "",
//         choices: ["A", "B", "C", "D"],
//         correctAns: "C"
//     },
//     {
//         question: "",
//         choices: ["A", "B", "C", "D"],
//         correctAns: "D"
//     }
//     ];