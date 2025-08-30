function changeTheme() {
    document.body.classList.toggle("dark-theme");
}

function showText() {
    document.getElementById("popup").classList.toggle("show-text");
}

function playSound() {
    let sound = new Audio("sound.mp3");
    sound.play()
}