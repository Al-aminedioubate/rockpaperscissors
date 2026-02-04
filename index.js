//Declaration et initialisation de nos variales
let rock = document.getElementById("rockBtn");
let paper = document.getElementById("paperBtn");
let scissor = document.getElementById("scissorsBtn");

let randomValue;

function computerValue() {
	//randomValue = Math.random()
}

function rocks() {
	console.log("rock fonctionne");
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
