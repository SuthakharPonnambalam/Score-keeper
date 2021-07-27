let maxScore = 5;
let isGameOver = false

const p1 = document.querySelector('#p1')
const p1Text = document.querySelector('#playerOne')
let p1Score = 0;
const p2 = document.querySelector('#p2')
const p2Text = document.querySelector('#playerTwo')
let p2Score = 0;
let winScore = document.querySelector('#points')

p1.addEventListener('click', (e) => {
    if (!isGameOver) {
        p1Score += 1;
        if (p1Score === maxScore) {
            isGameOver = true;
            p1Text.classList.add('win')
            p2Text.classList.add('lose')
        }
        p1Text.innerHTML = p1Score;
    }
})

p2.addEventListener('click', (e) => {
    if (!isGameOver) {
        p2Score += 1;
        if (p2Score === maxScore) {
            isGameOver = true;
            p2Text.classList.add('win')
            p1Text.classList.add('lose')
        }
        p2Text.innerHTML = p2Score;
    }
})

winScore.addEventListener('change', function(){
    maxScore = parseInt(this.value);
    resetFunction();
})

const reset = document.querySelector('#reset')
reset.addEventListener('click', resetFunction)

function resetFunction(){
    isGameOver =false
    p1Score = 0;
    p2Score = 0;
    p1Text.innerHTML = '0';
    p2Text.innerHTML = '0';
    p1Text.classList.remove('win')
    p1Text.classList.remove('lose')
    p2Text.classList.remove('win')
    p2Text.classList.remove('lose')
}