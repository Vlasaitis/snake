import { Snake } from './Snake';

export function SnakeMovement(snakePos, snakeAttributes, ctx, canvas, apple) {
    // window.addEventListener("keydown", e => checkDirection(e, snakeAttributes)); // if key is pressed, check direction
    window.addEventListener("keydown", e => checkDirection(e, snakeAttributes)); // if key is pressed, check direction
    window.addEventListener("keyup", () => snakeAttributes.canMove = true); // reset flag when key is released
    
    let newSnake = new Snake(snakePos, snakeAttributes, canvas);
    let gameOver = newSnake.move(apple);
    if (gameOver) {
        return true;
    } else {
        newSnake.draw(ctx);
        snakeAttributes.canMove = true;
        // newSnake.draw(ctx);
        return false;
    }
    // if (!newSnake.isDead) {
    //     newSnake.draw(ctx);
    // } else {
    //     newSnake.draw(ctx);
    // }
}

function checkDirection(e, snakeAttributes) {
    if (snakeAttributes.canMove) {
        if (e.key === "w" && snakeAttributes.direction !== "down" && snakeAttributes.direction !== "up") {
            snakeAttributes.direction = "up"
            } else if (e.key === "s" && snakeAttributes.direction !== "up" && snakeAttributes.direction !== "down") {
            snakeAttributes.direction = "down"
            } else if (e.key === "a" && snakeAttributes.direction !== "right" && snakeAttributes.direction !== "left") {
            snakeAttributes.direction = "left"
            } else if (e.key === "d" && snakeAttributes.direction !== "left" && snakeAttributes.direction !== "right") {
            snakeAttributes.direction = "right"
            }
    }
    snakeAttributes.canMove = false;
    
}