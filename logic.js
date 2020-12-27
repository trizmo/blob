function checkBroundry() {
    if (minionX - radius === charX + radius * .25 || minionY - radius === charY + radius * .25) {


        alert("GAME OVER")
        window.location = "/"
    }
}