const head = document.getElementById("snake-head");
const area = document.getElementById("area");
const scale = 20;
const areaWidth = 30;
const areaHeight = 25;
let positionX = 5;
let positionY = 5;
let direction = "up";
let speed = 400;
function goRight() {
    positionX += 1;
    if (positionX > areaWidth - 1) {
        positionX = 0;
    }


}
function render() {

    head.style.left = `${positionX * scale}px`
    head.style.top = `${positionY * scale}px`

}
function goLeft() {
    positionX -= 1;
    if (positionX < 0) {
        positionX = areaWidth - 1;
    }

}
function goUp() {
    positionY -= 1;
    if (positionY < 0) {
        positionY = areaHeight - 1;
    }

}
function goDown() {
    positionY += 1;
    if (positionY > areaHeight - 1) {
        positionY = 0;
    }

}

function resetGame() {
    area.style.width = `${areaWidth * scale}px`
    area.style.height = `${areaHeight * scale}px`
    head.style.display = "block";
    render();
}
function changeDirection(value) {
    if (direction == 'up' || direction == 'down') {
        if (value == 'left' || value == 'right') {
            direction = value;
        }
    } else if (direction == 'right' || direction == 'left') {
        if (value == 'up' || value == 'down') {
            direction = value;
        }
    }
}
function handleKeyDown(event) {
    switch (event.key) {
        case 'w':
        case 'ArrowUp':
            changeDirection("up");
            break;
        case 'a':
        case 'ArrowLeft':
            changeDirection('left');
            break;
        case 's':
        case 'ArrowDown':
            changeDirection('down');
            break;
        case 'd':
        case 'ArrowRight':
            changeDirection('right');
            break;
    }
}
function gameloop() {
    switch (direction) {
        case 'up': goUp();
            break;
        case 'down': goDown();
            break;
        case 'right': goRight();
            break;
        case 'left': goLeft();
        break;
    }
    render();
}
resetGame();


setInterval(gameloop, speed);
