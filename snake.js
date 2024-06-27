const area = document.getElementById("area");
const body = document.getElementById("snake-body");

let point = 0;
const scale = 20;
const areaWidth = 30;
const areaHeight = 25;
let positionX = 6;
let positionY = 6;
const foodat = document.getElementById("food");
let direction = "right";
let speed = 100;
let reverseSpeed = 5;
const backbutton = () =>{
    body.style.display = "none";
    area.style.display = "none";
    document.getElementById("basic").style.display = "block";
    document.getElementById("basic").style.display = "flex";
}
const start = () => {
    body.style.display = "block";
    area.style.display = "block";
    document.getElementById("basic").style.display = "none";
    setInterval(gameloop, speed - reverseSpeed);
};
const lvl1 = () => {
    reverseSpeed = 7;

    start();

};
const lvl2 = () => {
    reverseSpeed = 10;
    setInterval(gameloop, speed - reverseSpeed);
    start();
};
const lvl3 = () => {
    reverseSpeed = 15;
    setInterval(gameloop, speed - reverseSpeed);
    start();
};
let bodyCoordinates = [
    { x: 5, y: 5 },
    { x: 6, y: 5 },
    { x: 7, y: 5 },
    { x: 8, y: 5 },
];
const food = {
    x: 5,
    y: 5,
};
const goRight = () => {
    positionX += 1;
    if (positionX > areaWidth - 1) {
        positionX = 0;
    }
};
const eatFood = () => {
    render();
};
const generateFood = () => {
    food.x = Math.floor(Math.random() * scale);
    food.y = Math.floor(Math.random() * scale);
    foodat.style.left = `${food.x * scale}px`;
    foodat.style.top = `${food.y * scale}px`;
}
const render = () => {
    let bodyHtml = "";

    if (food.x == positionX && food.y == positionY) {
        bodyCoordinates.unshift(bodyCoordinates[0]);
        point += 5;
        generateFood();
    
        document.getElementById("score").innerText = point;
    }

    for (let i = 0; i < bodyCoordinates.length; i++) {
        bodyHtml += `<div class="snake-core" style="top:${bodyCoordinates[i].y * scale
            }px;left:${bodyCoordinates[i].x * scale}px"></div>`;
    }
    body.innerHTML = bodyHtml;

    foodat.style.left = `${food.x * scale}px`;
    foodat.style.top = `${food.y * scale}px`;
};

const goLeft = () => {
    positionX -= 1;
    if (positionX < 0) {
        positionX = areaWidth - 1;
    }
};
const goUp = () => {
    positionY -= 1;
    if (positionY < 0) {
        positionY = areaHeight - 1;
    }
};
const goDown = () => {
    positionY += 1;
    if (positionY > areaHeight - 1) {
        positionY = 0;
    }
};

const resetGame = () => {
    area.style.width = `${areaWidth * scale}px`;
    area.style.height = `${areaHeight * scale}px`;



    generateFood();

};
const changeDirection = (value) => {
    if (direction == "up" || direction == "down") {
        if (value == "left" || value == "right") {
            direction = value;
        }
    } else if (direction == "right" || direction == "left") {
        if (value == "up" || value == "down") {
            direction = value;
        }
    }
};
const handleKeyDown = (event) => {
    switch (event.key) {
        case "w":
        case "ArrowUp":
            changeDirection("up");
            break;
        case "a":
        case "ArrowLeft":
            changeDirection("left");
            break;
        case "s":
        case "ArrowDown":
            changeDirection("down");
            break;
        case "d":
        case "ArrowRight":
            changeDirection("right");
            break;
    }
};
const gameloop = () => {
    switch (direction) {
        case "up":
            goUp();
            break;
        case "down":
            goDown();
            break;
        case "right":
            goRight();
            break;
        case "left":
            goLeft();
            break;
    }
    gameOver();

    bodyCoordinates.shift();
    bodyCoordinates.push({ x: positionX, y: positionY });

    render();
};

const gameOver = () => {
    for (let i = 0; i < bodyCoordinates.length; i++) {
        if (positionX == bodyCoordinates[i].x && positionY == bodyCoordinates[i].y) {
            alert("Game Over");
            bodyCoordinates = [
                { x: 5, y: 5 },
                { x: 6, y: 5 },
                { x: 7, y: 5 },
                { x: 8, y: 5 },
            ];
            positionX = 6;
            positionY = 6;
            point = 0;
            document.getElementById("score").innerText = point
            break;
        }

    }
}

resetGame();