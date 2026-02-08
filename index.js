//Declaration et initialisation de nos variales
let rock = document.getElementById("rockBtn");
let paper = document.getElementById("paperBtn");
let scissor = document.getElementById("scissorsBtn");

let p = document.getElementById("affichage");

let winPlayer, winComputer;

//tableau contenant les jeux
let games = ["rock", "paper", "scissors"];

//Fonction permettant de generer une valeur au hasard a partir du tableau du jeu
function computerValue(games) {
	const randomValue = Math.floor(Math.random() * games.length);
	return games[randomValue];
}

let result = computerValue(games);
console.log("is the random " + result);

//La creation d'un element p pour afficher les resultat du chaque victoire sur la page
let showResult = document.createElement("p");
p.appendChild(showResult);

//La fonction de traitement rock
function rocks() {
	if (result == "rock") {
		showResult.textContent = "It's a tied!";
	}

	if (result == "paper") {
		showResult.textContent = "You lose! paper beats rock";
	}

	if (result == "scissors") {
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

//nos evenement declencheur sur les boutons
rock.addEventListener("click", rocks);
paper.addEventListener("click", papers);
scissor.addEventListener("click", scissors);
