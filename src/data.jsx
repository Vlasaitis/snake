const headStart = {x: 200, y: 200};
const snakeHeight = 20, snakeWeight = 20; 

export default {
    snakePos: [
        {x: headStart.x, y: headStart.y}, // start head
        {x: headStart.x-snakeWeight, y: headStart.y}, // start body
        {x: headStart.x-snakeWeight*2, y: headStart.y}, // start tail
        {x: headStart.x-snakeWeight*3, y: headStart.y}, // start tail
        {x: headStart.x-snakeWeight*4, y: headStart.y}, // start tail
    ],
    snakeAttributes: {
        speed: snakeHeight,
        h: snakeHeight,
        w: snakeWeight,
        colors: ["green", "red"],
        isDead: false,
        direction: "right",
        canMove: true,
    },
    apple: {
        x: -1,
        y: -1,
        w: snakeWeight,
        h: snakeHeight,
        color: "orange",
    },
    FPS: 15, // how many times per second screen will refresh
};