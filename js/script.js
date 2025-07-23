let userScore = 0;
let compScore = 0;

const choices = document.querySelectorAll(".choices");
const msg = document.querySelector("#msg");
const userScorePara = document.querySelector("#user-score");
const compScorePara = document.querySelector("#comp-score");

const genCompChoice = () => {
    const options = ["rock","paper","scissors"];
    const randIdx = Math.floor(Math.random() *3);
    return options[randIdx];
}

const drawGame = () => {
    console.log("Game was Draw");
        msg.innerText = "Game was Draw. Play Again";
        msg.style.backgroundColor = "12101b";
}

const showWinner = () => {
    if(userWin){
        userScore++;
        userScorePara.innerText = userScore;
        msg.innerText = `You Win! ${userChoice} beats ${compChoice}`;
        msg.style.backgroundColor = "green";
    } else {
        compScore++;
        compScorePara.innerText = compScore;
        msg.innerText = `You Win! ${compChoice} beats your ${userChoice}`;
        msg.style.backgroundColor = "red";
    }
}

const playGame = (userChoice) => {
    console.log("user choice =",userChoice);
    const compChoice = genCompChoice();
    console.log("Computer choice = ",compChoice);

    if(userChoice === compChoice){
        drawGame();
    } else {
        let userWin = true ;
        if(userChoice === "rock") {
            //scissors, paper
            userWin = compChoice === "paper" ? false : true ;
        } else  if(userChoice === "paper") {
            //rock, scissors
            userWin = compChoice === "scissors" ? false : true ;
        } else {
             //rock, paper
            userWin = compChoice === "rock" ? false : true ;
        }
        showWinner(userWin);
    }
}

choices.forEach((choice) => {
    console.log(choice);
    choice.addEventListener("click", () =>{
        const userChoice = choice.getAttribute("id");
        console.log(userChoice);
        playGame(userChoice);
    });
});


