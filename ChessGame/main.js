var element = document.querySelector("#greeting");
// element.innerText = "Hello, world!";

var canvas = document.getElementById("myCanvas");
var ctx = canvas.getContext("2d");
var turn = "one";
ctx.fillStyle = "#000000";
ctx.fillRect(0,0,800,800);
ctx.fillStyle = "#FFFFFF";

var x = 50;
var y = 50;

/* Draw Chess Board */
for(var i =0; i <= 600; i = i +200){
 for(var j = 0; j <= 600;j = j +200){
    ctx.fillRect(i,j,100,100);
  }
}

for(var i = 100; i <= 700; i = i +200){
  for(var j = 100; j <= 700; j = j +200){
  ctx.fillRect(i,j,100,100);
  }
}

/* Create Chess Board Object for use with calculations and for easy conceptualization */

//Create empty object to fill up empty board spaces. 
var Emptsqr = {Occupied:'false',chessPeice:'false',team:'false',moved:false};

/******Create team1 peices******************/
//create team1 pawns
var pawn1 = {Occupied:'true',chessPeice:'pawn',team:'one',moved:false};
//create team1 queen
var queen1 ={Occupied:'true',chessPeice:'queen',team:'one',moved:false};
//create team1 king
var king1 = {Occupied:'true',chessPeice:'king',team:'one',moved:false};
//create team1 rook
var rook1 = {Occupied:'true',chessPeice:'rook',team:'one',moved:false};
//create team1 bishop
var bishop1 = {Occupied:'true',chessPeice:'bishop',team:'one',moved:false};
//create team1 knight
var knight1 = {Occupied:'true',chessPeice:'knight',team:'one',moved:false};
/*End team1 peices ********************************/

/******Create team2 peices******************/
//create team2 pawns
var pawn2 = {Occupied:'true',chessPeice:'pawn',team:'two',moved:false};
//create team2 queen
var queen2 ={Occupied:'true',chessPeice:'queen',team:'two',moved:false};
//create team2 king
var king2 = {Occupied:'true',chessPeice:'king',team:'two',moved:false};
//create team2 rook
var rook2 = {Occupied:'true',chessPeice:'rook',team:'two',moved:false};
//create team2 bishop
var bishop2 = {Occupied:'true',chessPeice:'bishop',team:'two',moved:false};
//create team2 knight
var knight2 = {Occupied:'true',chessPeice:'knight',team:'two',moved:false};
/*End team2 peices ********************************/



//init Board;
var board = new Array(8);
for(i = 0; i <8;++i){
  board[i] = new Array(8);
}
board[0][0] = rook1;board[1][0] = knight1;board[2][0] = bishop1;board[3][0] = queen1;board[4][0] = king1;board[5][0] = bishop1;board[6][0] = knight1;board[7][0] = rook1;
board[0][1] = pawn1;board[1][1] = pawn1;board[2][1] = pawn1;board[3][1] = pawn1;board[4][1] = pawn1;board[5][1] = pawn1;board[6][1] = pawn1;board[7][1] = pawn1;
board[0][2] = Emptsqr;board[1][2] = Emptsqr;board[2][2] = Emptsqr;board[3][2] = Emptsqr;board[4][2] = Emptsqr;board[5][2] = Emptsqr;board[6][2] = Emptsqr;board[7][2] = Emptsqr;
board[0][3] = Emptsqr;board[1][3] = Emptsqr;board[2][3] = Emptsqr;board[3][3] = Emptsqr;board[4][3] = Emptsqr;board[5][3] = Emptsqr;board[6][3] = Emptsqr;board[7][3] = Emptsqr;
board[0][4] = Emptsqr;board[1][4] = Emptsqr;board[2][4] = Emptsqr;board[3][4] = Emptsqr;board[4][4] = Emptsqr;board[5][4] = Emptsqr;board[6][4] = Emptsqr;board[7][4] = Emptsqr;
board[0][5] = Emptsqr;board[1][5] = Emptsqr;board[2][5] = Emptsqr;board[3][5] = Emptsqr;board[4][5] = Emptsqr;board[5][5] = Emptsqr;board[6][5] = Emptsqr;board[7][5] = Emptsqr;
board[0][6] = pawn2;board[1][6] = pawn2;board[2][6] = pawn2;board[3][6] = pawn2;board[4][6] = pawn2;board[5][6] = pawn2;board[6][6] = pawn2;board[7][6] = pawn2;
board[0][7] = rook2;board[1][7] = knight2;board[2][7] = bishop2;board[3][7] = queen2;board[4][7] = king2;board[5][7] = bishop2;board[6][7] = knight2;board[7][7] = rook2;

/*Create ArrayList Of Images for retrieval later */
var ImagesTeam1 = new Array(8);
var ImagesTeam2 = new Array(8);

/*Inizialize team one Pawn Images *************/
ImagesTeam1[0]= new Image();
ImagesTeam1[0].src = ("http://camccar.github.io/Chess/ChessGame/Images/ChessBlackPawn.png");




ImagesTeam1[0].onload = function() {
  for(var i = 5; i <=705; i = i +100)
ctx.drawImage( ImagesTeam1[0], i, 105 );
};


/*Inisialize team one Queen Image ***/

ImagesTeam1[1]= new Image();
ImagesTeam1[1].src=('Images/team1queen.png');

ImagesTeam1[1].onload = function(){
ctx.drawImage(ImagesTeam1[1],305,5);  
};



/*Inisialize team one King Image ***/


