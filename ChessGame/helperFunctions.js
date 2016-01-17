 var randomMove = function(){
   if(turn =='one'){
   console.log("Turn is one Printing Off Board");
   console.log(board);
   
   for(var i = 0; i <board.length;++i){
     for(var j = 0; j <board[i].length;++j){
       if(board[i][j].Occupied == 'true' && board[i][j].team == 'one'){
         console.log("PicRandom move for team one");
         for(var k = 0; k <8; ++k){
           for(var l = 0; l < 8; ++l ){
             var colorClicked = getHexFromCtx(ctx,i,j);
             localStorage.setItem("chessColor",colorClicked);
             if(MovePlayer(i,j,{col:k,row:l}) =='moved'){
               break;
             }
           }
         }
       }
     }
   }

  
   }
   else{
     console.log("Turn is two");
      for(var i = 0; i <board.length;++i){
     for(var j = 0; j <board[i].length;++j){
       if(board[i][j].Occupied == 'true' && board[i][j].team == 'two'){
         console.log("PicRandom move for team one");
         for(var k = 0; k <8; ++k){
           for(var l = 0; l < 8; ++l ){
             var colorClicked = getHexFromCtx(ctx,i,j);
             localStorage.setItem("chessColor",colorClicked);
             if(MovePlayer(i,j,{col:k,row:l}) =='moved'){
               break;
             }
           }
         }
       }
     }
   }
   }
  
 };

var MovePlayer = function(x,y,positionClickTwo){
	 
	 if(board[positionClickTwo.col][positionClickTwo.row].Occupied =='false' ||
	    (board[positionClickTwo.col][positionClickTwo.row].Occupied == 'true' && board[positionClickTwo.col][positionClickTwo.row].team != 
	     board[x][y].team ) )
	  {
	    
	    if((checkMove(board,{col:parseInt(x),row:parseInt(y)},positionClickTwo,board[x][y].chessPeice,board[x][y].team))&&board[x][y].team == turn){
	    
	    
	    
	    if(board[x][y].team == 'one'){
	      
	      if(positionClickTwo.row == 7 && board[x][y].chessPeice =='pawn'){
	        ctx.drawImage( returnImage('queen',ImagesTeam1), positionClickTwo.col*100 +5, positionClickTwo.row *100 +5 );
	        board[positionClickTwo.col][positionClickTwo.row] = returnBoardPeice('queen','one');
	      } 
	      else{
	      ctx.drawImage( returnImage(board[x][y].chessPeice,ImagesTeam1), positionClickTwo.col*100 +5, positionClickTwo.row *100 +5 );
	      board[positionClickTwo.col][positionClickTwo.row] = returnBoardPeice(board[x][y].chessPeice,'one');
	        
	      }
	      ctx.fillStyle = '#'+localStorage.chessColor;
	      ctx.fillRect(x*100,y*100,100,100);
	     // board[positionClickTwo.col][positionClickTwo.row] = returnBoardPeice(board[x][y].chessPeice,'one'); 
	      board[x][y]= Emptsqr; //Set old spot to empty
	      
	     turn = 'two';
	     document.getElementById('Turn').innerHTML = "Turn:Team2";
	     return 'moved';
	    }
	    else if(board[x][y].team == 'two'){
	      if(positionClickTwo.row == 0 && board[x][y].chessPeice =='pawn'){
	        ctx.drawImage( returnImage('queen',ImagesTeam2), positionClickTwo.col*100 +5, positionClickTwo.row *100 +5 );
	        board[positionClickTwo.col][positionClickTwo.row] = returnBoardPeice('queen','two');
	      } 
	      else{
	        ctx.drawImage( returnImage(board[x][y].chessPeice,ImagesTeam2), positionClickTwo.col*100 +5, positionClickTwo.row *100 +5 );
	      board[positionClickTwo.col][positionClickTwo.row] = returnBoardPeice(board[x][y].chessPeice,'two');
	        
	      }
 
	      ctx.fillStyle = '#'+localStorage.chessColor;
	      ctx.fillRect(x*100,y*100,100,100);
	       
	      board[x][y]= Emptsqr; // Set old spot to empty
	      turn = 'one';
	      document.getElementById('Turn').innerHTML = "Turn:Team1";
	      return 'moved';
	    }
	    
	    
	    }
	  }
	 }





