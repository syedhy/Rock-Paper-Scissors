let youImg =  document.querySelector(".C-youTurn img");
let bobImg =  document.querySelector(".C-bobTurn img");
let gameStatus =  document.querySelector(".B-status h2");
let youBoard = document.querySelector(".currScoreYou");
let bobBoard = document.querySelector(".currScoreBob");
let newBtn = document.querySelector(".C-newBtn");

let youScore = 0;
let bobScore = 0;

const youChoice = document.querySelectorAll(".C-choice img");


const playGame = (youChoice) => {

    const bobChoice = genBobChoice();

    youImg.src = `./imgs/${youChoice}.png`;
    bobImg.src = `./imgs/${bobChoice}.png`;

    if (youChoice === bobChoice) {
        gameStatus.innerText = "Draw"
    }
    else {
        let youWin = true;
        if (youChoice === "rock") {
            youWin = bobChoice === "paper" ? false : true;
        }
        else if (youChoice === "paper") {
            youWin = bobChoice === "scissors" ? false : true;
        }
        else if (youChoice === "scissors") {
            youWin = bobChoice === "rock" ? false : true;
        }
        showWinner(youWin);
    }
}


const showWinner = (youWin) => {
    if (youWin) {
        gameStatus.innerText = "You Win"
        youScore++;
        youBoard.innerText = youScore;
    }
    else{
        gameStatus.innerText = "You Lose"
        bobScore++;
        bobBoard.innerText = bobScore;
    }
}
const genBobChoice = () => {
    const bobArray = ["rock" , "paper" , "scissors"]
    let idx = Math.floor(Math.random() *3)
    const bobChoice = bobArray[idx];
    return bobChoice;
}





youChoice.forEach((choice) => {
    choice.addEventListener("click" , () => {
        let youId = choice.getAttribute("id");
        playGame(youId);
    })
})

newBtn.addEventListener("click" , () => {
    youScore = 0;
    bobScore = 0;
    youBoard.innerText = youScore;
    bobBoard.innerText = bobScore;
    gameStatus.innerText = "Play!"
    youImg.src = "./imgs/rock.png";
    bobImg.src = "./imgs/rock.png";
})
