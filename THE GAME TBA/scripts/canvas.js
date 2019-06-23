class MapCanvas{

  constructor(){
    this.ctx = document.getElementById('map').getContext("2d");
    this.key = {
      x: 250,
      y: 220,
      width: 10,
      height: 10,
    }
    this.walls = [
      {
        start: {
          x: 160,
          y: 200,
        },
        end: {
          x: 160,
          y: 240,
        }
      }
    ]
  }

  drawKey(player){
    if(player.keyAcquired == false){
    this.ctx.beginPath();
    this.ctx.fillStyle = "#ffff00";
    this.ctx.fillRect(this.key.x,this.key.y, this.key.width,this.key.height);
    this.ctx.closePath();
    } else{
      this.ctx.font = "20px Copperplate";
      this.ctx.fillStyle = "#ff0000";
      this.ctx.fillText("EXIT->",55,150);
    }
  }
  drawBullet(theBullet){
    this.ctx.fillStyle = "#ff0000";
    this.ctx.fillRect(theBullet.x,theBullet.y,theBullet.width,theBullet.height);
  }
  clearBullet(theBullet){
    this.ctx.clearRect(theBullet.x,theBullet.y,theBullet.width,theBullet.height);
  }
  clearEnemy(enemy){
    this.ctx.clearRect(enemy.x,enemy.y,enemy.width,enemy.height);
  }
  drawEnemy(enemy){
    this.ctx.fillStyle = "#ff0000";
    this.ctx.fillRect(enemy.x,enemy.y,enemy.width,enemy.height);
  }
  drawMap(){
    
    this.ctx.clearRect(0, 0, 750, 600);
    this.ctx.globalAlpha = 0.01;
    this.ctx.lineWidth = 7;
    this.ctx.beginPath();
    this.ctx.strokeStyle = "#ff0000";
    this.ctx.fillStyle = "#ff0000";
    this.ctx.moveTo(130,30);
    this.ctx.lineTo(325,30);
    this.ctx.lineTo(325,187);
    this.ctx.lineTo(220,187);
    this.ctx.lineTo(220,425);
    this.ctx.lineTo(250,425);
    this.ctx.lineTo(250,480);
    this.ctx.lineTo(250,425);
    this.ctx.lineTo(300,425);
    this.ctx.moveTo(340,425);
    this.ctx.lineTo(410,425);
    this.ctx.moveTo(460,425);
    this.ctx.lineTo(510,425);
    this.ctx.lineTo(510,189);
    this.ctx.lineTo(476,189);
    this.ctx.moveTo(430,189);
    this.ctx.lineTo(410,189);
    this.ctx.lineTo(410,30);
    this.ctx.lineTo(600,30);
    this.ctx.lineTo(600,182);
    this.ctx.lineTo(550,182);
    this.ctx.stroke();
    this.ctx.moveTo(550,182);
    this.ctx.fillRect(556,182,15,115);
    this.ctx.fillRect(550,184,140,13);
    this.ctx.fillRect(687,197,10,215);
    this.ctx.fillRect(700,412,-155,10);
    this.ctx.fillRect(570,422,-18,-98);
    this.ctx.moveTo(623,422);
    this.ctx.lineTo(623,565);
    this.ctx.lineTo(455,565);
    this.ctx.lineTo(455,465);
    this.ctx.lineTo(440,465);
    this.ctx.moveTo(410,465);
    this.ctx.lineTo(365,465);
    this.ctx.lineTo(365,565);
    this.ctx.lineTo(455,565);
    this.ctx.lineTo(245,565);
    this.ctx.lineTo(245,520);
    this.ctx.moveTo(245,565);
    this.ctx.lineTo(110,565);
    this.ctx.lineTo(110,425);
    this.ctx.stroke();
    this.ctx.fillRect(35,425,145,-15);
    this.ctx.fillRect(37,425,-15,-225);
    this.ctx.fillRect(157,410,20,-80);
    this.ctx.fillRect(22,203,110,-20);
    this.ctx.moveTo(132,200);
    this.ctx.lineTo(160,200);
    this.ctx.lineTo(160,240);
    this.ctx.lineTo(178,200);
    this.ctx.lineTo(178,190);
    this.ctx.lineTo(130,190);
    this.ctx.lineTo(130,30);
    this.ctx.moveTo(400,190);
    this.ctx.lineTo(400,255);
    this.ctx.lineTo(330,255);
    this.ctx.lineTo(330,190);
    this.ctx.stroke();
    this.ctx.moveTo(510,189);
    this.ctx.fillRect(500,189,15,230);
    this.ctx.fillRect(500,196,-30,-10);
    this.ctx.closePath();
  }
  clearUser(x,y,width,height){
    this.ctx.clearRect(x,y,width,height);
  }
  drawUser(x,y,width,height){
    // this.ctx.drawImage(img,x,y,width,height);
    this.ctx.globalAlpha = 1;
    // let playerImage = new Image();
    // playerImage.src = img;
    // this.ctx.drawImage(playerImage,x,y,width,height);
    this.ctx.fillStyle = "#FFFFFF";
    this.ctx.fillRect(x,y,width,height);
  }

  detectLine(x, y) {
    var imageData = this.ctx.getImageData(0, 0, 750, 600),
        inputData = imageData.data,
        pData = (~~x + (~~y * 750)) * 4;

    if (inputData[pData + 3]) {
        return true;
    }

    return false;
}






}
// let theCanvas = new MapCanvas();
// theCanvas.drawMap();