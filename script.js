//your JS code here. If required.
let container = document.querySelector('.container')
for(let i=1;i<=800;i++){
	let box = document.createElement('div')
	box.className = 'square';
	container.append(box);
}
let squares = document.querySelectorAll('.square')

for(let i of squares){
	i.addEventListener('mouseenter', (e)=> {
		let rc = () => parseInt(Math.random()*255)
		let color = `rgb(${rc()},${rc()},${rc()})`
		e.target.style.backgroundColor = color;
	})
	i.addEventListener('mouseleave', (e)=> {
			e.target.style.backgroundColor = 'rgb(29,29,29)';
			e.target.style.transition = '1s';
	})
}