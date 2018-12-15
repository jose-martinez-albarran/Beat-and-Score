$(document).ready(function(){
    $("#planet").hover(function(){
      levels();
    });
    $("#planet").click(function(){
      document.location.href = '../html/game.html';
    });

function levels(){
  PlanetLevel.start();
  planetFirst = new planet(82,82,35,35);
}

var PlanetLevel = {
  canvas : document.getElementById("planet"),
  start : function(){
    this.ctx = this.canvas.getContext("2d");
    this.ctx.beginPath();
    this.ctx.arc(100, 100, 25, 0, 2 * Math.PI);
    this.ctx.fillStyle = '#b0d264';
    this.ctx.fill();
    this.ctx.strokeStyle= '#0a4270'; 
    this.ctx.stroke();
    this.ctx.fillStyle = '#0a4270';  
    this.ctx.font = "14px Arial";
    this.ctx.fillText("Level 1 - Brazil",50,72);
  }
}

function planet(x,y,width,height){
  this.width = width;
  this.height = height;
  this.x = x;
  this.y = y; 
  this.img = new Image();
  this.img.src = '../images/stadium.png'; 
  this.img.onload = function(){
    this.update();
  }.bind(this);
  this.update = function(){
    ctx = PlanetLevel.ctx;
    ctx.drawImage(this.img,this.x, this.y,this.width, this.height);
  };
}


});


