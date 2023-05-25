var startButton = document.querySelector("#start")
var timerEl = document.querySelector("#clockTime")
var question = document.querySelector("#question")
var answers = document.querySelector("#answers")
var answer1 = document.querySelector("#answer1")
var answer2 = document.querySelector("#answer2")
var answer3 = document.querySelector("#answer3")
var answer4 = document.querySelector("#answer4")

answers.hidden = true
var index = 0
var correctAnswers = ["answer2", "answer3", "answer1", "answer3", "answer2"]
var timeLeft = 75
var x = true
var highscores = JSON.parse(localStorage.getItem("localHighscores"))
var numOfHighscores = 5
if (highscores === null){
    highscores = []
}

//q&a banks
var questionBank = ["What is not a data type in JavaScript?", "What type of character surrounds an array in JavaScript?", "What operator would you use for less than or equal to in JavaScript?", "What operator is a strict equality comparison in JavaScript?", "What operator is a loose equality comparison in JavaScript?"]
var answerBank = [
    ["String", "Word", "Number", "Boolean"], 
    ["Parenthesis", "Squigly Brackets", "Square Brackets", "Quotes"],
    ["<=", "<", ">=", ">"],
    ["=", "==", "===", "===="],
    ["<=", "==", "!=", ">"]
]

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
    } else{
        index += 5
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
        timeLeft -= 10
        decrementTimer()
    } else {
    }
    if (index < 4){
        index++
        askQuestion(index)
    } else{
        if (timerEl.textContent < 0){
            timerEl.textContent = 0
        }
        recentScore = timerEl.textContent
        question.textContent = "Your score: " + recentScore
        answers.remove()
        timeLeft = 0
        decrementTimer()
        var initials = document.createElement("p")
        var initialsInput = document.createElement("input")
        var submit = document.createElement("button")
        var movePage = document.createElement("a")
        movePage.href = "./highscores.html"
        submit.textContent = "Submit"
        initials.textContent = "Enter your Initials: "
        question.appendChild(initials)
        question.appendChild(initialsInput)
        question.appendChild(movePage)
        movePage.appendChild(submit)
        submit.addEventListener("click", function(event){
            var userInitials = document.querySelector('input').value
            var userScore = {
                name: userInitials,
                score: recentScore
            }
            highscores.push(userScore)
            highscores.sort((a,b) => b.score - a.score)
            highscores.splice(5)
            localStorage.setItem("localHighscores", JSON.stringify(highscores))

        })
    }
})