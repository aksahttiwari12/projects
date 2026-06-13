let playbutton = document.getElementById("playbutton");
let choicesbuttons = document.getElementById("choicesbuttons");
let rock = document.getElementById("rocks");
let paper = document.getElementById("paper");
let scissor = document.getElementById("scissor");
let playerchoice;
let computerchoice;
let playerscore = 0;
let computerscore = 0;


playbutton.addEventListener("click", function () {
    let randomnum = Math.floor(Math.random() * 3);
    if (randomnum == 0) {
        computerchoice = "rock";
    }
    else if (randomnum == 1) {
        computerchoice = "paper";
    }
    else {
        computerchoice = "scissor";
    }
    if (choicesbuttons.style.display === "block") {
        choicesbuttons.style.display = "none";
    }
    else {
        choicesbuttons.style.display = "flex";
        playbutton.style.display = "none";
    }
})

choicesbuttons.addEventListener("click", function () {
    playbutton.style.display = "";
    choicesbuttons.style.display = "none";
})

rock.addEventListener("click", function () {
    playerchoice = "rock";
    checkwinner(playerchoice,computerchoice);
})
paper.addEventListener("click", function () {
    playerchoice = "paper";
    checkwinner(playerchoice,computerchoice);
})
scissor.addEventListener("click", function () {
    playerchoice = "scissor";
    checkwinner(playerchoice,computerchoice);
})

function checkwinner(playerchoice,computerchoice){
  if(playerchoice == computerchoice){
        alert("Draw");
    }
    else if(playerchoice == "rock" && computerchoice == "scissor" || playerchoice == "paper" && computerchoice == "rock" || playerchoice == "scissor" && computerchoice == "paper"){
        alert("You win!!");
        playerscore++;
    }
    else{
        alert("You lost!!");
        computerscore++;
    }
    console.log(playerscore);
    console.log(computerscore);
}
