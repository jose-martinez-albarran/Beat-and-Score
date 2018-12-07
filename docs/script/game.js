$(document).ready(function(){
  $(document).ready(function(){
    game();
  });

  function game(){
    gameboard.start();
    player(600,250,100,100);
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
      this.ctx.fillStyle = "#FFFFFF";
      this.ctx.fillRect(0,87,1320,3);
      this.ctx.fillStyle = "#234810";
      this.ctx.fillRect(0,90,1320,50);
      this.ctx.beginPath();
      this.ctx.arc(660, 90, 25, 0, 2 * Math.PI);
      this.ctx.strokeStyle= '#FFFFFF'; 
      this.ctx.lineWidth = 3;
      this.ctx.stroke();
      this.ctx.fillStyle = "#52a334";
      this.ctx.fillRect(0,140,1320,60);
      this.ctx.fillStyle = "#234810";
      this.ctx.fillRect(0,200,1320,70);
      this.ctx.fillStyle = "#52a334";
      this.ctx.fillRect(0,270,1320,80);
      this.ctx.fillStyle = "#234810";
      this.ctx.fillRect(0,350,1320,90);
    },
    clear : function(){
      this.ctx = this.canvas.getContext("2d");
      this.ctx.fillStyle = "#52a334";
      this.ctx.fillRect(0,0,1320,20);
      this.ctx.fillStyle = "#234810";
      this.ctx.fillRect(0,20,1320,30);
      this.ctx.fillStyle = "#52a334";
      this.ctx.fillRect(0,50,1320,40);
      this.ctx.fillStyle = "#FFFFFF";
      this.ctx.fillRect(0,87,1320,3);
      this.ctx.fillStyle = "#234810";
      this.ctx.fillRect(0,90,1320,50);
      this.ctx.beginPath();
      this.ctx.arc(660, 90, 25, 0, 2 * Math.PI);
      this.ctx.strokeStyle= '#FFFFFF'; 
      this.ctx.lineWidth = 3;
      this.ctx.stroke();
      this.ctx.fillStyle = "#52a334";
      this.ctx.fillRect(0,140,1320,60);
      this.ctx.fillStyle = "#234810";
      this.ctx.fillRect(0,200,1320,70);
      this.ctx.fillStyle = "#52a334";
      this.ctx.fillRect(0,270,1320,80);
      this.ctx.fillStyle = "#234810";
      this.ctx.fillRect(0,350,1320,90);
    }
    
  }

function player(x,y,width,height){
  this.width = width;
  this.height = height;
  this.x = x;
  this.y = y; 
  this.img = new Image();
  this.img.src = '../images/player.png'; 
  this.img.onload = function(){
    this.update();
  }.bind(this);
  this.update = function(){
    ctx = gameboard.ctx;
    ctx.drawImage(this.img,70 , 0 , 70, 105,this.x, this.y,this.width, this.height);
  };
}

window.onkeydown = function(event) {
    var keyPr = event.keyCode; 
  
    if(keyPr === 39 && x<=1320){ 
        x = x+20; 
    }
    else if(keyPr === 37 && x>10){
        x = x-20; 
    }
    else if(keyPr === 38 && y>10) {
        y = y-20; 
    }
    else if(keyPr === 40 && y<=360){
        y = y+20; 
    }

    player(x,y,width,height);
    gameboard.clear();

};

});