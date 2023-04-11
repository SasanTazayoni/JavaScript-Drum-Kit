function playSound(e) {
    const audio = document.querySelector(`audio[data-code="${e.code}"]`);
    const key = document.querySelector(`.key[data-code="${e.code}"]`);
    if (!audio) return;
    console.log(key)
    audio.currentTime = 0;
    audio.play();
    key.classList.add('playing');
}

window.addEventListener('keydown', playSound);

function removeTransition(e) {
    if (e.propertyName !== 'transform') return;
    this.classList.remove('playing');
}

const keys = document.querySelectorAll('.key');
keys.forEach(key => key.addEventListener('transitionend', removeTransition));

window.addEventListener('keydown', playSound);