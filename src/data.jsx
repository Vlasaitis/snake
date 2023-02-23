const headStart = {x: 200, y: 200};
const snakeHeight = 30, snakeWeight = 30;

export default {
    snakePos: [
        {x: headStart.x, y: headStart.y}, // start head
        {x: headStart.x-snakeWeight, y: headStart.y}, // start body
        {x: headStart.x-snakeWeight*2, y: headStart.y}, // start tail
    ],
    snakeAttributes: {
        speed: 30,
        h: snakeHeight,
        w: snakeWeight,
        colors: ["green", "red"],
        isDead: false,
        direction: "right",
    },
    apple: {
        x: 0.5,
        y: 50,
        width: 800/ 10 - 1,
        height: 20,
        density: 2,
        colors: ["blue", "lightblue"],
    },
    FPS: 1, // how many times per second screen will refresh
};