//Detecting button pressed
const buttons = document.querySelectorAll('.drum');
buttons.forEach(button => {
    button.addEventListener('click', (e) => {
        const buttonInnerHTML = e.target.innerHTML;
        makeSound(buttonInnerHTML);
        buttonAnimation(buttonInnerHTML);
    })
})

//Detecting keybord presed
addEventListener('keydown', (event) => {
    makeSound(event.key);
    buttonAnimation(event.key);
})


//Produce sound based on argument passed
function makeSound (key) {
    switch (key) {
        case 'w':
            let tom1 = new Audio('sounds/tom-1.mp3');
            tom1.play();
            break;
        case 'a':
            let tom2 = new Audio('sounds/tom-2.mp3');
            tom2.play();
            break;
        case 's':
            let tom3 = new Audio('sounds/tom-3.mp3');
            tom3.play();
            break;
        case 'd':
            let tom4 = new Audio('sounds/tom-4.mp3');
            tom4.play();
            break;
        case 'j':
            let snare = new Audio('sounds/snare.mp3');
            snare.play();
            break;
        case 'k':
            let crash = new Audio('sounds/crash.mp3');
            crash.play();
            break;
        case 'l':
            let kick = new Audio('sounds/kick-bass.mp3');
            kick.play();
            break;
        default: console.log(letter);
            break;
    }
}

function buttonAnimation(key) {
    const pressedButton = document.querySelector(`.${key}`);
    pressedButton.classList.add('pressed');
    setTimeout(() => {
        pressedButton.classList.remove('pressed');
    }, 100);
}