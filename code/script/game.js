$(document).ready(function(){
  $(document).ready(function(){
    game();
  });

  function game(){
    gameboard.start();
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
    }
  }
});