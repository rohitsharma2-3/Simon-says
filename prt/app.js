let userSeq = [];
let gameSeq = [];

let level = 0;
let started = false

let colors = ['red', 'yellow', 'sky', 'blue']
let h2 = document.querySelector('h2')

document.addEventListener('keypress', () => {
    if(started == false) {
        started = true
        levelUp()
    }
})

function levelUp() {
    userSeq = []
    level++
    h2.innerText = `Level ${level}`

    let ranNumber = Math.floor(Math.random() * colors.length)
    let ranIdx = colors[ranNumber]
    let btn = document.querySelector(`.${ranIdx}`)
    
    gameSeq.push(ranIdx)
    console.log(gameSeq)

    gameFlash(btn)
}

function gameFlash(btn) {
    btn.classList.add('game')
    setTimeout(() => {
        btn.classList.remove('game')
    }, 250);
}

let btn = document.querySelectorAll('.btn')
for(let btns of btn) {
    btns.addEventListener('click', pressBtn)
}

function pressBtn() {
    let btn = this
    userFlash(btn)
     
    let userBtn = btn.getAttribute('id');
    userSeq.push(userBtn)

    checkAns(userSeq.length - 1)
}

function userFlash(btn) {
    btn.classList.add('user')
    setTimeout(() => {
        btn.classList.remove('user')
    }, 250);
}

function checkAns(idx) {
    if(userSeq[idx] == gameSeq[idx]) {
        if(userSeq.length == gameSeq.length) {
            setTimeout(levelUp , 1000);
        }
    } else {
        h2.innerHTML = `Game Over! your Score is ${level} <br> Press any Key to start the game `
        document.querySelector('body').classList.add('red')
        setTimeout(() => {
            document.querySelector('body').classList.remove('red')
        }, 200);
        reset()
    }
}

function reset() {
    level = 0;
    started = false
    userSeq = []
    gameSeq = []    
}

