import React, {useEffect, useRef} from 'react'
import data from '../../data'
import { SnakeMovement} from './SnakeMovement';

let {snakePos, snakeAttributes, FPS} = data; 
let now, elapsed;
// Setting FPS
let fpsInterval = 1000 / FPS;
let then = performance.now();


export default function Board() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const render = () => {
      const canvas = canvasRef.current; // current is property inside useRef. Like an Obj.
      const ctx = canvas.getContext('2d');
      animate(snakePos, snakeAttributes, ctx, canvas);
      requestAnimationFrame(render); //keeps calling render over and over
    }
    render(); // enter the function initially on mount
  },[]) // loads when mounted/initally

  return (
  <canvas id="canvas" ref={canvasRef} height="600px" width="600px"/>
  )
  
}

function animate(snakePos, snakeAttributes, ctx, canvas) {
  now = performance.now();
  elapsed = now - then;
  if (elapsed > fpsInterval) {
    then = now - (elapsed % fpsInterval);

    ctx.clearRect(0, 0, canvas.width, canvas.height); // clear canvas
    SnakeMovement(snakePos, snakeAttributes, ctx, canvas); // Check direction + Move/Draw Snake
  }
}