class Board {
	constructor(){
		let mainCvDiv = document.createElement('div');
		mainCvDiv.id = 'mainCvDiv';
		mainCvDiv.classList.add('main');
		let mainCanvas = document.createElement('canvas');
		mainCanvas.id = 'mainCanvas';
		mainCanvas.width = 300;
		mainCanvas.height = 300;
		mainCanvas.addEventListener('click', function () {
			let x = event.clientX;
			let y = event.clientY;
			console.log('bad X: ' + x + ' bad Y: ' + y);
			console.log('bad isn\'t relative...');
			// good solution below (still in dev)
			/*this.getCursorPosition(event, mainCanvas)
			getCursorPosition(event, canvas) {
			   var rect = canvas.getBoundingClientRect();
		    	var x = event.clientX - rect.left;
		    	var y = event.clientY - rect.top;
		    	console.log("x: " + x + " y: " + y);
			}*/
		});
		let ctx = mainCanvas.getContext('2d');
		let places = [
			new Place(this, 0,0),new Place(this, 0,1),new Place(this, 0,2),
			new Place(this, 1,0),new Place(this, 1,1),new Place(this, 1,2),
			new Place(this, 2,0),new Place(this, 2,1),new Place(this, 2,2)
		];


		this.drawBoard(ctx);
		mainCvDiv.appendChild(mainCanvas);
		document.body.appendChild(mainCvDiv);
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
		this.drawX(ctx, 50, 50);
		// this.drawX(ctx, 150, 50);
		this.drawX(ctx, 250, 50);
		// this.drawX(ctx, 50, 150);
		this.drawX(ctx, 150, 150);
		// this.drawX(ctx, 250, 150);
		this.drawX(ctx, 50, 250);
		// this.drawX(ctx, 150, 250);
		this.drawX(ctx, 250, 250);
		// this.drawO(ctx, 50, 50);
		this.drawO(ctx, 150, 50);
		// this.drawO(ctx, 250, 50);
		this.drawO(ctx, 50, 150);
		// this.drawO(ctx, 150, 150);
		this.drawO(ctx, 250, 150);
		// this.drawO(ctx, 50, 250);
		this.drawO(ctx, 150, 250);
		// this.drawO(ctx, 250, 250);
	};
	drawX(ctx, x, y){
		ctx.moveTo(x - 25, y - 25);
		ctx.lineTo(x + 25, y + 25);
		ctx.stroke();
		ctx.moveTo(x + 25, y - 25);
		ctx.lineTo(x - 25, y + 25);
		ctx.stroke();
		ctx.beginPath();
	}
	drawO(ctx,x,y){
		ctx.beginPath();
		ctx.arc(x,y,30,0,2*Math.PI);
		ctx.stroke();
	}
}

class Place {
	constructor(board,x,y){
	}
}

class Player {
	// let chequerType = "";
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
		let divUI = document.createElement('div');
		divUI.id = 'divUI';
		divUI.classList.add('interface');
		let startBtn = document.createElement('input');
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
		let spanYourTurn = document.createElement('span');
		spanYourTurn.innerHTML = 'Player '+ Math.ceil(Math.random()*2) + ' turn';
		document.getElementById('divUI').appendChild(spanYourTurn);
	}

}

const a = new Board(), b = new UI();
const player1 = new Player('x');
const player2 = new Player('o');
	// let playerCPU = new Player(difficulty);