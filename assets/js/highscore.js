var clearHighscores = document.querySelector("#clear")

var highscores = JSON.parse(localStorage.getItem("localHighscores"))

clearHighscores.addEventListener("click", function(){
    localStorage.clear("localHighscores")
    location.reload()
})

if (highscores != null){
    for (i = 0; i < highscores.length; i++){
        var x = i.toString()
        var userName = (highscores[i].name)
        var userScore = (highscores[i].score)
        var score = document.getElementById(x)
        score.textContent = userName + ":   " + userScore
    }
}

