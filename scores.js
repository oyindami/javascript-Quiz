//Grab Data Need to append
var scoreList = document.getElementById("scoreList");
var goBackBtnEL = document.getElementById("goBack");
var clearHBtnEL = document.getElementById("clearHistory");

function displayScore() {
  var data = JSON.parse(localStorage.getItem("allScores"));
  console.log(data);
  if (data != null) {
    for (var i = 0; i < data.length; i++) {
      var name = data[i].initials;
      var score = data[i].score;

      var liEL = document.createElement("li");
      liEL.textContent = i + 1 + ". " + name + "   " + score;
      scoreList.append(liEL);
    }
  }
}
displayScore();

// resets back to the homepage page
goBackBtnEL.addEventListener("click", function () {
  location.href = "index.html";
});

clearHBtnEL.addEventListener("click", function(){
    localStorage.clear();
    location.reload();
}) //to clear the history 
