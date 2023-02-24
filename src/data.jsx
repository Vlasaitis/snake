const headStart = {x: 200, y: 200};
const snakeHeight = 20, snakeWeight = 20;

export default {
    snakePos: [
        {x: headStart.x, y: headStart.y}, // start head
        {x: headStart.x-snakeWeight, y: headStart.y}, // start body
        {x: headStart.x-snakeWeight*2, y: headStart.y}, // start tail
    ],
    snakeAttributes: {
        speed: snakeHeight,
        h: snakeHeight,
        w: snakeWeight,
        colors: ["green", "red"],
        isDead: false,
        direction: "right",
    },
    apple: {
        w: snakeWeight,
        h: snakeHeight,
        color: "orange",
    },
    FPS: 10, // how many times per second screen will refresh
};