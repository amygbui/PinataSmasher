const registerListeners = (pause) => {
  const modal = document.getElementById('modal');
  const instructions = document.getElementById('instructions');
  const instrBtn = document.getElementById('instrBtn');
  const close = document.getElementById('close');
  // const pauseModal = document.getElementById('pauseModal');
  const playBtn = document.getElementById('playBtn');

  instrBtn.onclick = () => {
    modal.style.display = "flex";
    instructions.style.display = "block";

    if (pause.game.started) {
      pause.pauseGame();
    }

    console.log(pause.game.started);
  }

  close.onclick = () => {
    if (!pause.paused) {
      modal.style.display = "none";
    }

    if (pause.game.started) {
      pause.unpauseGame();
    }

    instructions.style.display = "none";
  }

  playBtn.onclick = () => {
    modal.style.display = "none";
    pause.unpauseGame();
  }

  window.onclick = (event) => {
    if (event.target === modal) {
      modal.style.display = "none";

      if (pause.paused) {
        pause.unpauseGame();
        playBtn.style.display = "none";
      }
    }
  }
}

export default registerListeners;
