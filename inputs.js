document.body.addEventListener("keydown", keyDown)
document.body.addEventListener("keyup", keyUp)

let downPressed = false
let upPressed = false
let leftPressed = false
let rightPressed = false
let spacePressed = false

function inputs() {
    // if (downPressed) {
    //     y = y + 10
    // }
    // if (upPressed) {
    //     y = y - 10
    // }
    if (leftPressed) {
        charX = charX - 10
    }
    if (rightPressed) {
        charX = charX + 10
    }

    // JUMP
    if (spacePressed) {
        console.log("JUMP!")
        charY = charY - 10
        setTimeout(() => charY = charY + 10, 100)
    }
}

function keyDown(event) {
    console.log(event.keyCode)
    // DOWN
    if (event.keyCode === 83) {
        downPressed = true
    }
    // UP
    if (event.keyCode === 87) {
        upPressed = true
    }
    // LEFT
    if (event.keyCode === 65) {
        leftPressed = true
    }
    // RIGHT
    if (event.keyCode === 68) {
        rightPressed = true
    }
    // SPACE / JUMP
    if (event.keyCode === 32) {
        spacePressed = true
    }
}

function keyUp(event) {
    // DOWN
    if (event.keyCode === 83) {
        downPressed = false
    }
    // UP
    if (event.keyCode === 87) {
        upPressed = false
    }
    // LEFT
    if (event.keyCode === 65) {
        leftPressed = false
    }
    // RIGHT
    if (event.keyCode === 68) {
        rightPressed = false
    }
    // SPACE / JUMP
    if (event.keyCode === 32) {
        spacePressed = false
    }
}