var findpos = function(xpos,ypos){
  var column = 0;
  var row = 0;

    if(xpos >=0 && xpos<100){
    column = 0;
  }
   else if(xpos >=100 && xpos<200){
    column = 1;
  }
   else if(xpos >=200 && xpos<300){
    column = 2;
  }
   else if(xpos >=300 && xpos<400){
    column = 3;
  }
   else if(xpos >=400 && xpos<500){
    column = 4;
  }
   else if(xpos >=500 && xpos<600){
    column = 5;
  }
  else if(xpos >=600 && xpos<700){
    column = 6;
  }
   else{
    column = 7;
  }
 
   if(ypos >=0 && ypos<100){
    row = 0;
  }
   else if(ypos >=100 && ypos<200){
    row = 1;
  }
   else if(ypos >=200 && ypos<299){
    row = 2;
  }
   else if(ypos >=300 && ypos<399){
    row = 3;
  }
   else if(ypos >=400 && ypos<499){
    row = 4;
  }
   else if(ypos >=500 && ypos<599){
    row = 5;
  }
   else if(ypos >=600 && ypos<700){
    row = 6;
  }
   else{
    row = 7;
  }
 
 
 return {col:column,row:row};
 
 
};

var returnImage = function(peice,Images){
  
 
    switch(peice){
      case 'pawn':
        return Images[0];
      case 'queen':
        return Images[1];
      case 'king':
        return Images[2];
      case 'knight':
        return Images[3];
      case 'bishop':
        return Images[4];
      case 'rook':
        return Images[5];
      default:
        return Images[0];
      
    }
  
};

var returnBoardPeice = function(peice,team){
  if(team == 'one'){
    switch(peice){
      case 'pawn':
        return {Occupied:'true',chessPeice:'pawn',team:'one',moved:true};
      case 'queen':
        return {Occupied:'true',chessPeice:'queen',team:'one',moved:true};
      case 'king':
        return {Occupied:'true',chessPeice:'king',team:'one',moved:true};
      case 'knight':
        return {Occupied:'true',chessPeice:'knight',team:'one',moved:true};
      case 'bishop':
        return {Occupied:'true',chessPeice:'bishop',team:'one',moved:true};
      case 'rook':
        return {Occupied:'true',chessPeice:'rook',team:'one',moved:true};
      default:
        return {Occupied:'false',chessPeice:'false',team:'false',moved:true};
    }
    
  }
  if(team == 'two'){
     switch(peice){
      case 'pawn':
        return {Occupied:'true',chessPeice:'pawn',team:'two',moved:true};
      case 'queen':
        return {Occupied:'true',chessPeice:'queen',team:'two',moved:true};
      case 'king':
        return {Occupied:'true',chessPeice:'king',team:'two',moved:true};
      case 'knight':
        return {Occupied:'true',chessPeice:'knight',team:'two',moved:true};
      case 'bishop':
        return {Occupied:'true',chessPeice:'bishop',team:'two',moved:true};
      case 'rook':
        return {Occupied:'true',chessPeice:'rook',team:'two',moved:true};
      default:
        return {Occupied:'false',chessPeice:'false',team:'false',moved:true};
      
    }
  }
  
};
/*Outer Validation Function */
var checkMove = function(board,startPos,endPos,Peice,team){
  if(Peice =='pawn'){
    return checkPawnMove(board,startPos,endPos,team);
  }
  else if(Peice =='rook'){
    return checkRookMove(board,startPos,endPos,team);
  }
  else if(Peice =='bishop'){
    return checkbishopMove(board,startPos,endPos,team);
  }
  //Can can do bishop or rook
  else if(Peice =="queen"){
    return(checkbishopMove(board,startPos,endPos,team)||checkRookMove(board,startPos,endPos,team));
  }
  else if(Peice =='king'){
    return(checkKingMove(board,startPos,endPos,team));
  }
  else if(Peice =='knight'){
     return(checkKnightMove(board,startPos,endPos,team));
  }
  else
  return false;
};

