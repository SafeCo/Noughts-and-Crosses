const parent = document.getElementById('container');
const nCount = document.getElementById('noughtCount');
const cCount = document.getElementById('crossCount');
let container = [];
let counter = 0;
let x = 0;
let y = 0;
const winText = document.getElementById('declareText');
const reset = document.getElementById('resetBtn');
let gameOver = false

for (let i = 0; i <parent.children.length; i++) {

	container.push(parent.children[i]);
	container[i].addEventListener('click', function test(){
		foo(i)
	})
}

function foo(i){
		if (gameOver === true || container[i].innerHTML === 'X' || container[i].innerHTML === 'O'){
			return
		}else if (counter % 2 == 0) {
		const nought = 'O'
		container[i].innerHTML = nought;
		
		} else {
		const cross = 'X'
		container[i].innerHTML = cross;
		
		}
		winCon()

	counter++
	
	}

function winCon (){
	const testArr = [[0,1,2], [3,4,5], [6,7,8], [0,3,6], [1,4,7], [2,5,8], [0,4,8], [2,4,6]]
	let il = []
	container.forEach((value, index)=>
		il.push(container[index].innerHTML)
		)

	for (let i = 0; i < testArr.length; i++) {
		if (il[testArr[i][0]] === il[testArr[i][1]] && il[testArr[i][1]] === il[testArr[i][2]] && il[testArr[i][2]]==='O') {
		winText.innerHTML = 'Nought Wins';
		x++;
		nCount.innerHTML = x;
		gameOver = true;

		} else if (il[testArr[i][0]] === il[testArr[i][1]] && il[testArr[i][1]] === il[testArr[i][2]] && il[testArr[i][2]]==='X'){
		winText.innerHTML = 'Cross Wins';
		y++;
		cCount.innerHTML= y;
		gameOver = true;
		} 
	}
	if (counter == 8 && gameOver == false) {
	winText.innerHTML = "It's a Draw";
	gameOver = true;
	}
}

reset.addEventListener('click', function reseter(){
	for (let i = container.length - 1; i >= 0; i--) {
		container.splice(i,1)
	}
	
	for (let i = 0; i < parent.children.length; i++) {
		container.push(parent.children[i])
		container[i].innerHTML = ''
		}
	winText.innerHTML = 'Who Will Win?';
	counter = 0;
	gameOver = false;


})