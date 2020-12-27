
const canvas = document.getElementById("gameArea");
const ctx = canvas.getContext("2d");

let charX = 55;
let charY = 545;
let minionX = 650;
let minionY = 585;

let radius = 50;

function drawGame() {
    requestAnimationFrame(drawGame)
    clearScreen();
    moveMinionsSlowly();
    checkBroundry()
    inputs();
    drawMinion()
    drawBlob();
}

function drawBlob() {
    ctx.fillStyle = "rgba(255, 255, 255, 1)";
    ctx.beginPath();
    ctx.arc(charX, charY, radius, 0, Math.PI * 2);
    ctx.fill()
}

function drawMinion() {
    ctx.fillStyle = "rgba(255, 87, 51, 1)";
    ctx.beginPath();
    ctx.arc(minionX, minionY, radius * .25, 0, Math.PI * 2);
    ctx.fill()
}

function clearScreen() {
    ctx.fillStyle = "rgba(0, 0, 0, .95";
    ctx.fillRect(0, 0, canvas.width, canvas.height);
}



drawGame()