class Player extends Person {
  constructor() {
    super(550, 500, 100, 100);
    this.keyAcquired = false;
  }

  gotKey(theCanvas) {
    if (
      this.x < theCanvas.key.x + theCanvas.key.width &&
      this.x + this.width > theCanvas.key.x &&
      this.y < theCanvas.key.y + theCanvas.key.height &&
      this.y + this.height > theCanvas.key.y
    ) {
      this.keyAcquired = true;
    }
  }
  moveYourSelf(key, theCanvas, myGame) {
    // if(!theCanvas.detectLine(this.x,this.y)){
    theCanvas.clearUser(this.x, this.y, this.width, this.height);
    if (key === "ArrowDown") {
      if (!theCanvas.detectLine(this.x, this.y + 21)) {
        myGame.lastArrowPressed = "S";
        this.y += 7;
      }
    }
    if (key === "ArrowUp") {
      if (!theCanvas.detectLine(this.x, this.y - 7)) {
        // && !theCanvas.detectLine(this.x+7, this.y - 7) && !theCanvas.detectLine(this.x-7, this.y - 7))
        myGame.lastArrowPressed = "N";
        this.y -= 7;
      }
    }
    if (key === "ArrowRight") {
      if (!theCanvas.detectLine(this.x + 21, this.y)) {
        myGame.lastArrowPressed = "E";
        this.x += 7;
      }
    }
    if (key === "ArrowLeft") {
      if (!theCanvas.detectLine(this.x - 7, this.y)) {
        myGame.lastArrowPressed = "W";
        this.x -= 7;
      }
    }
    // theCanvas.walls.forEach((theWall)=>{
    //   if(this.x > theWall.start.x && )
    // })

    // }
    theCanvas.drawUser(this.x, this.y, this.width, this.height);
  }
}
