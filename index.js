//Declaration et initialisation de nos variales
let rock = document.getElementById("rockBtn");
let paper = document.getElementById("paperBtn");
let scissor = document.getElementById("scissorsBtn");

//tableau contenant les jeux
let games = ["rock", "paper", "scissors"];

//Fonction permettant de generer une valeur au hasard a partir du tableau du jeu
function computerValue(games) {
	const randomValue = Math.floor(Math.random() * games.length);
	return games[randomValue];
}

let result = computerValue(games);
console.log("is the random " + result);

function rocks() {
	if (result == "rock") {
		console.log("the geme is tied");
	}

	if (result == "paper") {
		console.log("Computer won ");
	}

	if (result == "scissors") {
		console.log("you won ");
	}
}

function papers() {
	if (result == "paper") {
		console.log("the game is tied");
	}

	if (result == "rock") {
		console.log("you won");
	}

	if (result == "scissors") {
		console.log("Computer won");
	}
}

function scissors() {
	if (result == "scissors") {
		console.log("the game is tied");
	}

	if (result == "paper") {
		console.log("you won");
	}

	if (result == "rock") {
		console.log("computer won");
	}
}

//nos evenement declencheur sur les boutons
rock.addEventListener("click", rocks);
paper.addEventListener("click", papers);
scissor.addEventListener("click", scissors);
