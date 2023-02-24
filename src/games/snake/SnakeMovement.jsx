import { Snake } from './Snake';

export function SnakeMovement(snakePos, snakeAttributes, ctx, canvas) {
    window.addEventListener("keydown", e => checkDirection(e, snakeAttributes)); // if key is pressed, check direction
    let newSnake = new Snake(snakePos, snakeAttributes, canvas, ctx);
    newSnake.move();
    if (!newSnake.isDead) {
        newSnake.draw(ctx);
    } else {
        newSnake.draw(ctx);
    }
}

function checkDirection(e, snakeAttributes) {
    if (e.key === "w" && snakeAttributes.direction !== "down") {
        snakeAttributes.direction = "up"
        } else if (e.key === "s" && snakeAttributes.direction !== "up") {
        snakeAttributes.direction = "down"
        } else if (e.key === "a" && snakeAttributes.direction !== "right") {
        snakeAttributes.direction = "left"
        } else if (e.key === "d" && snakeAttributes.direction !== "left") {
        snakeAttributes.direction = "right"
        }
}