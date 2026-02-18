//your JS code here. If required.
let container = document.querySelector('.container')
for(let i=1;i<=800;i++){
	let box = document.createElement('div')
	box.className = 'square';
	container.append(box);
}
let squares = document.querySelectorAll('.square')

for(let i of squares){
	i.addEventListener('mouseover', ()=> {
		let rc = () => parseInt(Math.random()*256)
		let color = `rgb(${rc()},${rc()},${rc()})`;
		i.style.backgroundColor = color;
	})
	i.addEventListener('mouseout', ()=> {
		i.style.backgroundColor = 'rgb(29,29,29)';
		i.style.transition = '1s';
	})
}