//Declaration et initialisation de nos variales
let playerScoreResult = document.getElementById("playerScore");
let computerScoreResult = document.getElementById("computerScore");

let buttons = document.querySelectorAll("button");

let showResult = document.getElementById("affichage");

let scorePlayer = 0;
let scoreComputer = 0;

//Fonction permettant de generer une valeur au hasard a partir du tableau du jeu
function computerPlay() {
	let games = ["rock", "paper", "scissors"];
	const randomchoice = Math.floor(Math.random() * games.length);
	return games[randomchoice];
}

//La fonction de traitement rock
function playerRound(playerChoice, computerChoice) {
	if (playerChoice == computerChoice) {
		return "It's a tie!";
	} else if (
		(playerChoice == "rock" && computerChoice == "scissors") ||
		(playerChoice == "paper" && computerChoice == "rock") ||
		(playerChoice == "scissors" && computerChoice == "paper")
	) {
		scorePlayer++;
		playerScoreResult.textContent = scorePlayer;

		return "You win! " + playerChoice + " beats " + computerChoice;
	} else {
		scoreComputer++;
		computerScoreResult.textContent = scoreComputer;

		return `You lose! ${computerChoice} beats ${playerChoice}`;
	}
}

//La fonction de traitement paper
function papers() {
	if (result == "paper") {
		showResult.textContent = "It's a tied!";
	}

	if (result == "rock") {
		showResult.textContent = "You win! paper beats rock";
	}

	if (result == "scissors") {
		showResult.textContent = "You lose! scissors beats paper";
	}
}

//La fonction de traitement scissors
function scissors() {
	if (result == "scissors") {
		showResult.textContent = "It's a tied!";
	}

	if (result == "paper") {
		showResult.textContent = "You win! scissors beats paper";
	}

	if (result == "rock") {
		showResult.textContent = "You lose! rock beats scissors";
	}
}

//Creons une boucle permettant de parcourir tout nos boutons pour executer les evenements.
buttons.forEach((button) => {
	button.addEventListener("click", () => {
		const result = playerRound(button.id, computerPlay());
		showResult.textContent = result;
	});
});
