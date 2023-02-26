export function CollisionCheck(snakePos, canvas, snakeAttributes) {
    // check for collision with side walls
    const head = snakePos[0];
    if(head.x > canvas.width - snakeAttributes.w) {
        return true;
    } else if (head.x < 0){
        return true;
    } else if (head.y > canvas.height - snakeAttributes.h){
        return true;
    } else if (head.y < 0){
        return true;
    }
    // check for collision with own body
    for (let i = 1; i < snakePos.length; i++) {
        if (snakePos[i].x === head.x && snakePos[i].y === head.y) {
            return true;
        }
    }
    return false;
}