ImagesTeam1[2]= new Image();
ImagesTeam1[2].src=('Images/team1king.png');

ImagesTeam1[2].onload = function(){
ctx.drawImage(ImagesTeam1[2],405,5);  
};

/*Init team one knights */

ImagesTeam1[3]= new Image();
ImagesTeam1[3].src=('Images/team1Knight.png');

ImagesTeam1[3].onload = function(){
ctx.drawImage(ImagesTeam1[3],105,5);
ctx.drawImage(ImagesTeam1[3],605,5);
};

/*Init team one Bishops */

ImagesTeam1[4]= new Image();
ImagesTeam1[4].src=('Images/team1Bishop.png');


ImagesTeam1[4].onload = function(){
ctx.drawImage(ImagesTeam1[4],205,5);
ctx.drawImage(ImagesTeam1[4],505,5);
};
/*Init team one rooks */

ImagesTeam1[5]= new Image();
ImagesTeam1[5].src=('Images/team1rook.png');

ImagesTeam1[5].onload = function(){
ctx.drawImage(ImagesTeam1[5],5,5);
ctx.drawImage(ImagesTeam1[5],705,5);
};

/**End init team 1 sprites **/

/*********Init team 2 sprites ********************/
/*Inizialize team two Pawn Images *************/


ImagesTeam2[0]= new Image();
ImagesTeam2[0].src=('Images/team2pawn.png');


ImagesTeam2[0].onload = function() {

for(var i = 5; i <=705; i = i +100){  
ctx.drawImage( ImagesTeam2[0], i, 605 );
  }
};



/*Inisialize team two Queen Image ***/


ImagesTeam2[1]= new Image();
ImagesTeam2[1].src=('Images/team2queen.png');

ImagesTeam2[1].onload = function(){
ctx.drawImage(ImagesTeam2[1],305,705);  
};


/*Inisialize team two King Image ***/

ImagesTeam2[2]= new Image();
ImagesTeam2[2].src=('Images/team2king.png');

ImagesTeam2[2].onload = function(){
ctx.drawImage(ImagesTeam2[2],405,705);  
};

/*Init team two knights */

ImagesTeam2[3]= new Image();
ImagesTeam2[3].src=('Images/team2knight.png');

ImagesTeam2[3].onload = function(){
ctx.drawImage(ImagesTeam2[3],105,705);
ctx.drawImage(ImagesTeam2[3],605,705);
};


/*Init team two Bishops */

ImagesTeam2[4]= new Image();
ImagesTeam2[4].src=('Images/team2bishop.png');


ImagesTeam2[4].onload = function(){
ctx.drawImage(ImagesTeam2[4],205,705);
ctx.drawImage(ImagesTeam2[4],505,705);
};

/*Init team two rooks */

ImagesTeam2[5]= new Image();
ImagesTeam2[5].src=('Images/team2rook.png');

ImagesTeam2[5].onload = function(){
ctx.drawImage(ImagesTeam2[5],5,705);
ctx.drawImage(ImagesTeam2[5],705,705);
};

/***********End team2 sprite init*****************/

var xpos = 0;
var ypos = 0;
var firstclick = 1;
var firstclickColor = '#000000';
var firstclickPos = {col:0,row:0,firstclickColor:'#000000'};
localStorage.setItem("chessCol",0);
localStorage.setItem("chessrow",0);
localStorage.setItem("chessColor",'#000000');
localStorage.setItem("peiceChosen","empty");


canvas.addEventListener('click', function (event){
  
  if(firstclick == 1){
  firstclick = 0;
   xpos = event.pageX - this.offsetLeft;
	 ypos = event.pageY - this.offsetTop;
	var position = findpos(xpos,ypos);
	firstclickPos = {col:position.col,row:position.row};
	
	
	
	
	var colorClicked = getHexFromCtx(ctx,position.col,position.row);
	localStorage.setItem("chessCol",position.col);
	localStorage.setItem("chessrow",position.row);
	localStorage.setItem("chessColor",colorClicked);
	firstclickPos.firstclickColor = colorClicked;

	
	var squarePicked = board[position.col][position.row];
	

 	// ctx.fillStyle = "#"+colorClicked;
 	ctx.fillStyle = '#D4AF37';
 	ctx.fillRect(position.col*100,position.row*100,100,5);
 	ctx.fillRect(position.col*100,position.row*100,5,100);
 	ctx.fillRect(position.col*100+95,position.row*100,5,100);
 	ctx.fillRect(position.col*100,position.row*100+95,100,5);
 	
  }
  else{ //Its second click
    
    firstclick = 1;
   
    ctx.fillStyle = '#'+localStorage.chessColor;
    var x = localStorage.chessCol;
    var y = localStorage.chessrow;
    ctx.fillRect(x*100,y*100,100,5);
 	  ctx.fillRect(x*100,y*100,5,100);
 	  ctx.fillRect(x*100+95,y*100,5,100);
 	  ctx.fillRect(x*100,y*100+95,100,5);
 	  localStorage.setItem("chessCol",0);
    localStorage.setItem("chessrow",0);
    localStorage.setItem("chessColor",'#000000');
    
    
    /*Lets check to see if the square is empty, if it is we can effect it*/
   xpos = event.pageX - this.offsetLeft;
	 ypos = event.pageY - this.offsetTop;
	 var positionClickTwo = findpos(xpos,ypos);
	 //Check to see if a move is possible
   console.log(MovePlayer(x,y,positionClickTwo));
    
    
  }
  

});
/*****************Function for calculating click position****************/









