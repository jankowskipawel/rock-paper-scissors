let roundResultText = document.querySelector(".roundResult");
let gameResultText = document.querySelector(".gameResult");
let roundNumberText = document.querySelector(".roundNr");
let playerChoice = document.querySelector(".playerChoice");
let computerChoice = document.querySelector(".computerChoice");
let playerScoreText = document.querySelector(".playerScore");
let computerScoreText = document.querySelector(".computerScore");

let btnNewGame = document.querySelector('#newGame');
let btnRock = document.querySelector('#rock');
let btnPaper = document.querySelector('#paper');
let btnScissors = document.querySelector('#scissors');

let roundNr = 1;
let playerScore = 0;
let computerScore = 0;

btnNewGame.addEventListener('click', newGame);
btnRock.addEventListener('click', function (){game('rock')});
btnPaper.addEventListener('click', function (){game('paper')});
btnScissors.addEventListener('click', function (){game('scissors')});

function computerPlay()
    {
        let choices = ['Rock', 'Paper', 'Scissors']
        let randomChoice = [Math.floor(Math.random() * choices.length)];
        return choices[randomChoice];
    }

function playRound(playerSelection, computerSelection)
{
    computerSelection = computerSelection.toLowerCase();
    if(playerSelection===computerSelection)
    {
        return 'Draw.';
    }

    if(playerSelection==='rock')
    {
        switch(computerSelection)
        {
            case 'paper':
                 return 'You lose. Paper beats rock.';

            case 'scissors':
                return 'You win! Rock beats scissors.';
        }
    }

    if (playerSelection==='paper')
    {
        switch(computerSelection)
        {
            case 'rock':
                return 'You win! Paper beats rock.';
                
            case 'scissors':
                return 'You lose. Scissors beats paper.';
        }
    }

    if (playerSelection==='scissors')
    {
        switch(computerSelection)
        {
            case 'rock':
                return 'You lose. Rock beats scissors.';
            
            case 'paper':
                return 'You win! Scissors beats paper.';
        }
    }
}

function game(playerSelection)
{
    let computerSelection = computerPlay();
    // playerSelection = e.target.textContent.toLowerCase();

    let roundResult = playRound(playerSelection, computerSelection)

    
    if(roundNr<6)
    {
        playerChoice.textContent = 'You choose: ' + capitalizeFirstLetter(playerSelection);
        computerChoice.textContent = 'Computer choose: '+ computerSelection;
        roundResultText.textContent= roundResult;

        if(roundResult.slice(4,5)==='l')
        {
            ++computerScore;
        }
        else if(roundResult.slice(4,5)==='w')
        {
            ++playerScore;
        }

        roundNr.textContent = 'Round number: '+ roundNr;
        playerScoreText.textContent ='Your Score: ' + playerScore;
        computerScoreText.textContent = 'Computer score: ' + computerScore;
        roundNumberText.textContent = 'Round ' +roundNr;
        roundNr++;

        if(playerScore>computerScore && roundNr===6)
        {
            gameResultText.textContent = 'Game ended. Result: You win!';
            gameResultText.style.cssText = 'color: green';
        }
        else if(playerScore===computerScore && roundNr===6)
        {
            gameResultText.textContent = 'Game ended. Result: Draw.';
            gameResultText.style.cssText = 'color: white';

        }
        else if (roundNr===6)
        {
            gameResultText.textContent = 'Game ended. Result: You lost :(';
            gameResultText.style.cssText = 'color: red';

        }
    }
}

function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}

function newGame()
{
    roundNr = 1;
    playerScore = 0;
    computerScore = 0;
    roundNumberText.textContent = 'Round -';
    playerScoreText.textContent ='Your Score: ';
    computerScoreText.textContent = 'Computer score: ';
    playerChoice.textContent = 'You choose: ';
    computerChoice.textContent = 'Computer choose: ';
    roundResultText.textContent = '-';
    gameResultText.textContent = '-'
    gameResultText.style.cssText = 'color: black';
}
