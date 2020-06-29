window.onload = function () {
	const red = document.querySelector ('.red')
	const blue = document.querySelector ('.blue')
	const green = document.querySelector ('.green')
	const ball = document.querySelector ('.ball')
	const down = document.querySelector ('.down')
	const up = document.querySelector ('.up')
	const left = document.querySelector ('.left')
	const right = document.querySelector ('.right')


	function moveDown() {
	  let ballStyle = window.getComputedStyle(ball);
	  let topValue = ballStyle.getPropertyValue("top").replace("px", "");

	  ball.style.top = (Number(topValue) + 20) + "px";
	}

	down.addEventListener ('click', moveDown)

	
	function moveUp() {
	  let ballStyle = window.getComputedStyle(ball);
	  let topValue = ballStyle.getPropertyValue("top").replace("px", "");

	  ball.style.top = (Number(topValue) - 20) + "px";
	}

	up.addEventListener ('click', moveUp)


	function moveUp() {
	  let ballStyle = window.getComputedStyle(ball);
	  let topValue = ballStyle.getPropertyValue("top").replace("px", "");

	  ball.style.top = (Number(topValue) - 20) + "px";
	}

	up.addEventListener ('click', moveUp)


	function moveLeft() {
	  let ballStyle = window.getComputedStyle(ball);
	  let leftValue = ballStyle.getPropertyValue("left").replace("px", "");

	  ball.style.left = (Number(leftValue) - 20) + "px";
	}

	left.addEventListener ('click', moveLeft)


	function moveRight() {
	  let ballStyle = window.getComputedStyle(ball);
	  let leftValue = ballStyle.getPropertyValue("left").replace("px", "");

	  ball.style.left = (Number(leftValue) + 20) + "px";
	}

	right.addEventListener ('click', moveRight)



	function changeToGreen () {

		if ('click') {
			ball.style = "background: green;"
		}
	}

	green.addEventListener ('click', changeToGreen)

	
	function changeToBlue () {

		if ('click') {
			ball.style = "background: blue;"
		}
	}

	blue.addEventListener ('click', changeToBlue)

	
	function changeToRed () {

		if ('click') {
			ball.style = "background: red;"
		}
	}

	red.addEventListener ('click', changeToRed)

}
