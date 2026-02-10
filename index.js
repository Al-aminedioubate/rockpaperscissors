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

//Creons une boucle permettant de parcourir tout nos boutons pour executer les evenements.
buttons.forEach((button) => {
	button.addEventListener("click", () => {
		const result = playerRound(button.id, computerPlay());
		showResult.textContent = result;
	});
});
