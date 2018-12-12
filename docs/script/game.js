$(document).ready(function(){
  $(document).ready(function(){
    game();
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
    }
  }

function negroJose(x,y,width,height){
    this.width = width;
    this.height = height;
    this.x = x;
    this.y = y; 
    this.speedX = 0;
    this.speedY = 0;
    this.img = new Image();
    this.img.src = '../images/player.png'; 
    this.img.onload = function(){
      this.update();
    }.bind(this);
    this.update = function(){
      ctx = gameboard.ctx;
      ctx.drawImage(this.img,0,20,70,85,this.x, this.y,this.width, this.height);
    };
    this.newPos = function() {
        this.x += this.speedX; 
        this.y += this.speedY; 
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
  this.speedX = 0;
  this.speedY = 0;
  this.img = new Image();
  this.img.src = '../images/player-rival.png'; 
  this.img.onload = function(){
    this.update();
  }.bind(this);
  this.update = function(){
    ctx = gameboard.ctx;
    ctx.drawImage(this.img,0,207,70,90,this.x, this.y,this.width, this.height);
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
    width = 50;
    height = 40;
    minGap = 60;
    maxGap = 140;
    gap = Math.floor(Math.random()*(maxGap-minGap+1)+minGap);
    myRivals.push(new rival(width, height, x + gap, y));
    myRivals.push(new rival(width, height, x + 250  + gap * 1, y));
    myRivals.push(new rival(width, height, x + 500  +  gap * 2, y));
    myRivals.push(new rival(width, height, x + 750 +  gap * 3, y));
  }
  for (i = 0; i < myRivals.length; i += 1) {
    myRivals[i].y += 1;
    myRivals[i].height += 0.22;
    myRivals[i].width += 0.09;
    if (myRivals[i].x < player.x){
      myRivals[i].x += 1;
    } else if (myRivals[i].x > player.x){
      myRivals[i].x -= 1;
    }
    myRivals[i].update();
  }
  player.newPos();
  player.update();
  rival.update();
}

function moveUp() {
  player.speedY -= 1;
  player.height -= 2.2;
  player.width -= 1;
}

function moveDown() {
  player.speedY += 1;
  player.height += 2.2;
  player.width += 1;
}

function moveLeft() {
  player.speedX -= 1;
}

function moveRight() {
  player.speedX += 1;

}

document.onkeydown = function(e) {
switch (e.keyCode) {
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