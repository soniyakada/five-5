let userScore = 0;
let compScore = 0;

const choices = document.querySelectorAll(".choice");

const msg = document.querySelector("#msg");
const userScorepara = document.querySelector("#user-score");
const compScorepara = document.querySelector("#comp-score");

const genCompChoice = () => {
  const options = ["rock", "paper", "scissor"];
  const randIdx = Math.floor(Math.random() * 3);
  return options[randIdx];
  //rock ,paper, scissors
};

const drawGame = () => {
  msg.innerHTML = "Draw Game";
  msg.style.backgroundColor = "teal";
};

const showWinner = (userWin, userChoice, compChoice) => {
  if (userWin) {
    userScore++;
    userScorepara.innerHTML = userScore;
    msg.innerHTML = `You Win! your ${userChoice} beats ${compChoice}`;
    msg.style.backgroundColor = "green";
  } else {
    compScore++;
    compScorepara.innerHTML = compScore;
    msg.innerHTML = `You Lost. ${compChoice} beats your ${userChoice}`;

    msg.style.backgroundColor = "red";
  }
};
const playGame = (userChoice) => {
  console.log("user Choice =", userChoice);
  //Generate user choice
  const compChoice = genCompChoice();
  console.log("computer choice=", compChoice);

  if (userChoice === compChoice) {
    //Draw game
    drawGame();
  } else {
    let userWin = true;
    if (userChoice === "rock") {
      //paper, scissor
      userWin = compChoice === "paper" ? false : true;
    } else if (userChoice === "paper") {
      //rock, scissor
      userWin = compChoice === "rock" ? true : false;
    } else {
      //rock,paper
      userWin = compChoice === "rock" ? false : true;
    }
    showWinner(userWin, userChoice, compChoice);
  }
};

choices.forEach((choice) => {
  choice.addEventListener("click", () => {
    const userChoice = choice.getAttribute("id");

    playGame(userChoice);
  });
});
