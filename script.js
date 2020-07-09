let secondsLeft = 10;
let timeEl = document.querySelector('#timer');
let startBtn = document.querySelector('#startBtn');

// Home page and start button
startBtn.addEventListener('click', function startQuiz() {
    let timerInterval = setInterval(function() {
        secondsLeft--;
        timeEl.textContent = 'Time Left: ' + secondsLeft;

        // Skip to score page if timer runs out
        if (secondsLeft === 0) {
            clearInterval(timerInterval);
            alert('TIMES UP! You answered ' + score + ' question(s) correctly.');
            qOneEl.style.display = 'none';
            qTwoEl.style.display = 'none';
            qThreeEl.style.display = 'none';
            qFourEl.style.display = 'none';
            qFiveEl.style.display = 'none';
            scoreEl.style.display = 'contents'
        }
    }, 1000);

    let startEl = document.getElementById('start');
    let qOneEl = document.getElementById('question-1');
    let qTwoEl = document.getElementById('question-2');
    let qThreeEl = document.getElementById('question-3');
    let qFourEl = document.getElementById('question-4');
    let qFiveEl = document.getElementById('question-5');
    let scoreEl = document.getElementById('score');
    let score = 0;

    // When startBtn is pressed, the start page will hide while the first question shows
    startEl.style.display = 'none';
    qOneEl.style.display = 'contents';

    // QUESTION 1
    document.getElementById('p1').innerHTML = '1. A _______ is an error in a program that prevents the program from running as expected.';
    document.getElementById('q1-c1').innerHTML = '<p>A. Array</p>';
    document.getElementById('q1-c2').innerHTML = '<p>B. Bug</p>';
    document.getElementById('q1-c3').innerHTML = '<p>C. Variable</p>';
    document.getElementById('q1-c4').innerHTML = '<p>D. For Loop</p>';
    
    document.getElementById('q1-c1').onclick = function correctOne() {
        score--;
        alert('Sorry, that was incorrect.');
        qOneEl.style.display = 'none';
        qTwoEl.style.display = 'contents';
     };
    document.getElementById('q1-c2').onclick = function() {
        score++;
        alert('CORRECT!');
        qOneEl.style.display = 'none';
        qTwoEl.style.display = 'contents';
     };
    document.getElementById('q1-c3').onclick = function() {
        score--;
        alert('Sorry, that was incorrect.');
        qOneEl.style.display = 'none';
        qTwoEl.style.display = 'contents';
     };
    document.getElementById('q1-c4').onclick = function() {
        score--;
        alert('Sorry, that was incorrect.');
        qOneEl.style.display = 'none';
        qTwoEl.style.display = 'contents';
     };

    // QUESTION 2
    document.getElementById('p2').innerHTML = '2. What does HTML stand for?';
    document.getElementById('q2-c1').innerHTML = '<p>A. Hyper Text Markup Language</p>';
    document.getElementById('q2-c2').innerHTML = '<p>B. Home Tool Markup Language</p>';
    document.getElementById('q2-c3').innerHTML = '<p>C. Hyperlinks and Text Markup Language</p>';
    document.getElementById('q2-c4').innerHTML = '<p>D. He Texted My Lady</p>';

    document.getElementById('q2-c1').onclick = function() {
        score++;
        alert('CORRECT!');
        qTwoEl.style.display = 'none';
        qThreeEl.style.display = 'contents';
     };
    document.getElementById('q2-c2').onclick = function() {
        score--;
        alert('Sorry, that was incorrect.');
        qTwoEl.style.display = 'none';
        qThreeEl.style.display = 'contents';
     };
    document.getElementById('q2-c3').onclick = function() {
        score--;
        alert('Sorry, that was incorrect.');
        qTwoEl.style.display = 'none';
        qThreeEl.style.display = 'contents';
     };
    document.getElementById('q2-c4').onclick = function() {
        score--;
        alert('Sorry, that was incorrect.');
        qTwoEl.style.display = 'none';
        qThreeEl.style.display = 'contents';
     };

    // QUESTION 3
    document.getElementById('p3').innerHTML = '3. A(n) _______ is a placeholder for a piece of information that can change.';
    document.getElementById('q3-c1').innerHTML = '<p>A. Conditional</p>';
    document.getElementById('q3-c2').innerHTML = '<p>B. Digital Footprint</p>';
    document.getElementById('q3-c3').innerHTML = '<p>C. IP Address</p>';
    document.getElementById('q3-c4').innerHTML = '<p>D. Variable</p>';

    document.getElementById('q3-c1').onclick = function() {
        score--;
        alert('Sorry, that was incorrect.');
        qThreeEl.style.display = 'none';
        qFourEl.style.display = 'contents';
     };
    document.getElementById('q3-c2').onclick = function() {
        score--;
        alert('Sorry, that was incorrect.');
        qThreeEl.style.display = 'none';
        qFourEl.style.display = 'contents';
     };
    document.getElementById('q3-c3').onclick = function() {
        score--;
        alert('Sorry, that was incorrect.');
        qThreeEl.style.display = 'none';
        qFourEl.style.display = 'contents';
     };
    document.getElementById('q3-c4').onclick = function() {
        score++;
        alert('CORRECT!');
        qThreeEl.style.display = 'none';
        qFourEl.style.display = 'contents';
     };

    // QUESTION 4
    document.getElementById('p4').innerHTML = '4. A(n) _______ is a structure in code where you perform the same action or actions multiple times in a row.';
    document.getElementById('q4-c1').innerHTML = '<p>A. Loop</p>';
    document.getElementById('q4-c2').innerHTML = '<p>B. console.log</p>';
    document.getElementById('q4-c3').innerHTML = '<p>C. if statement</p>';
    document.getElementById('q4-c4').innerHTML = '<p>D. Object</p>';

    document.getElementById('q4-c1').onclick = function() {
        score++;
        alert('CORRECT!');
        qFourEl.style.display = 'none';
        qFiveEl.style.display = 'contents';
     };
    document.getElementById('q4-c2').onclick = function() {
        score--;
        alert('Sorry, that was incorrect.');
        qFourEl.style.display = 'none';
        qFiveEl.style.display = 'contents';
     };
    document.getElementById('q4-c3').onclick = function() {
        score--;
        alert('Sorry, that was incorrect.');
        qFourEl.style.display = 'none';
        qFiveEl.style.display = 'contents';
     };
    document.getElementById('q4-c4').onclick = function() {
        score--;
        alert('Sorry, that was incorrect.');
        qFourEl.style.display = 'none';
        qFiveEl.style.display = 'contents';
     };

    // QUESTION 5
    document.getElementById('p5').innerHTML = '5. A(n) _______ has properties, also known as keys, to which are assigned values.';
    document.getElementById('q5-c1').innerHTML = '<p>A. Conditional</p>';
    document.getElementById('q5-c2').innerHTML = '<p>B. Function</p>';
    document.getElementById('q5-c3').innerHTML = '<p>C. Object</p>';
    document.getElementById('q5-c4').innerHTML = '<p>D. Array</p>';

    document.getElementById('q5-c1').onclick = function() {
        score--;
        alert('Sorry, that was incorrect.');
        qFiveEl.style.display = 'none';
        scoreEl.style.display = 'contents';
     };
    document.getElementById('q5-c2').onclick = function() {
        score--;
        alert('Sorry, that was incorrect.');
        qFiveEl.style.display = 'none';
        scoreEl.style.display = 'contents';
     };
    document.getElementById('q5-c3').onclick = function() {
        score++;
        alert('CORRECT!');
        qFiveEl.style.display = 'none';
        scoreEl.style.display = 'contents';
     };
    document.getElementById('q5-c4').onclick = function() {
        score--;
        alert('Sorry, that was incorrect.');
        qFiveEl.style.display = 'none';
        scoreEl.style.display = 'contents';
     };

    // SCORE & add score to the local storage
    let enterScore = document.getElementById('textbox');

    enterScore.addEventListener("keydown", function(event) {
        if (event.keyCode === 13) {
            console.log("Enter key was pressed");
            event.preventDefault()
        }
    });

});