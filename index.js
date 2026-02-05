//Declaration et initialisation de nos variales
let rock = document.getElementById("rockBtn");
let paper = document.getElementById("paperBtn");
let scissor = document.getElementById("scissorsBtn");

let games = ["rock", "paper", "scissors"];

function computerValue(games) {
	const randomValue = Math.floor(Math.random() * games.length);
	return games[randomValue];
}

let result = computerValue(games);
console.log("is the random " + result);

function rocks() {
	console.log("rock fonctionne");

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
	console.log("papers fonctionne");
}

function scissors() {
	console.log("scissors fonctionne");
}

//nos evenement declencheur sur les boutons
rock.addEventListener("click", rocks);
paper.addEventListener("click", papers);
scissor.addEventListener("Click", scissors);
