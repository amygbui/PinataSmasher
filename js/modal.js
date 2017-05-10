const registerListeners = () => {
  const instructions = document.getElementById('instructions');
  const instrBtn = document.getElementById('instrBtn');
  const close = document.getElementById('close');

  instrBtn.onclick = () => {
    instructions.style.display = "flex";
  }

  close.onclick = () => {
    instructions.style.display = "none";
  }

  // const pause = document.getElementById('pause');
  //
  // pause.onclick = () => {
  //   pause.style.display = "flex";
  // }

  window.onclick = (event) => {
    if (event.target === instructions) {
      instructions.style.display = "none";
    } else if (event.target === pause) {
      pause.style.display = "none";
    }
  }
}

export default registerListeners;
