export function CollisionCheck(snakePos, snakeAttributes, canvas) {
    // console.log(snakePos.x);
    // console.log(snakePos.y);
    if(snakePos.x >= canvas.width) {
        return true;
    } else if (snakePos.x < 0){
        return true;
    } else if (snakePos.y >= canvas.height){
        return true;
    } else if (snakePos.y < 0){
        return true;
    }
    return false;
}

