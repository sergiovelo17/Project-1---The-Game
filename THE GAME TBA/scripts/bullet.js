class Bullet{
  constructor(xcord,ycord,direction){
    this.x = xcord;
    this.y = ycord;
    this.direction = direction;
    this.height = 4;
    this.width = 4;
  }
  bulletCollision(allBullets){
    let index = allBullets.indexOf(this);
    allBullets.splice(index, 1);
  }
  drawSelf(theCanvas, allBullets){
    theCanvas.clearBullet(this);
    if(this.direction === "N"){
      if (!theCanvas.detectLine(this.x, this.y - 5)){
        this.y -= 5;
        theCanvas.drawBullet(this);
      }else{
        this.bulletCollision(allBullets);
      }
    }
    if(this.direction === "S"){
      if (!theCanvas.detectLine(this.x, this.y + 5)){
        this.y += 5;
        theCanvas.drawBullet(this);
      }else{
        this.bulletCollision(allBullets);
      }
    }
    if(this.direction === "E"){
      if (!theCanvas.detectLine(this.x + 5, this.y)){
        this.x += 5;
        theCanvas.drawBullet(this);
      }else{
        this.bulletCollision(allBullets);
      }
    }
    if(this.direction === "W"){
      if (!theCanvas.detectLine(this.x - 5, this.y)){
        this.x -= 5;
        theCanvas.drawBullet(this);
      }else{
        this.bulletCollision(allBullets);
      }
    }

  }
}