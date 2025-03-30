let timeLeft = 30;
let timeInterval;
let heading = document.getElementById("rightNumber");

function startGame(){
    clearInterval(timeInterval);
    timeLeft = 30;
    document.getElementById('timer').textContent = timeLeft;
    timeInterval = setInterval(()=>{
        timeLeft--;
        document.getElementById('timer').textContent = timeLeft;

        if(timeLeft === 0){
           clearInterval(timeInterval);
           const gameOverModal = new bootstrap.Modal(document.getElementById('gameOverModal'));
           gameOverModal.show();
           document.getElementById("TimerMessage").innerHTML = `Time's Up!⌛ The number was ${heading.textContent}.`;
        }
    }, 1000);
}
startGame();

function randomNum(){
    document.querySelector("#rightNumber").innerHTML = Math.floor(Math.random() * 15) + 1;
}
randomNum();

document.getElementById("submit").addEventListener("click", function() {
        
    if(document.querySelector('#inputNumber').value == heading.textContent){
        clearInterval(timeInterval);
        const successModal = new bootstrap.Modal(document.getElementById('successModal'));
        successModal.show();
        document.getElementById('message').innerHTML = `The right number is ${heading.textContent}, you predict it!🍾`;
        document.querySelector("#rightNumber").style.visibility = "visible";
        document.querySelector('#inputNumber').value = "";

    }else if(document.querySelector('#inputNumber').value == ""){
        const emptyModal = new bootstrap.Modal(document.getElementById('emptyModal'));
        emptyModal.show();

    } else {
        const failureModal = new bootstrap.Modal(document.getElementById('failureModal'));
        failureModal.show();

       let attempts = document.getElementById("attempts");
        attempts.textContent = parseInt(attempts.textContent) - 1;

        if(attempts.textContent <= 0){
            clearInterval(timeInterval);
           const gameOverModal = new bootstrap.Modal(document.getElementById('gameOverModal'));
           gameOverModal.show();
           document.querySelector('#gameOverMessage').innerHTML = `You lose, The number was ${heading.textContent}.`;
        }

    }
});