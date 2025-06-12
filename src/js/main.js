const audio = document.getElementById('bg-music');

document.body.addEventListener('click', () => {
  if (audio.muted) {
    audio.muted = false;
    audio.play();
  }
}, { once: true });
