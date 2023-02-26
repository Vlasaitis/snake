// waits for user to click, once clicked starts the game

export function IntroScreen(canvas, ctx, setGameStarted) {
    ctx.fillStyle = '#066481';
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    ctx.font = '20px Arial'
    ctx.fillStyle = 'white';
    ctx.fillText('Click here to start', canvas.width/2 - 80, canvas.height/2);
    const handleClick = () => {
      setGameStarted(true);
      canvas.removeEventListener('click', handleClick);
    };
    canvas.addEventListener('click', handleClick);
  }