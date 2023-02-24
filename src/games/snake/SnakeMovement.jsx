

export function SnakeMovement(snakePos, snakeAttributes, ctx) {
    window.addEventListener("keydown", e => checkDirection(e, snakeAttributes)); // if key is pressed, check direction
    let newSnake = new Snake(snakePos, snakeAttributes);
    newSnake.move();
    newSnake.draw(ctx);
    
}

class Snake {
    constructor(pos, snakeAttributes) {
        this.pos = pos; // obj with x,y coordinates of each body part
        this.attributes = snakeAttributes;
        this.isDead = snakeAttributes.isDead;
    }
    // draw is a property that is a function that draws
    draw(ctx) { 
        ctx.fillStyle = this.isDead ? this.attributes.colors[1] : this.attributes.colors[0]; // colors: ["green", "red"]
        ctx.strokeStyle = "black";
        for (let i = 0; i < this.pos.length; i++) {
            ctx.fillRect(this.pos[i].x, this.pos[i].y, this.attributes.w, this.attributes.h); // x, y, w, h
            ctx.strokeRect(this.pos[i].x, this.pos[i].y, this.attributes.w, this.attributes.h); // x, y, w, h
        }
    }
    move() {
        let newHead = {x: this.pos[0].x, y: this.pos[0].y};
        // right:
        if (this.attributes.direction === "right") {
            newHead.x += this.attributes.speed;
        } else if (this.attributes.direction === "left") {
            newHead.x -= this.attributes.speed;
        } else if (this.attributes.direction === "up") {
            newHead.y -= this.attributes.speed;
        } else if (this.attributes.direction === "down") {
            newHead.y += this.attributes.speed;
        }
        this.pos.unshift(newHead);
        this.pos.pop();
    }
}

function checkDirection(e, snakeAttributes) {
    if (e.key === "w" && snakeAttributes.direction !== "down") {
        snakeAttributes.direction = "up"
        // console.log(e.key);
        } else if (e.key === "s" && snakeAttributes.direction !== "up") {
        snakeAttributes.direction = "down"
        // console.log(e.key);
        } else if (e.key === "a" && snakeAttributes.direction !== "right") {
        snakeAttributes.direction = "left"
        // console.log(e.key);
        } else if (e.key === "d" && snakeAttributes.direction !== "left") {
        snakeAttributes.direction = "right"
        // console.log(e.key);
        }
}