/* eslint-disable no-console */
let userScore = 0;
let computerScore = 0;
const userScore_span = document.getElementById("user-score");
const computerScore_span = document.getElementById("computer-score");
const scoreBoard_div = document.querySelector("score-board");
const result_div = document.querySelector(".Results > p");
const rock_div = document.getElementById("r");
const paper_div = document.getElementById("p");
const scissors_div = document.getElementById("s");


function getComputerChoice(){
	const choices = ['r','p','s'];
	const randomNumber = Math.floor(Math.random()*3);
	return choices[randomNumber];
}
//console.log(getComputerChoice());
function convert(letter){
	if(letter==="r") 
	{return "Rock";}
	if(letter==="p") 
	{return "Paper";}
	return "Scissors";
}

function win(user, comp)
{	userScore++; userScore_span.innerHTML = userScore;
 const smallUser = "User".fontsize(3).sup();
 const smallComp = "Computer".fontsize(3).sup();
 result_div.innerHTML = convert(user)+" "+smallUser+" Beats "+convert(comp)+" "+smallComp+". You WIN. 🔥" ;
 document.getElementById(user).classList.add('green-glow');
 setTimeout( () => document.getElementById(user).classList.remove('green-glow'), 300);
}
function lose(user, comp)
{
	computerScore++; computerScore_span.innerHTML = computerScore;
 const smallUser = "User".fontsize(3).sup();
 const smallComp = "Computer".fontsize(3).sup();
 result_div.innerHTML = convert(comp)+" "+smallComp+" Beats "+convert(user)+" "+smallUser+". You LOSE. 🤦" ;
	document.getElementById(user).classList.add('red-glow');
	setTimeout(function(){document.getElementById(user).classList.remove('red-glow');}, 300);
}
function draw(user, comp)
{
	result_div.innerHTML = convert(comp) + " Draws With " + convert(user) + ". It's DRAW";
	document.getElementById(user).classList.add('grey-glow');
	setTimeout( () => document.getElementById(user).classList.remove('grey-glow'), 300);
}
function game(userChoice)
{
	const computerChoice = getComputerChoice();
	switch(userChoice+computerChoice)
	{
			case 'rs': 
			case 'pr':
			case 'sp': 
				win(userChoice, computerChoice); break;
			case 'rp':
			case 'ps':
			case 'sr': 
				lose(userChoice, computerChoice); break;
			default  : draw(userChoice, computerChoice);
	}
}
function main(){
  rock_div.addEventListener('click', () => game("r"))

  paper_div.addEventListener('click', () => game("p"))

  scissors_div.addEventListener('click', () => game("s") )

}
main();


/* eslint-enable no-console */