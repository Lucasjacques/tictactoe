class Board {
	constructor(){
		var mainCanvas = document.createElement('canvas');
		mainCanvas.id = 'JicJacsJoe';
		mainCanvas.width = 300;
		mainCanvas.height = 300;
		var ctx = mainCanvas.getContext('2d');
		var places = [
			new Place(this, 0,0),new Place(this, 0,1),new Place(this, 0,2),
			new Place(this, 1,0),new Place(this, 1,1),new Place(this, 1,2),
			new Place(this, 2,0),new Place(this, 2,1),new Place(this, 2,2)
		];


		this.drawBoard(ctx);
		document.body.appendChild(mainCanvas);
	}
	drawBoard(ctx){
		ctx.moveTo(100, 0);
		ctx.lineTo(100, 300);
		ctx.stroke();
		ctx.moveTo(200, 0);
		ctx.lineTo(200, 300);
		ctx.stroke();
		ctx.moveTo(0, 100);
		ctx.lineTo(300, 100);
		ctx.stroke();
		ctx.moveTo(0, 200);
		ctx.lineTo(300, 200);
		ctx.stroke();
		
		//just for now, drawing the shapes below
		this.drawCross(ctx);
		this.drawCircle(ctx);
	};
	drawCross(ctx){
		ctx.moveTo(125, 25);
		ctx.lineTo(175, 75);
		ctx.stroke();
		ctx.moveTo(175, 25);
		ctx.lineTo(125, 75);
		ctx.stroke();
	}
	drawCircle(ctx,x,y){
		ctx.beginPath();
		ctx.arc(50,50,30,0,2*Math.PI);
		ctx.stroke();
	}
}

class Place {
	constructor(board,x,y){
	}
}

class Player {
	// var chequerType = "";
	constructor(cqrType){
		this.chequerType = cqrType;
	}
	drawPlay(){
		if(chequerType === "x"){

		}
		else if(chequerType === "o"){
			ctx.beginPath();
			ctx.arc(50,50,30,0,2*Math.PI);
		}
	}
}

class UI{
	constructor(){
		var divUI = document.createElement('div');
		divUI.id = 'divUI';
		var startBtn = document.createElement('input');
		startBtn.id = 'startBtn';
		startBtn.type = 'button';
		startBtn.display = 'none';
		startBtn.value = 'Start!';
		startBtn.onclick = this.startGame;
		divUI.appendChild(startBtn);
		document.body.appendChild(divUI);

	}
	startGame(){
		document.getElementById('startBtn').hidden = true;
		var spanYourTurn = document.createElement('span');
		spanYourTurn.innerHTML = 'Player '+ Math.ceil(Math.random()*2) + ' turn';
		document.getElementById('divUI').appendChild(spanYourTurn);
	}

}

const a = new Board(), b = new UI();
const player1 = new Player('x');
const player2 = new Player('o');
	// var playerCPU = new Player(difficulty);