import data from '../../data';
let {apple} = data; 
// spawns apple at beginning and if it gets eaten

export function AppleControl(snakePos, apple, ctx, canvas, setScore, snakeAttributes) {
    if (apple.x === -1) {
        changeAppleCoordinates(canvas, snakeAttributes, apple, snakePos);
        drawApple(ctx, apple);
    }
    if (snakePos[0].x === apple.x && snakePos[0].y === apple.y) {
        setScore(prevScore => prevScore + 10);
        changeAppleCoordinates(canvas, snakeAttributes, apple, snakePos);
        drawApple(ctx, apple);
    }
    drawApple(ctx,apple);

    function drawApple(ctx, apple) {
        ctx.fillStyle = apple.color;
        ctx.strokeStyle = "black";
        ctx.fillRect(apple.x, apple.y, apple.w, apple.h); // x, y, w, h
        ctx.strokeRect(apple.x, apple.y, apple.w, apple.h); // x, y, w, h
    }

    function changeAppleCoordinates(canvas, snakeAttributes, apple) {
        let snakeAppleSameCordsOrFirstCall = true; 
        while (snakeAppleSameCordsOrFirstCall) {
            // if snake width is 20, x of apple can only be 20, 40, 60 etc.
            const x = Math.floor(Math.random() * (canvas.width - snakeAttributes.w) / snakeAttributes.w) * snakeAttributes.w;
            const y = Math.floor(Math.random() * (canvas.height - snakeAttributes.h) / snakeAttributes.h) * snakeAttributes.h;
            apple.x = x;
            apple.y = y;
            // scan entire body o the snake to ensure no part of the body overlaps with new apple
            for (let i = 0; i < snakePos.length; i++) {
                snakeAppleSameCordsOrFirstCall = false;
                if (snakePos[i].x === apple.x && snakePos[i].y === apple.y) {
                    snakeAppleSameCordsOrFirstCall = true;
                    break;
                }
            }
        }
    }
    
    
    
}
