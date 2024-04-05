function pickComputerMove() {
        const randomNumber = (Math.random());

        let computerMove = '';

        if (randomNumber >= 0 && randomNumber < 1/3) 
        {computerMove='Rock' }

        else if(randomNumber >=0 && randomNumber < 2/3)
        { computerMove='Paper' } 

        else if(randomNumber >=0 && randomNumber <1)
        { computerMove='Scissors' } 

        return computerMove;
}
let isAutoPlaying = false;
let intervalId;
function autoPlay() {
        if(!isAutoPlaying){
                intervalId = setInterval(() => {
                        const playerMove = pickComputerMove();
                        playGame(playerMove);
                },2000);
                isAutoPlaying = true;
                document.querySelector('.auto-play-button').innerHTML = 'Stop play';
        } else {
                clearInterval(intervalId);
                isAutoPlaying = false;
                document.querySelector('.auto-play-button').innerHTML = 'Auto play';
        }
        
}


// document.querySelector('.js-rock-btn').addEventListener('click', () => {
//         playGame('rock')
// });





function playGame(playerMove) {
        const computerMove = ( pickComputerMove())

        let result = ''

        if(playerMove === 'Rock') {
                if (computerMove === 'Rock') {
                        result  =  'Tie'
                } else if (computerMove === 'Paper') {
                        result = 'You lose'
                } else if (computerMove === 'Scissors') {
                        result = 'You win'
                        }
}       
        if (playerMove === 'Paper') {

                result = ''

                if (computerMove === 'Rock') {
                        result  =  'You win'
                } else if (computerMove === 'Paper') {
                        result = 'Tie'
                } else if (computerMove ===  'Scissors') {
                        result = 'You lose'
                }
        }

        if (playerMove === 'Scissors') {

                result = ''

                if (computerMove === 'Rock') {
                        result  =  'You lose'
                } else if (computerMove === 'Paper') {
                        result = 'You win'
                } else if (computerMove === 'Scissors') {
                        result = 'Tie'
                }
        }

        if (result === 'You win') {
                score.wins += 1;
                document.getElementById('js-result-color').style.color = 'rgb(47, 252, 6)'
        } else if (result === 'You lose') {
                score.losses += 1;
                document.getElementById('js-result-color').style.color = 'red'
        } else if (result === 'Tie') {
                score.ties += 1;
                document.getElementById('js-result-color').style.color = 'orange'
        }

        localStorage.setItem('score', JSON.stringify(score));

                document.querySelector('.js-result').innerHTML = result;

                document.querySelector('.js-moves').innerHTML = `You 
                <img class="move-icon" src="${playerMove}-emoji.png" alt="">
                <img class="move-icon" src="${computerMove}-emoji.png" alt="">
                Computer`

                updateScoreElement();
        // alert(`You picked ${playerMove}. computer picked ${computerMove}. ${result} \n Wins: ${score.wins}, Losses: ${score.losses}, Ties: ${score.ties}`);
}


const score = JSON.parse(localStorage.getItem('score'))|| 
{wins:0,
losses:0,
ties:0
};




// if (!score) {
//         score= {
//                 wins:0,
//                 losses:0,
//                 ties:0
//         }
// }

function resetScore() {
        score.wins = 0;
        score.losses = 0;
        score.ties = 0;
        localStorage.removeItem('score')
        updateScoreElement();
};


function updateScoreElement() {
        document.querySelector('.js-score').innerHTML = `Wins:${score.wins} , Losses:${score.losses} , Ties:${score.ties}`
}



document.body.addEventListener('keydown', (event) => {
        if(event.key === 'r'){
                playGame('Rock')
        } else if(event.key === 'p'){
                playGame('Paper')
        } else if(event.key === 's') {
                playGame('Scissors')
        };
})


