import React, {useEffect, useRef, useState} from 'react'
import data from '../../data'
import { SnakeMovement} from './SnakeMovement';
import { AppleControl } from './AppleControl';
import { IntroScreen } from './IntroScreen';
import { EndScreen } from './EndScreen';

let {snakePos, snakeAttributes, FPS, apple} = data; 
let now, elapsed;
// Setting FPS
let fpsInterval = 1000 / FPS;
let then = performance.now();


export default function Board() {
  const canvasRef = useRef(null);
  const [score, setScore] = useState(0);
  const [gameStarted, setGameStarted] = useState(false);
  // const [gameOver, setGameOver] = useState(false);
  const gameOverRef = useRef(false);

  useEffect(() => {
    const canvas = canvasRef.current; // current is property inside useRef. Like an Obj.
    const ctx = canvas.getContext('2d');
    // gameloop below
    const render = () => {
      if (!gameStarted) {
        IntroScreen(canvas, ctx, setGameStarted);
        return;
      } 
      if (gameOverRef.current) {
        
        EndScreen(canvas, ctx, setScore, gameOverRef, score, snakePos, snakeAttributes, apple);
        requestAnimationFrame(render);
        return;
      } 
      let isGameOver = animate(snakePos, snakeAttributes, ctx, canvas, apple, setScore);
      console.log(score)
      if (isGameOver) {
        gameOverRef.current = true;
      }
      requestAnimationFrame(render);
       //keeps calling render over and overs
    }
    // render();
    render()
  },[gameStarted, score]) // useEffect reruns itself when the state of gameStarted and gameOver change 

  return (
    <div>
        <h1>Score: {score}</h1>
        <canvas id="canvas" ref={canvasRef} height="600px" width="600px"/>
    </div>
  )
  
}

function animate(snakePos, snakeAttributes, ctx, canvas, apple, setScore) {
  now = performance.now();
  elapsed = now - then;
  if (elapsed > fpsInterval) {
    then = now - (elapsed % fpsInterval);

    ctx.clearRect(0, 0, canvas.width, canvas.height); // clear canvas
    AppleControl(snakePos, apple, ctx, canvas, setScore, snakeAttributes);
    let isGameOver = SnakeMovement(snakePos, snakeAttributes, ctx, canvas, apple); // Check direction + Move/Draw Snake. Returns true if snake collided with obstacle
    if (isGameOver) {
      return true;
    }
    return false;
  }
}