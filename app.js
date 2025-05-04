let gameSeq = [];
let userSeq = [];

let start = false;
let level = 0;

let h2 = document.querySelector('h2');
let colors = ['red', 'yellow', 'blue', 'purple'];

document.addEventListener('keypress', () => {
    if (start == false) {
        start = true;
        levelUp();
    };
});

function levelUp() {
    userSeq = []
    level++;
    h2.innerText = `Level ${level}`;

    let randIdx = Math.floor(Math.random() * colors.length);
    let randColor = colors[randIdx];
    let btn = document.querySelector(`.${randColor}`);

    gameSeq.push(randColor);
    console.log(gameSeq);
    gameFlash(btn);
}

function gameFlash(btn) {
    btn.classList.add('game');
    setTimeout(() => {
        btn.classList.remove('game');
    }, 250);
}

function userFlash(btn) {
    btn.classList.add('user');
    setTimeout(() => {
        btn.classList.remove('user');
    }, 250);
}

let btns = document.querySelectorAll('.btn');
for (let btn of btns) {
    btn.addEventListener('click', pressBtn);
}

function pressBtn() {
    let btn = this;
    userFlash(btn);

    let userBtn = btn.getAttribute('id');
    userSeq.push(userBtn);

    checkAns(userSeq.length - 1);
}

function checkAns(idx) {
    if (userSeq[idx] === gameSeq[idx]) {
        if (userSeq.length === gameSeq.length) {
            setTimeout(levelUp, 1000);
        }
    } else {
        h2.innerHTML = `Game Over! Your Score is ${level} <br> Press any key to start`

        document.querySelector('body').classList.add('red')

        setTimeout(() => {
            document.querySelector('body').classList.remove('red')
        }, 150);
        reset()
    }
}

function reset() {
    gameSeq = [];
    userSeq = [];
    start = false;
    level = 0
}