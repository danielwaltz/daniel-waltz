const mouseFollower = document.createElement('div');
mouseFollower.classList.add('mouse-follower');
document.body.appendChild(mouseFollower);

document.addEventListener('mousemove', event => {
  const relX = event.clientX - mouseFollower.clientWidth / 2;
  const relY = event.clientY - mouseFollower.clientHeight / 2;
  const x = `--x: ${relX}px;`;
  const y = `--y: ${relY}px;`;
  mouseFollower.setAttribute('style', `${x} ${y}`);
});

document.addEventListener('mouseover', () => {
  mouseFollower.style.opacity = '1';
});

document.addEventListener('mouseout', () => {
  mouseFollower.style.opacity = '0';
});
