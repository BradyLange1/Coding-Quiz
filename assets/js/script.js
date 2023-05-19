var startButton = document.querySelector("#start")
var timerEl = document.querySelector("#clockTime")
var question = document.querySelector("#question")
var answers = document.querySelector("#answers")
var answer1 = document.querySelector("#answer1")
var answer2 = document.querySelector("#answer2")
var answer3 = document.querySelector("#answer3")
var answer4 = document.querySelector("#answer4")

answers.hidden = true

function decrementTimer(){
    var timeLeft = 75
    timerEl.textContent = timeLeft
    var x = setInterval(function(){
        if (timeLeft > 0) {
            timeLeft--
            timerEl.textContent = timeLeft
        }
    }, 1000)
}

function askQuestion(){
    var questionBank = ["What is not a data type in JavaScript?", "What type of character surrounds an array in JavaScript?"]
    var answerBank = [
        ["String", "Word", "Number", "Boolean"], 
        ["Parenthesis", "Squigly Brackets", "Square Brackets", "Quotes"]
    ]
    console.log(answerBank[0][0])
    for (var i = 0; i < questionBank.length; i++){
        question.textContent = questionBank[i]
        for (var i = 0; i < 4; i++){
            console.log(answerBank[0][0])
            answer1.textContent = (answerBank[i][0])
            answer2.textContent = (answerBank[i][1])
            answer3.textContent = (answerBank[i][2])
            answer4.textContent = (answerBank[i][3])
        }
        answers.addEventListener("click", function(){
            
        })
    }
}



startButton.addEventListener("click", function(){
    answers.hidden = false
    startButton.remove()
    decrementTimer()
    askQuestion()
})

