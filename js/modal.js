const registerListeners = (pause) => {
  const instructions = document.getElementById('instructions');
  const instrBtn = document.getElementById('instrBtn');
  const close = document.getElementById('close');
  const pauseModal = document.getElementById('pauseModal');
  const playBtn = document.getElementById('playBtn');

  instrBtn.onclick = () => {
    instructions.style.display = "flex";
  }

  close.onclick = () => {
    instructions.style.display = "none";
  }

  pauseModal.onclick = () => {
    pauseModal.style.display = "none";
  }

  playBtn.onclick = () => {
    pauseModal.style.display = "none";
    pause.unpauseGame();
  }

  window.onclick = (event) => {
    if (event.target === instructions) {
      instructions.style.display = "none";
    } else if (event.target === pauseModal) {
      pauseModal.style.display = "none";
      pause.unpauseGame();
    }
  }
}

export default registerListeners;
