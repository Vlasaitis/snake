import { CollisionCheck} from './CollisionCheck';

export class Snake {
    constructor(pos, snakeAttributes, canvas) {
        this.pos = pos; // obj with x,y coordinates of each body part
        this.attributes = snakeAttributes;
        this.isDead = snakeAttributes.isDead;
        this.canvas = canvas;
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
        if (CollisionCheck(newHead, this.attributes, this.canvas)) {
            this.isDead= true;
        } else {
            this.pos.unshift(newHead);
            this.pos.pop();
        }    
    }
}