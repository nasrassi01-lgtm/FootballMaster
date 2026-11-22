const startButton = document.getElementById("start-btn");
const quiz = document.getElementById("quiz");
const question = document.getElementById("question");

startButton.addEventListener("click", function() {

    startButton.style.display = "none";

    quiz.style.display = "block";

    question.textContent = "Who won the World Cup in 2022?";

    document.getElementById("answer1").textContent = "France";
    document.getElementById("answer2").textContent = "Argentina";
    document.getElementById("answer3").textContent = "Brazil";
    document.getElementById("answer4").textContent = "Portugal";

});
let score = 0;
let highscore = Number(localStorage.getItem("highscore")) || 0;

document.getElementById("highscore").textContent = highscore;
let answered = false;

function checkAnswer(answer) {

    if (answered === true) {
        return;
    }

    answered = true;
document.getElementById("next-btn").style.display = "inline-block";

if (
    (currentQuestion === 1 && answer === "Argentina") ||
    (currentQuestion === 2 && answer === "France") ||
    (currentQuestion === 3 && answer === "Liverpool") ||
    (currentQuestion === 4 && answer === "11") ||
    (currentQuestion === 5 && answer === "Germany") ||
    (currentQuestion === 6 && answer === "Portugal") ||
    (currentQuestion === 7 && answer === "Barcelona") ||
    (currentQuestion === 8 && answer === "Manchester City") ||
    (currentQuestion === 9 && answer === "Qatar") ||
    (currentQuestion === 10 && answer === "Spain")
) {
        score = score + 10;
        if (score > highscore) {
    highscore = score;
    localStorage.setItem("highscore", highscore);
    document.getElementById("highscore").textContent = highscore;
}

        document.getElementById("score").textContent =
            "Score: " + score;

        alert("Correct answer! +10 points ⚽");
    } else {
  const correctAnswers = [
    "Argentina",
    "France",
    "Liverpool",
    "11",
    "Germany",
    "Portugal",
    "Barcelona",
    "Manchester City",
    "Qatar",
    "Spain"
];

alert("Wrong answer! The correct answer is " +
    correctAnswers[currentQuestion - 1] + ".");
    }
}
document.getElementById("answer1").addEventListener("click", function() {
    checkAnswer(this.textContent);
});

document.getElementById("answer2").addEventListener("click", function() {
    checkAnswer(this.textContent);
});

document.getElementById("answer3").addEventListener("click", function() {
    checkAnswer(this.textContent);
});

document.getElementById("answer4").addEventListener("click", function() {
    checkAnswer(this.textContent);
});
let currentQuestion = 1;

function nextQuestion() {

    currentQuestion = currentQuestion + 1;
    answered = false;

    if (currentQuestion === 2) {

        question.textContent =
            "Which country won the World Cup in 2018?";

        document.getElementById("answer1").textContent = "Brazil";
        document.getElementById("answer2").textContent = "Germany";
        document.getElementById("answer3").textContent = "France";
        document.getElementById("answer4").textContent = "Spain";

    }

if (currentQuestion === 3) {
    question.textContent = "Which club plays at Anfield?";
    document.getElementById("answer1").textContent = "Chelsea";
    document.getElementById("answer2").textContent = "Liverpool";
    document.getElementById("answer3").textContent = "Arsenal";
    document.getElementById("answer4").textContent = "Manchester United";
}

if (currentQuestion === 4) {
    question.textContent = "How many players are on the field per team?";
    document.getElementById("answer1").textContent = "9";
    document.getElementById("answer2").textContent = "10";
    document.getElementById("answer3").textContent = "11";
    document.getElementById("answer4").textContent = "12";
}

if (currentQuestion === 5) {
    question.textContent = "Who won the World Cup in 2014?";
    document.getElementById("answer1").textContent = "Argentina";
    document.getElementById("answer2").textContent = "Brazil";
    document.getElementById("answer3").textContent = "Germany";
    document.getElementById("answer4").textContent = "Spain";
}

if (currentQuestion === 6) {
    question.textContent = "Which country is Cristiano Ronaldo from?";
    document.getElementById("answer1").textContent = "Spain";
    document.getElementById("answer2").textContent = "Portugal";
    document.getElementById("answer3").textContent = "Italy";
    document.getElementById("answer4").textContent = "Brazil";
}

if (currentQuestion === 7) {
    question.textContent = "Which club plays at Camp Nou?";
    document.getElementById("answer1").textContent = "Real Madrid";
    document.getElementById("answer2").textContent = "Barcelona";
    document.getElementById("answer3").textContent = "Atletico Madrid";
    document.getElementById("answer4").textContent = "Sevilla";
}

if (currentQuestion === 8) {
    question.textContent = "Who won the Champions League in 2023?";
    document.getElementById("answer1").textContent = "Inter Milan";
    document.getElementById("answer2").textContent = "Real Madrid";
    document.getElementById("answer3").textContent = "Manchester City";
    document.getElementById("answer4").textContent = "Bayern Munich";
}

if (currentQuestion === 9) {
    question.textContent = "Which country hosted the 2022 World Cup?";
    document.getElementById("answer1").textContent = "Qatar";
    document.getElementById("answer2").textContent = "Germany";
    document.getElementById("answer3").textContent = "Russia";
    document.getElementById("answer4").textContent = "France";
}

if (currentQuestion === 10) {
    question.textContent = "Who won the World Cup in 2010?";
    document.getElementById("answer1").textContent = "Netherlands";
    document.getElementById("answer2").textContent = "Germany";
    document.getElementById("answer3").textContent = "Brazil";
    document.getElementById("answer4").textContent = "Spain";
}


if (currentQuestion > 10) {
    alert("Game Over! ⚽ Your final score is: " + score + "/100");

    location.reload();
    return;
}

    document.getElementById("next-btn").style.display = "none";
}

document.getElementById("next-btn").addEventListener("click", nextQuestion);