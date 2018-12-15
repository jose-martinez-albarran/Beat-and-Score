$(document).ready(function(){
  $(document).ready(function(){
    game();
  });
  $('#re-play').click(function() {
    location.reload();
  });

  var myRivals = [];

  function game(){
    gameboard.start();
    player = new negroJose(600,350,70,105);
    rivalPlayer = new rival(30, 30, 0, 105);
  }

  var gameboard = {
    canvas : document.getElementById("field"),
    start : function(){
      this.ctx = this.canvas.getContext("2d");
      this.ctx.fillStyle = "#52a334";
      this.ctx.fillRect(0,0,1320,20);
      this.ctx.fillStyle = "#234810";
      this.ctx.fillRect(0,20,1320,30);
      this.ctx.fillStyle = "#52a334";
      this.ctx.fillRect(0,50,1320,40);
      this.ctx.fillStyle = "#234810";
      this.ctx.fillRect(0,90,1320,50);
      this.ctx.fillStyle = "#FFFFFF";
      this.ctx.fillRect(415,90,480,5);
      this.ctx.fillRect(415,0,5,90);
      this.ctx.fillRect(890,0,5,90);
      this.ctx.beginPath();
      this.ctx.arc(660, 130, 2.5, 0, 2 * Math.PI, false);
      this.ctx.fill();
      this.ctx.closePath();
      this.ctx.fillStyle = "#52a334";
      this.ctx.fillRect(0,140,1320,60);
      this.ctx.fillStyle = "#234810";
      this.ctx.fillRect(0,200,1320,70);
      this.ctx.fillStyle = "#52a334";
      this.ctx.fillRect(0,270,1320,80);
      this.ctx.fillStyle = "#234810";
      this.ctx.fillRect(0,350,1320,90);
      this.ctx.fillStyle = "#52a334";
      this.ctx.fillRect(0,420,1320,100);
      this.interval = setInterval(updateGameArea, 30);
    },
    frames: 0,
    clear : function(){
      this.ctx = this.canvas.getContext("2d");
      this.ctx.fillStyle = "#52a334";
      this.ctx.fillRect(0,0,1320,20);
      this.ctx.fillStyle = "#234810";
      this.ctx.fillRect(0,20,1320,30);
      this.ctx.fillStyle = "#52a334";
      this.ctx.fillRect(0,50,1320,40);
      this.ctx.fillStyle = "#234810";
      this.ctx.fillRect(0,90,1320,50);
      this.ctx.fillStyle = "#FFFFFF";
      this.ctx.fillRect(415,90,480,5);
      this.ctx.fillRect(415,0,5,90);
      this.ctx.fillRect(890,0,5,90);
      this.ctx.fillStyle = "#52a334";
      this.ctx.fillRect(0,140,1320,60);
      this.ctx.fillStyle = "#234810";
      this.ctx.fillRect(0,200,1320,70);
      this.ctx.fillStyle = "#52a334";
      this.ctx.fillRect(0,270,1320,80);
      this.ctx.fillStyle = "#234810";
      this.ctx.fillRect(0,350,1320,90);
      this.ctx.fillStyle = "#52a334";
      this.ctx.fillRect(0,440,1320,100);
    },
    stop : function(){
      clearInterval(this.interval);
      this.ctx = this.canvas.getContext("2d");
      this.ctx.fillStyle = "#02488C";
      this.ctx.fillRect(0,0,1320,480);
      this.ctx.fillStyle = '#FFFFFF';  
      this.ctx.font = "48px Fredoka One";
      this.ctx.fillText("Better Luck Next Time!",50,72);
      this.ctx.fillStyle = '#FFFFFF';  
      this.ctx.font = "48px Fredoka One";
      this.ctx.fillText("Do You Want To Play Again?",150,150);
      this.ctx.fillStyle = '#FFFFFF';  
      this.ctx.font = "48px Fredoka One";
      this.ctx.fillText("Please Press Re-play Button",245,230);
      this.img = new Image();
      this.img.src = '../images/emoji.png'; 
      this.img.onload = function(){
        this.update();
      }.bind(this);
      this.update = function(){
        ctx = gameboard.ctx;
        ctx.drawImage(this.img,960, 160,300,300);
      };
    },
    score : function(){
      this.points = (Math.floor(this.frames/1.8));
      this.ctx.fillStyle = "#eff23c";
      this.ctx.fillRect(0, 0, 400, 20);  
        this.ctx.fillStyle = "#d11d26";
        if(this.points <= 400){
          this.ctx.fillRect(0,0,this.points,20);
        }
        this.ctx.strokeStyle= '#FFFFFF';
        this.ctx.lineWidth = 5; 
        this.ctx.rect(0, 0, 400, 20);
        this.ctx.stroke();
        this.ctx.fillStyle = '#FFFFFF';
        this.ctx.font = "22px Arial";
        this.ctx.fillText("Progress",10,45);
      if(this.points > 400){
        this.goal();
      }
    },
    goal : function(){
      this.goalPlayer = new goalkeeper(630, 5, 50, 65);
    }
  }

function negroJose(x,y,width,height){
    this.width = width;
    this.height = height;
    this.x = x;
    this.y = y;
    this.bY = this.y + 20; 
    this.bX = 0; 
    this.speedX = 0;
    this.speedY = 0;
    this.img = new Image();
    this.img2 = new Image();
    this.img.src = '../images/player.png'; 
    this.img2.src = '../images/ball-game.png'; 
    this.img.onload = function(){
      this.update();
    }.bind(this);
    this.update = function(){
      ctx = gameboard.ctx;
      ctx.drawImage(this.img2,this.x + 20, this.bY ,30 - this.bX, 30 - this.bX);
      ctx.globalAlpha = 0.7;
      ctx.drawImage(this.img,0,20,70,85,this.x, this.y, this.width, this.height);
      ctx.globalAlpha = 1;
    };
    this.newPos = function() { 
        this.x += this.speedX;
        this.y += this.speedY;
        this.bY += this.speedY; 
    }
    this.left   = function() { return this.x + 10                }
    this.right  = function() { return (this.x + this.width) - 10 }
    this.top    = function() { return this.y  +  30          }
    this.bottom = function() { return this.y + (this.height) - 40}
   

    this.crashWith = function(rivalPlayer) {
      return !((this.bottom() < rivalPlayer.top())    ||
               (this.top()    > rivalPlayer.bottom()) ||
               (this.right()  < rivalPlayer.left())   ||
               (this.left()   > rivalPlayer.right())) 
    }
  }

function rival(width, height, x, y) {
  this.width = width;
  this.height = height;
  this.x = x;
  this.y = y;
  this.sx = 0;
  this.speedX = 0;
  this.speedY = 0;
  this.img = new Image();
  this.img.src = '../images/player-rival.png'; 
  this.img.onload = function(){
    this.update();
  }.bind(this);
  this.update = function(){
    ctx = gameboard.ctx;
    ctx.drawImage(this.img,this.sx,207,70,90,this.x, this.y,this.width, this.height);
  };
  this.newPos = function() {
      this.x += this.speedX;
      this.y += this.speedY; 
  }
  this.left   = function() { return this.x                 }
  this.right  = function() { return (this.x + this.width)  }
  this.top    = function() { return this.y                 }
  this.bottom = function() { return this.y + (this.height) }

  this.crashWith = function(rivalPlayer) {
    return !((this.bottom() < rivalPlayer.top())    ||
             (this.top()    > rivalPlayer.bottom()) ||
             (this.right()  < rivalPlayer.left())   ||
             (this.left()   > rivalPlayer.right())) 
  }
}

function goalkeeper(x,y,width,height){
  this.width = width;
  this.height = height;
  this.x = x;
  this.y = y;
  this.sx = 70;
  this.speedX = 0;
  this.speedY = 0;
  this.img = new Image();
  this.img.src = '../images/goalkeeper.png'; 
  this.img.onload = function(){
    this.update();
  }.bind(this);
  this.update = function(){
    ctx = gameboard.ctx;
    ctx.drawImage(this.img,this.sx,207,70,90,this.x, this.y,this.width, this.height);
  };
  this.newPos = function() {
      this.x += this.speedX;
      this.y += this.speedY; 
  }
  this.left   = function() { return this.x                 }
  this.right  = function() { return (this.x + this.width)  }
  this.top    = function() { return this.y                 }
  this.bottom = function() { return this.y + (this.height) }

  this.crashWith = function(rivalPlayer) {
    return !((this.bottom() < rivalPlayer.top())    ||
             (this.top()    > rivalPlayer.bottom()) ||
             (this.right()  < rivalPlayer.left())   ||
             (this.left()   > rivalPlayer.right())) 
  }
}

function updateGameArea() {
  for (i = 0; i < myRivals.length; i += 1) {
    if (player.crashWith(myRivals[i])) {
      gameboard.stop();
        return;
    } 
  }
  gameboard.clear();
  gameboard.frames += .5;
  if (gameboard.frames % 100 === 0) {
    x = 10;
    y = 0;
    width = 40;
    height = 40;
    minGap = 60;
    maxGap = 140;
    gap = Math.floor(Math.random()*(maxGap-minGap+1)+minGap);
    if(gameboard.points < 400){
      myRivals.push(new rival(width, height, x + gap, y));
      myRivals.push(new rival(width, height, x + 250  + gap * 1, y));
      myRivals.push(new rival(width, height, x + 500  +  gap * 2, y));
      myRivals.push(new rival(width, height, x + 750 +  gap * 3, y));
    }
  }
  if(gameboard.frames%2 == 0){
    for(i = 0; i < myRivals.length; i += 1){
      if(myRivals[i].sx < 210){
        myRivals[i].sx += 70;
      } else if (myRivals[i].sx === 210){
        myRivals[i].sx = 0;
      }
    }
  }
  for (i = 0; i < myRivals.length; i += 1) {
    myRivals[i].y += .8;
    if(myRivals[i].height < 105){
      myRivals[i].height += 0.22;;
    }
    if(myRivals[i].width < 70){
      myRivals[i].width += 0.12;
    }
    if (myRivals[i].x < player.x){
      myRivals[i].x += 1;
    } else if (myRivals[i].x > player.x){
      myRivals[i].x -= 1;
    }
    myRivals[i].update();
  }
  player.newPos();
  player.update();
  gameboard.score();
}

function goal() {
  if(gameboard.frames%1 == 0){
    player.bY -= 50;
  }
}

function moveUp() {
  if(player.y > 10){
    player.speedY -= 1;
    if(player.height > 45){
      player.height -= 2.2;
    }
    if(player.width > 45){
      player.width -= 1;
    }
  }
}

function moveDown() {
  if(player.y < 380){
  player.speedY += 1;
  if(player.height < 105){
    player.height += 2.2;
  }
  if(player.width < 70){
    player.width += 1;
  }
}
}

function moveLeft() {
  player.speedX -= 1;
}

function moveRight() {
  player.speedX += 1;
}

document.onkeydown = function(e) {
switch (e.keyCode) {
  case 32:
    goal();
    break;
  case 38:
    moveUp();
    break;
  case 40:
    moveDown();
    break;
  case 37:
    moveLeft();
    break;
  case 39:
    moveRight();
    break;
}
}

document.onkeyup = function(e) {
  stopMove();
}

function stopMove() {
    player.speedX = 0;
    player.speedY = 0; 
}

});