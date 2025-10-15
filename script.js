
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

function frameWidget() {
    var t=document.getElementsByTagName("script");
    (t=(t=t[t.length-1]).parentNode).style.textAlign="right";
    var e=t.getElementsByTagName("a")[0],i=e.getAttribute("data-weight"),n=e.getAttribute("data-height"),
    a=e.href,r=a.lastIndexOf("/"),g=a.lastIndexOf("/",r-1),s=a.substring(r+1,a.length);a=a.substring(0,g),
    (e=e.style).fontFamily="'Open Sans', sans-serif",e.fontSize="12px",e.color="black",e.paddingRight="10px",
    e.paddingTop="5px",e.paddingBottom="10px",e.textDecoration="none";
    var d=document.createElement("iframe");
    d.src=a+"/widgets/"+s+".php",d.style.borderWidth=0,d.style.width=i,d.style.height=n,d.style.display="block",d.style.margin="0 auto",t.insertBefore(d,t.firstChild)
}frameWidget();