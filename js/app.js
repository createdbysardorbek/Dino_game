const dino = document.querySelector('.dino');
const cactus = document.querySelector('.cactus');

function jump() {
    if (dispatchEvent.classList != 'jump') {
        dino.classList.add('jump');
        setTimeout(() => {
            dino.classList.remove('jump');
        }, 500)
    }
}

let checkAlive = setInterval(() => {
    let dinoTop = parseInt(window.getComputedStyle(dino).getPropertyValue('top'));
    let cactusLeft = parseInt(window.getComputedStyle(cactus).getPropertyValue('left'));

    if (cactusLeft > 0 && cactusLeft < 70 && dinoTop >= 130) {
        dino.style.animationPlayState = 'paused';
        cactus.style.animationPlayState = 'paused';
        alert('Ooops, you lost!');
        window.location.reload();
    }
}, 10);

document.addEventListener('keydown', function() { jump() })