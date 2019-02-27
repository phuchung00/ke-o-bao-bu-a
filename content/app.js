let userScore = 0;
let computerScore = 0;
const userScore_span = document.getElementById("user-score");
const computerScore_span = document.getElementById("computer-score");
const scoreBoard_div = document.querySelector(".score_board");
const result_p = document.querySelector(".result > p");
const result_h = document.querySelector(".result > h3");
const rock_div = document.getElementById("r");
const paper_div = document.getElementById("p");
const scissors_div = document.getElementById("s");

function getComputerChoice(){
	const choices = ['r', 'p', 's'];
	const ramdomNumber = Math.floor(Math.random() * 3);
	return choices[ramdomNumber];
}
//console.log(getComputerChoice());

function convertToWord(letter){
	if(letter === "r") return "Búa";
	if(letter === "s") return "Kéo";
	if(letter === "p") return "Bao";
}

function win(userChoice, computerChoice)
{
	const smallUserWorld = "  của bạn".fontsize(3).sup();
	const smallCompWorld = "  của máy".fontsize(3).sup();
	const userChoice_div = document.getElementById(userChoice);
	userScore ++;
	console.log(userScore);
	userScore_span.innerHTML = userScore;
	computerScore_span.innerHTML = computerScore;nữa
	result_p.innerHTML = `${convertToWord(userChoice)}${smallUserWorld}  ăn  ${convertToWord(computerChoice)}${smallCompWorld}! Bạn hay quá zậy =]]`;
	userChoice_div.classList.add('green-glow');
	setTimeout(function() {userChoice_div.classList.remove('green-glow')},600);
	
}
function lose(userChoice, computerChoice)
{
	const smallUserWorld = "  của bạn".fontsize(3).sup();
	const smallCompWorld = "  của máy".fontsize(3).sup();
	const userChoice_div = document.getElementById(userChoice);
	computerScore ++;
	console.log(userScore);
	userScore_span.innerHTML = userScore;
	computerScore_span.innerHTML = computerScore;
	result_p.innerHTML = `${convertToWord(userChoice)}${smallUserWorld}  bị  ${convertToWord(computerChoice)}${smallCompWorld} quật chết tươi Ộ v Ộ`;
	userChoice_div.classList.add('red-glow');
	setTimeout(() => userChoice_div.classList.remove('red-glow'),600);
}
function draw(userChoice,computerChoice)
{
	const userChoice_div = document.getElementById(userChoice);
	result_p.innerHTML = `Hoà rồi á, vui hôn!`;
	userChoice_div.classList.add('gray-glow');
	setTimeout(() => userChoice_div.classList.remove('gray-glow'),600);
}
function game(userChoice){
	const computerChoice = getComputerChoice();
	switch (userChoice + computerChoice){
		case "rs":
		case "pr":
		case "sp":
			win(userChoice, computerChoice);
			break;
		case "rp":
		case "ps":
		case "sr":
			lose(userChoice, computerChoice);
			break;
		case "rr":
		case "ps":
		case "ss":
			draw(userChoice, computerChoice);
			break;
	}
}


function main (){
	rock_div.addEventListener('click', function(){
		game("r");
	})
	paper_div.addEventListener('click', function(){
		game("p");
	})
	scissors_div.addEventListener('click', function(){
		game("s");
	})
}

main();