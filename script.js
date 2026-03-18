// //your JS code here. If required.

const container = document.querySelector('.container');

container.innerHTML = '<div class="square"></div>'.repeat(800);

const rc = () => Math.floor(Math.random() * 256);

container.addEventListener('mouseover', (e) => {
  if (e.target.classList.contains('square')) {
    e.target.style.backgroundColor = `rgb(${rc()},${rc()},${rc()})`;
  }
});

container.addEventListener('mouseout', (e) => {
  if (e.target.classList.contains('square')) {
    e.target.style.backgroundColor = 'rgb(29,29,29)';
    e.target.style.transition = '1s';
  }
});
