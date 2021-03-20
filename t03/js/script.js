document.querySelectorAll('.ball').forEach((ball) => {
    ball.addEventListener('mouseup', () => ball.classList.remove('moving'));
    ball.addEventListener('mousedown', () => ball.classList.add('moving'));
    ball.onmousemove = (e) => [ball.style.top, ball.style.left] = ball.classList.contains('moving') ? [
      `${e.pageY - ball.offsetHeight / 2}px`,
      `${e.pageX - ball.offsetWidth / 2}px`,
    ] : [ball.style.top, ball.style.left];
  })