
var colors = generateRandomColors(6);

var squares = document.querySelectorAll(".square");
var pickedColor = pickColor();
var colorDisplay = document.getElementById("colorDisplay");
var message = document.querySelector("#message");
var h1 = document.querySelector("h1");

colorDisplay.textContent = pickedColor;

for (var i=0; i< squares.length;i++){
	//add initial colors to squares
	squares[i].style.background = colors[i];

	//add click listeners to squares
	squares[i].addEventListener("click", function(){
		//grab color of clicked square
		var clickedColor = this.style.background;
		//compare color to pickedColor
		if (clickedColor === pickedColor){
			message.textContent = "Correct!";
			changeColors(clickedColor);
			h1.style.background = clickedColor;
		}else{
			this.style.background = "#232323";
			message.textContent = "Try Again";
		}
	})
}

function changeColors(color){
	//loop through all squares
	//change each color to match given color
	for (var i=0;i<squares.length ; i++){
		squares[i].style.background = color;
	}
	
}

function pickColor(){
	var random = Math.floor(Math.random() * colors.length);
	return colors[random];
}

function generateRandomColors(num){
	//make an array
	var arr = [];
	//repeat num times
	for (var i =0; i < num; i++){
		arr.push(randomColor());
		//get random color and push into arr	
	}
	//return that array
	return arr;
}

function randomColor(){
	//pick a "red" from 0 - 255
	var r = Math.floor(Math.random() * 256);
	//pick a "green" from 0 - 255
	var g = Math.floor(Math.random() * 256);
	//pick a "blue" from 0 - 255
	var b = Math.floor(Math.random() * 256);
	return "rgb(" + r + ", " + g + ", " + b + ")";
}