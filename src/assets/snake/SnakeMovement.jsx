

export function SnakeMovement(snakePos, snakeAttributes, ctx) {
    window.addEventListener("keydown", e => checkDirection(e, snakeAttributes)); // if key is pressed, check direction
    move(snakePos, snakeAttributes); // snakePos obj gets updated
    let newSnake = new Snake(snakePos, snakeAttributes);
    newSnake.draw(ctx, snakeAttributes);
    
}

class Snake {
    constructor(pos, snakeAttributes) {
        this.pos = pos; // obj with x,y coordinates of each body part
        this.isDead = snakeAttributes.isDead;
    }
    // draw is a property that is a function that draws
    draw(ctx, snakeAttributes) { 
        ctx.fillStyle = this.isDead ? snakeAttributes.colors[1] : snakeAttributes.colors[0]; // colors: ["green", "red"]
        ctx.strokeStyle = "black";
        for (let i = 0; i < this.pos.length; i++) {
            ctx.fillRect(this.pos[i].x, this.pos[i].y, snakeAttributes.w, snakeAttributes.h); // x, y, w, h
            ctx.strokeRect(this.pos[i].x, this.pos[i].y, snakeAttributes.w, snakeAttributes.h); // x, y, w, h
        }
    }
}

function move (startPos, snakeAttributes) {
    let newHead = {x: startPos[0].x, y: startPos[0].y}; // curent head position that we will adjust
    newHead.x += snakeAttributes.speed;
    startPos.unshift(newHead);
    startPos.pop();
    for (let i = 1; i < startPos.length; i++) {
        startPos[i].x = startPos[i].x - snakeAttributes.w + snakeAttributes.speed;
    }
}

function checkDirection(e, snakeAttributes) {
    if (e.key === "w" && snakeAttributes) {
        console.log(e.key);
        } else if (e.key === "s") {
        console.log(e.key);
        } else if (e.key === "a") {
        console.log(e.key);
        } else if (e.key === "d") {
        console.log(e.key);
        }
}