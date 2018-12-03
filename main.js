
class Board {
	constructor(){
		var mainCanvas = document.createElement('canvas');
		mainCanvas.id = 'JicJacsJoe';
		mainCanvas.width = 300;
		mainCanvas.height = 300;
		var ctx = mainCanvas.getContext('2d');
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
	};
}

var start = new Board();