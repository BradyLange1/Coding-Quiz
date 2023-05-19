var startButton = document.querySelector("#start")
var timerEl = document.querySelector("#clockTime")
var question = document.querySelector("#question")
var answers = document.querySelector("#answers")
var answer1 = document.querySelector("#answer1")
var answer2 = document.querySelector("#answer2")
var answer3 = document.querySelector("#answer3")
var answer4 = document.querySelector("#answer4")

answers.hidden = true
//q&a bank
var questionBank = ["What is not a data type in JavaScript?", "What type of character surrounds an array in JavaScript?"]
var answerBank = [
    ["String", "Word", "Number", "Boolean"], 
    ["Parenthesis", "Squigly Brackets", "Square Brackets", "Quotes"]
]
var index = 0
var correctAnswers = ["answer2", "answer3"]
var timeLeft = 75
var x = true

//timer function
function decrementTimer(stopTime){
    timerEl.textContent = timeLeft
    if (timeLeft > 0){
        if (x){
            var time = setInterval(function(){
                if (timeLeft > 0) {
                    timeLeft--
                    timerEl.textContent = timeLeft
                }
            }, 1000)
            x = false
        }
    }
}

//renders question
function askQuestion(i){
    question.textContent = questionBank[i]
    answer1.textContent = (answerBank[i][0])
    answer2.textContent = (answerBank[i][1])
    answer3.textContent = (answerBank[i][2])
    answer4.textContent = (answerBank[i][3])
}

//starts quiz
startButton.addEventListener("click", function(){
    answers.hidden = false
    startButton.remove()
    decrementTimer()
    askQuestion(index)
})

//user answers questions
answers.addEventListener("click", function(event){
    var userAnswer = event.target.id
    if (userAnswer !== correctAnswers[index]){
        console.log("wrong answer")
        timeLeft -= 10
        decrementTimer()
    } else {
        console.log("correct answer")
    }
    if (index < 1){
        index++
        askQuestion(index)
    } else {7
        if (timerEl.textContent < 0){
            timerEl.textContent = 0
        }
        question.textContent = "Your score: " + timerEl.textContent
        localStorage.setItem("score", timerEl.textContent)
        answers.remove()
    }
})

