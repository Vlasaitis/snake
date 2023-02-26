
export function EndScreen(canvas, ctx, setScore, gameOverRef, score, snakePos, snakeAttributes, apple) {
    ctx.fillStyle = '#066481';
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    ctx.font = '20px Arial'
    ctx.fillStyle = 'white';
    ctx.fillText(`Game Over!`, canvas.width/2 - 80, canvas.height/2);
    ctx.fillText(`Your score: ${score > 0 ? score : 0}`, canvas.width/2 - 80, canvas.height/2 + 30);
    ctx.fillText(`Mouse click to go again.`, canvas.width/2 - 80, canvas.height/2 + 60);
    const handleClick = () => {
        canvas.removeEventListener('click', handleClick);
        setScore(0);
        resetValues(snakePos, snakeAttributes, apple);
        gameOverRef.current = false;
        return true;
      };
    // reset all values for new game
    
    canvas.addEventListener('click', handleClick);
    
}
function resetValues(snakePos, snakeAttributes, apple) {
    const headStart = {x: 200, y: 200};
    const snakeHeight = 20, snakeWeight = 20; 
    snakePos.splice(0, snakePos.length);

    snakePos.push({x: headStart.x, y: headStart.y});
    snakePos.push({x: headStart.x-snakeWeight, y: headStart.y});
    snakePos.push({x: headStart.x-snakeWeight*2, y: headStart.y});
    snakePos.push({x: headStart.x-snakeWeight*3, y: headStart.y});
    snakePos.push({x: headStart.x-snakeWeight*4, y: headStart.y});
    
    snakeAttributes.speed = snakeHeight;
    snakeAttributes.h = snakeHeight;
    snakeAttributes.w = snakeWeight;
    snakeAttributes.colors = ["green", "red"];
    snakeAttributes.isDead = false;
    snakeAttributes.direction = "right";

    apple.x = -1;
    apple.y = -1;
}
