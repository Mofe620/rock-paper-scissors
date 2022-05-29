// RULES MODAL
let rBtn = document.querySelector('.rules-btn');
let rModal = document.querySelector('.modal');
let rClose = document.querySelector('.close-icon');
rBtn.addEventListener('click', ()=> {
    rModal.classList.toggle('show');
})
rClose.addEventListener('click', ()=> {
    rModal.setAttribute('class', 'modal');
})

// REGISTER FORM
let form = document.querySelector('#form');
let nInput = document.querySelector('#name-input');
let register = document.querySelector('#start-btn');
let countField = document.querySelector("#count");
let verify = '';
register.addEventListener('click', ()=> {
    if (nInput.value !== '') {
        var name = nInput.value;
    } else {
        var name = prompt ("Type in your name, please");
    }
    form.textContent = `Welcome, ${name}.
                        You're up against Mofe.
                        See if you can beat him.`
	verify = true;
	countField.textContent = 0;
})

// GAME PLAY
let gameArea = document.querySelector('.game-area');
let faceOff = document.querySelector('.face-off');
let userArea = document.querySelector('.user-pick');
let systemArea = document.querySelector('.system-pick');
let up = document.querySelector('#up');
let sp = document.querySelector('#sp');
var Rock = document.querySelector(".rock-icon");
var Paper = document.querySelector(".paper-icon");
var Scissors = document.querySelector(".scissors-icon");
var options = ["Rock", "Paper", "Scissors"];
var userScore = 0;
var systemScore = 0;
var gameCount = 0;

function renderGame(){
	if (verify != true) { alert('You need to register first'); throw new Error()}

	var choice = this.event.target.getAttribute('name');
	var systemPick = Math.floor(Math.random()*3);
	gameCount += 1;

    var uRock = Rock.cloneNode(true);
    var uPaper = Paper.cloneNode(true);
    var uScissors = Scissors.cloneNode(true);
    var sRock = Rock.cloneNode(true);
    var sPaper = Paper.cloneNode(true);
    var sScissors = Scissors.cloneNode(true);

	// New Icons should not trigger render() function
	uRock.setAttribute('onclick', '');
	uPaper.setAttribute('onclick', '');
	uScissors.setAttribute('onclick', '');
	sRock.setAttribute('onclick', '');
	sPaper.setAttribute('onclick', '');
	sScissors.setAttribute('onclick', '');

	var choiceIcon = "";
	var systemIcon = "";
    form.innerHTML = '';
    faceOff.setAttribute('class', 'face-off show');

	if(choice == "Rock"){choiceIcon = uRock};
	if(choice == "Paper"){choiceIcon = uPaper};
	if(choice == "Scissors"){choiceIcon = uScissors};
	if(options[systemPick] == "Rock"){systemIcon = sRock};
	if(options[systemPick] == "Paper"){systemIcon = sPaper};
	if(options[systemPick] == "Scissors"){systemIcon = sScissors};
    
    // ENSURE TO STYLE THE CLONE ELEMENTS 
    // they have position:absolute; and may fly all over the place.
    choiceIcon.setAttribute('id', 'createdIcon'); 
    systemIcon.setAttribute('id', 'createdIcon'); 

	// DISPLAY THE NAME OF GAME PLAYED
    up.textContent = choice;
    sp.textContent = options[systemPick];

	// DISPLAY THE ICON
    userArea.appendChild(choiceIcon);
    systemArea.appendChild(systemIcon);
	
	// Create a Data Attribute to reflect who wins each round
	choiceIcon.setAttribute('data', '');
	systemIcon.setAttribute('data', '');

	//ANALYSE USER and SYSTEM CHOICES
	if (choice == options[systemPick]) {
		userScore += 0;
		systemScore += 0;
	} else 	switch (true) {
		case (choice == 'Rock' && options[systemPick] == 'Scissors'):
		userScore += 1;
		choiceIcon.setAttribute('data', 'win');
		systemScore += 0;
		break;

		case (choice == 'Rock' && options[systemPick] == 'Paper'):
		userScore += 0;
		systemScore += 1;
		systemIcon.setAttribute('data', 'win');
		break;

		case (choice == 'Paper' && options[systemPick] == 'Rock'):
		userScore += 1;
		choiceIcon.setAttribute('data', 'win');
		systemScore += 0;
		break;

		case (choice == 'Paper' && options[systemPick] == 'Scissors'):
		userScore += 0;
		systemScore += 1;
		systemIcon.setAttribute('data', 'win');
		break;

		case (choice == 'Scissors' && options[systemPick] == 'Rock'):
		userScore += 0;
		systemScore += 1;
		systemIcon.setAttribute('data', 'win');
		break;

		case (choice == 'Scissors' && options[systemPick] == 'Paper'):
		userScore += 1;
		choiceIcon.setAttribute('data', 'win');
		systemScore += 0;
		break;

	}
	countField.textContent = `${userScore} : ${systemScore}`;

    // RESET VARIABLES
	uRock = '';
    uPaper = '';
    uScissors = '';
    sRock = '';
    sPaper = '';
    sScissors = '';


	//END GAME AFTER 10 Rounds
	// if (gameCount == 10) {
	// 	weapon.remove();

	// 	//DISPLAY SCORE
	// 	var resultRow = resultTable.insertRow();
	// 	var cell4 = resultRow.insertCell(0);
	// 	var cell5 = resultRow.insertCell(1);
	// 	var cell6 = resultRow.insertCell(2);
	// 	cell4.textContent = "TOTAL";
	// 	cell5.textContent = userScore;
	// 	cell6.textContent = systemScore;

	// 	//DELETE SECOND (Serial No 0)
	// 	resultTable.deleteRow(1);

	// 	//CREATE RESTART LINK(A)
	// 	var restart = document.createElement("a");
	//     restart.setAttribute('href', "index.html")
	//     restart.setAttribute('id', "restart-btn")
	//     restart.textContent = "PLAY AGAIN";
	//     document.body.appendChild(restart);
	// }
	
}