var checkKnightMove = function(board,startPos,endPos,team){
 
 //eight possible moves similar to the king
  var startx = startPos.col;
  var starty = startPos.row;
  
  var endx = endPos.col;
  var endy = endPos.row;
 if(endx == startx +1 && endy == starty -2){
   //one oclock move
   return true;
 }
 if(endx == startx+2 && endy == starty-1){
   //two oclock move
   return true;
 }
 if(endx == startx +2 && endy == starty +1){
   //4 oclock move
   return true;
 }
 if(endx == startx +1 && endy == starty +2){
   //5 oclock move
   return true;
 }
 if(endx == startx -1 && endy == starty+2){
   //7 oclock move
   return true;
 }
 if(endx == startx -2 && endy == starty +1){
   //8 Oclock move
   return true;
 }
 if(endx == startx-2 && endy == starty-1){
   //10 Oclock move
   return true;
 }
 if(endx == startx-1 && endy == starty -2){
   //11 Oclock Move
   return true;
 }
 
 
 return false; 
};

var checkKingMove = function(board,startPos,endPos,team){
 var tempx = startPos.col;
  var tempy = startPos.row;
  
  var x = endPos.col;
  var y = endPos.row;
  
   //8 possible movements

   if(x == tempx && y == tempy-1){
     return true; //moved up one/
   }
   if(x == tempx && y == tempy +1){
     return true;//// moved down
   }
   
   if(y == tempy && x == tempx-1){
     return true;
   }
   if(y == tempy && x == tempx+1){
     return true;
   }
   
   if(x == tempx -1 && y == tempy -1 ){
     return true;
   } 
   if(x == tempx +1 && y == tempy +1 ){
     return true;
   } 
   if(x == tempx +1 && y == tempy -1 ){
     return true;
   } 
   if(x == tempx -1 && y == tempy +1 ){
     return true;
   } 
   
  
 return false; 
};

var checkbishopMove = function(board,startPos,endPos,team){
  
  
  if(startPos.col == endPos.col || startPos.row == endPos.row){

    return false;
  }
 
  
  //Four directions to take care of
  var tempx = startPos.col;
  var tempy = startPos.row;
  //Moved Up and to the right
  if(endPos.col > startPos.col &&   endPos.row < startPos.row){
   
    tempx = tempx +1;
    tempy = tempy -1;
    if(endPos.col + endPos.row != startPos.col + startPos.row){
      return false;
    }
    while(tempx != endPos.col && tempy != endPos.row){
      if(board[tempx][tempy].Occupied =='true'){
        return false;
      }
      tempx = tempx +1;
      tempy = tempy -1;
    }
    return true;
  }
  
  //Moved down and to the right
  if(endPos.col > startPos.col && endPos.row > startPos.row){
    
    if((startPos.col - startPos.row) != (endPos.col - endPos.row)){
    
    return false;
  }
    tempx = tempx +1;
    tempy = tempy +1;
    while(tempx != endPos.col && tempy != endPos.row){
      if(board[tempx][tempy].Occupied =='true'){
        return false;
      }
      tempx = tempx +1;
      tempy = tempy +1;
    }
    
  }
  
  if(endPos.row > startPos.row && endPos.col < startPos.col){
   
    
    if(endPos.row + endPos.col != startPos.row +startPos.col){
      return false;
    }
    
    tempx = tempx -1;
    tempy = tempy +1;
    while(tempx != endPos.col && tempy != endPos.row){
      if(board[tempx][tempy].Occupied =='true'){
        return false;
      }
      tempx = tempx -1;
      tempy = tempy +1;
    }
  }
  
  if(endPos.row < startPos.row && endPos.col < startPos.row){
    
    tempx = tempx -1;
    tempy = tempy -1;
    if(startPos.row - startPos.col != endPos.row - endPos.col){
      return false;
    }
    
    while(tempx != endPos.col && tempy != endPos.row){
      if(board[tempx][tempy].Occupied =='true'){
        return false;
      }
      tempx = tempx -1;
      tempy = tempy -1;
    }
    
    
    
  }
  
  return true;
};


var checkRookMove = function(board,startPos,endPos,team){
     
     if(board[endPos.col][endPos.row].Occupied == 'true'){
     //logic for occupied square square
     if(board[endPos.col][endPos.row].team == board[startPos.col][startPos.row].team){
       return false;
     }
  
   }
    if(endPos.col != startPos.col && endPos.row != startPos.row){
       return false;
     }
    if(endPos.col > startPos.col){
     
      for(var i = endPos.col -1; i > startPos.col;--i){
        if(board[i][startPos.row].Occupied =='true'){
         
          return false;
        }
      }
      
      
    }
    if(startPos.col > endPos.col){
     
      for(var i = endPos.col +1; i < startPos.col;++i){
        if(board[i][startPos.row].Occupied =='true'){
         
          return false;
        }
      }
      
      
    }
    if(endPos.row> startPos.row){
     
      for(var i = startPos.row +1; i < endPos.row; ++i){
       
        if(board[startPos.col][i].Occupied =='true'){
         
          return false;
        }
      }
      
    }
    if(endPos.row < startPos.row){
      
      
      for(var i = endPos.row +1 ; i < startPos.row; ++i){
        if(board[startPos.col][i].Occupied =='true'){
         
          return false;
        }
      }
      
      
    }
     
  return true;
};



