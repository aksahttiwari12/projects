let playbutton = document.getElementById("playbutton");
let choicesbuttons = document.getElementById("choicesbuttons");
let rock = document.getElementById("rocks");
let paper = document.getElementById("paper");
let scissor = document.getElementById("scissor");
let playerchoice;
let computerchoice;

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
    console.log("Computer:" + computerchoice);
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
    console.log("Parent is called");
})

rock.addEventListener("click", function () {
    playerchoice = "rock";
    console.log(playerchoice);
})
paper.addEventListener("click", function () {
    playerchoice = "paper";
    console.log(playerchoice);
})
scissor.addEventListener("click", function () {
    playerchoice = "scissor";
    console.log(playerchoice);
})
