//Declaration et initialisation de nos variales
let rock = document.getElementById("rockBtn");
let paper = document.getElementById("paperBtn");
let scissor = document.getElementById("scissorsBtn");

let p = document.getElementById("affichage");

//tableau contenant les jeux
let games = ["rock", "paper", "scissors"];

//Fonction permettant de generer une valeur au hasard a partir du tableau du jeu
function computerValue(games) {
	const randomValue = Math.floor(Math.random() * games.length);
	return games[randomValue];
}

let result = computerValue(games);
console.log("is the random " + result);

//La fonction de traitement rock

let showResult = document.createElement("p");
p.appendChild(showResult);

function rocks() {
	if (result == "rock") {
		console.log("the geme is tied");

		showResult.textContent = "It's a tied!";
	}

	if (result == "paper") {
		console.log("Computer won ");

		showResult.textContent = "You lose! paper beats rock";
	}

	if (result == "scissors") {
		console.log("you won ");

		showResult.textContent = "You win! rock beats scissors";
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
		console.log("Computer won");
	}
}

//La fonction de traitement scissors
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