var checkPawnMove = function(board,startPos,endPos,team){
    
  //From top top bottom
  if(team =='one'){
    //If its a pawns first move
    if(!board[startPos.col][startPos.row].moved){
      if((startPos.row+1 == endPos.row ||startPos.row+2 == endPos.row)&& endPos.col == startPos.col && board[endPos.col][endPos.row].Occupied =='false'){
        return true;
      }
      if((endPos.row  == startPos.row +1) && (endPos.col-1 == startPos.col || endPos.col+1 == startPos.col) && (board[endPos.col][endPos.row].Occupied == 'true')&&(board[endPos.col][endPos.row].team =='two') ){
      return true;
        
      }
    
    
    }
    else if(board[startPos.col][startPos.row].moved){
      if(endPos.row  == startPos.row +1 && endPos.col == startPos.col && board[endPos.col][endPos.row].Occupied =='false'){
        return true;
      }
      
      // pawn Attack Logic
      else if((endPos.row  == startPos.row +1) && (endPos.col-1 == startPos.col || endPos.col+1 == startPos.col) && (board[endPos.col][endPos.row].Occupied == 'true')&&(board[endPos.col][endPos.row].team =='two') ){
      return true;
    }
      
      
    }
    
    else
      return false;
  }
  
  
  else if(team =='two'){
    //If its a pawns first move
    if(!board[startPos.col][startPos.row].moved){
      if((startPos.row-1 == endPos.row ||startPos.row-2 == endPos.row)&& endPos.col == startPos.col&& board[endPos.col][endPos.row].Occupied =='false'){
        return true;
      }
      if((endPos.row  == startPos.row -1) && (endPos.col-1 == startPos.col || endPos.col+1 == startPos.col) && (board[endPos.col][endPos.row].Occupied == 'true')&&(board[endPos.col][endPos.row].team =='one') ){
      return true;}
    
    
    }
    else if(board[startPos.col][startPos.row].moved){
      if(endPos.row  == startPos.row -1 && endPos.col == startPos.col && board[endPos.col][endPos.row].Occupied =='false'){
        return true;
      }
      //pawn Attack Logic
      else if((endPos.row  == startPos.row -1) && (endPos.col-1 == startPos.col || endPos.col+1 == startPos.col) && (board[endPos.col][endPos.row].Occupied == 'true')&&(board[endPos.col][endPos.row].team =='one') ){
      return true;
    }
      
    }
    
    
    //Attack Logic
    
  }
  
  return false;
};



/*****************This taken from stack overflow ***********************************/
var toHex = function(n) {
  n = parseInt(n,10);
  if (isNaN(n)) return "00";
  n = Math.max(0,Math.min(n,255));return "0123456789ABCDEF".charAt((n-n%16)/16) + "0123456789ABCDEF".charAt(n%16);
};
var rgbToHex = function(R,G,B) {
  var newHex = toHex(R)+toHex(G)+toHex(B);
  return newHex;
};

function hexToRgb(hex) {
    // Expand shorthand form (e.g. "03F") to full form (e.g. "0033FF")
    var shorthandRegex = /^#?([a-f\d])([a-f\d])([a-f\d])$/i;
    hex = hex.replace(shorthandRegex, function(m, r, g, b) {
        return r + r + g + g + b + b;
    });

    var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
    return result ? {
        r: parseInt(result[1], 16),
        g: parseInt(result[2], 16),
        b: parseInt(result[3], 16)
    } : null;
}

function getHexFromCtx(ctx,col,row){
 var imgData= ctx.getImageData(col*100,row*100,1,1);
	    var Red = imgData.data[0];
	    var Green = imgData.data[1];
	    var Blue = imgData.data[2];
	    var hex = rgbToHex(Red,Green,Blue);
	    return hex;
}

