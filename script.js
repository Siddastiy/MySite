
function showText() {
    document.getElementById("popup").classList.toggle("show-text");
}

function playSound() {
    let sound = new Audio("sound.mp3");
    sound.play()
}

document.addEventListener("DOMContentLoaded", function() {
    const startDate = new Date(new Date().getFullYear(), 9, 15, 20, 0);
    const endDate = new Date(new Date().getFullYear(), 9, 15, 21, 0);
    const today = new Date();

    if (today >= startDate && today <= endDate) {
        createSnowflakes();
    }
});

function createSnowflakes() {
    const snowContainer = document.getElementById('snow-container');
    const snowflakeCount = 50;
    const snowflakeCharacters = ['❄', '❅', '❆', '•'];

    for (let i = 0; i < snowflakeCount; i++) {
        const snowflake = document.createElement('span');
        snowflake.classList.add('snowflake');

        snowflake.textContent = snowflakeCharacters[Math.floor(Math.random() * snowflakeCharacters.length)];
        snowflake.style.left = `${Math.random() * 100}%`;
        snowflake.style.fontSize = `${Math.random() * 1.5 + 0.8}rem`;
        snowflake.style.animationDuration = `${Math.random() * 10 + 5}s`;
        snowflake.style.animationDelay = `${Math.random() * 5}s`;

        snowContainer.appendChild(snowflake);
    }
}