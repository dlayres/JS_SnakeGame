let size = 50; // Number of snake pixels the canvas size is
let res = 15; // Number of pixels per "snake pixel"
let startButton;
let width = size * res; // Canvas width and height
let height = size * res;
let snakeLocation = new Coordinate(0, 0);
let gameStarted = false;
let s = new Snake([snakeLocation], "right", res);
let f = new Food(Math.floor(width / res / 2), Math.floor(height / res / 2));

function setup(){
  var canvas = createCanvas(width, height);
	canvas.parent('canvas-holder');
  frameRate(10);
	update_scores(); // update scores for high score API

}

function keyPressed(){
	switch(keyCode){
		case LEFT_ARROW:
			if(!(s.dir == "right")){
				s.dir = "left";
			}
			break;
		case UP_ARROW:
			if(!(s.dir == "down")){
				s.dir = "up";
			}
			break;
		case RIGHT_ARROW:
			if(!(s.dir == "left")){
				s.dir = "right";
			}
			break;
		case DOWN_ARROW:
			if(!(s.dir == "up")){
				s.dir = "down";
			}
			break;
	}
}



function draw(){
	if(gameStarted){
  	clear();
  	background(180);
  	s.checkSelfIntersect();
  	s.updateSnake();
  	s.checkBounds(width, height);
  	s.checkEat(f, res);
  	s.drawSnake();
  	f.drawFood(res);
	}
	else{
		background(166, 145, 247);

		fill(color(110, 86, 201));
		rectMode(CENTER);
		rect(width / 2, height / 2, 100, 100);
	}
}


function updateHighScore(score){
	highscore(score);  // submit to API
}

function startGame(){
	gameStarted = !gameStarted;
}
