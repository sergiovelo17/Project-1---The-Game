window.onload = function() {
  class Game {
    constructor() {
      this.theCanvas = new MapCanvas();
      this.user = new Player();
      this.enemies = [
        new Enemy(150, 150, 10, 10, 4),
        new Enemy(280, 150, 10, 10, 4),
        new Enemy(50, 250, 10, 10, 4),
        new Enemy(350, 300, 10, 10, 5),
        new Enemy(490, 160, 10, 10, 4),
        new Enemy(360, 380, 10, 10, 0),
        new Enemy(155, 500, 10, 10, 4)
      ];
      this.bullets = [];
      this.enemyBullets = [];
      this.lastArrowPressed = "N";
      this.bulletCordinateX = 1;
      this.bulletCordinateY = 1;
    }

    drawGame() {
      this.theCanvas.drawMap();
    }

    playerShoot(){
      if(this.lastArrowPressed === "N"){
        this.theCanvas.clearUser(this.user.x,this.user.y,this.user.width,this.user.height);
        this.theCanvas.drawUser(this.user.playerShooting[0],this.user.x,this.user.y,this.user.width,this.user.height);
      }else  if(this.lastArrowPressed === "S"){
        this.theCanvas.clearUser(this.user.x,this.user.y,this.user.width,this.user.height);
        this.theCanvas.drawUser(this.user.playerShooting[1],this.user.x,this.user.y,this.user.width,this.user.height);
      }else  if(this.lastArrowPressed === "E"){
        this.theCanvas.clearUser(this.user.x,this.user.y,this.user.width,this.user.height);
        this.theCanvas.drawUser(this.user.playerShooting[2],this.user.x,this.user.y,this.user.width,this.user.height);
      }else{
        this.theCanvas.clearUser(this.user.x,this.user.y,this.user.width,this.user.height);
        this.theCanvas.drawUser(this.user.playerShooting[3],this.user.x,this.user.y,this.user.width,this.user.height);
      }
    }

    bulletCordinates(){
      if(this.lastArrowPressed === 'N'){
        this.bulletCordinateX += 14;
      }else if(this.lastArrowPressed === 'S'){
        this.bulletCordinateX+=14;
        this.bulletCordinateY+=  30;
      }else if(this.lastArrowPressed === 'E'){
        this.bulletCordinateX += 30;
        this.bulletCordinateY +=14;
      }else{
        this.bulletCordinateY+=14;
      }
    }
    enemyBulletCoordinates(theEnemy){
      if(theEnemy.currDirection === 'N'){
        theEnemy.enemyBulletCordX = theEnemy.x + 19;
        theEnemy.enemyBulletCordY = theEnemy.y + 5;
      }else if(theEnemy.currDirection === 'S'){
        theEnemy.enemyBulletCordX = theEnemy.x + 19;
        theEnemy.enemyBulletCordY = theEnemy.y + 35;
      }else if(theEnemy.currDirection === 'E'){
        theEnemy.enemyBulletCordX = theEnemy.x + 35;
        theEnemy.enemyBulletCordY = theEnemy.y + 19;
      }else{
        theEnemy.enemyBulletCordX = theEnemy.x + 5;
        theEnemy.enemyBulletCordY = theEnemy.y + 19;

      }
    }

    isWinner() {
      if (
        this.user.keyAcquired === true &&
        this.user.x > 130 &&
        this.user.x < 140 &&
        this.user.y < 150 &&
        this.user.y > 135
      ) {
        return true;
      }
      return false;
    }
    generateRandomEnemyShooting(){
     setInterval(()=>{
      this.enemies.forEach((theEnemy)=>{
        let randomNum = Math.floor(Math.random() * 100);
        this.enemyBulletCoordinates(theEnemy);
        if(randomNum === 5){
          let currBullet = new Bullet(
            theEnemy.enemyBulletCordX,
            theEnemy.enemyBulletCordY,
            theEnemy.currDirection
          );
          this.enemyBullets.push(currBullet);
        }
        console.log(this.enemyBullets)
      }, 10000)
     })
    }
    createEnemies(){
      this.enemies.forEach(theEnemy => {
        theEnemy.drawSelf(this.theCanvas, this);
      });
    }
    animate() {
      setInterval(() => {
        this.enemies.forEach(theEnemy => {
          theEnemy.drawSelf(this.theCanvas, this);
        });
        this.theCanvas.drawKey(myGame.user);
      }, 50);
    }
    shoot() {
      setInterval(() => {
        this.bullets.forEach(theBullet => {
          theBullet.drawSelf(this.theCanvas, this.bullets, this.enemies);
        });
      }, 20);
    }
    enemyShoot(){
      setInterval(() => {
        this.enemyBullets.forEach(theBullet => {
          theBullet.drawEnemyBullet(this.theCanvas, this.enemyBullets, this.user);
        });
      }, 20);
    }
    createEveryoneMovement() {
      this.user.createPlayerMovingRight(
        "https://dl.dropboxusercontent.com/s/1sg6rtrx73bi2mr/THISright%5B0%5D.png?dl=0"
      );
      this.user.createPlayerMovingRight(
        "https://dl.dropboxusercontent.com/s/rhsz9u9zxn10zlb/THISright%5B1%5D.png?dl=0"
      );
      this.user.createPlayerMovingRight(
        "https://dl.dropboxusercontent.com/s/1sg6rtrx73bi2mr/THISright%5B0%5D.png?dl=0"
      );
      this.user.createPlayerMovingRight(
        "https://dl.dropboxusercontent.com/s/2prv8n20gbcnjek/THISright%5B2%5D.png?dl=0"
      );
      this.user.createPlayerMovingLeft(
        "https://dl.dropboxusercontent.com/s/v2s58p86mq7cca0/usethisleft%5B0%5D.png?dl=0"
      );
      this.user.createPlayerMovingLeft(
        "https://dl.dropboxusercontent.com/s/3dxkd2awjq32zpu/usethisleft%5B1%5D.png?dl=0"
      );
      this.user.createPlayerMovingLeft(
        "https://dl.dropboxusercontent.com/s/v2s58p86mq7cca0/usethisleft%5B0%5D.png?dl=0"
      );
      this.user.createPlayerMovingLeft(
        "https://dl.dropboxusercontent.com/s/72czb2f81texmve/usethisleft%5B2%5D.png?dl=0"
      );
      this.user.createPlayerMovingUp(
        "https://dl.dropboxusercontent.com/s/gnjf9gqemch77ns/thisup%5B0%5D.png?dl=0"
      );
      this.user.createPlayerMovingUp(
        "https://dl.dropboxusercontent.com/s/fhfhd5mw0a04bbd/thisup%5B1%5D.png?dl=0"
      );
      this.user.createPlayerMovingUp(
        "https://dl.dropboxusercontent.com/s/gnjf9gqemch77ns/thisup%5B0%5D.png?dl=0"
      );
      this.user.createPlayerMovingUp(
        "https://dl.dropboxusercontent.com/s/720j5ujjfidb6ii/thisup%5B2%5D.png?dl=0"
      );
      this.user.createPlayerMovingDown(
        "https://dl.dropboxusercontent.com/s/zmszifl5lx9i41m/usethisdown%5B0%5D.png?dl=0"
      );
      this.user.createPlayerMovingDown(
        "https://dl.dropboxusercontent.com/s/qr4x4q73exloj9e/usethisdown%5B1%5D.png?dl=0"
      );
      this.user.createPlayerMovingDown(
        "https://dl.dropboxusercontent.com/s/zmszifl5lx9i41m/usethisdown%5B0%5D.png?dl=0"
      );
      this.user.createPlayerMovingDown(
        "https://dl.dropboxusercontent.com/s/wzhw7q21y2zrwk2/usethisdown%5B2%5D.png?dl=0"
      );
      this.user.createPlayerShooting('https://dl.dropboxusercontent.com/s/xno7iufod79xsuu/playershoot%5BN%5D.png?dl=0');
      this.user.createPlayerShooting('https://dl.dropboxusercontent.com/s/7jxaoi5tmub81ch/playershoot%5BS%5D.png?dl=0');
      this.user.createPlayerShooting('https://dl.dropboxusercontent.com/s/hi0rpf85koeeo0z/playerShoot%5BR%5D.png?dl=0');
      this.user.createPlayerShooting('https://dl.dropboxusercontent.com/s/er03360l3vob3y6/playershoot%5Bw%5D.png?dl=0');
      this.enemies.forEach(theEnemy => {
        theEnemy.createEnemyMovingRight(
          "https://dl.dropboxusercontent.com/s/sj93q5n2jzzmp9k/enemy%5B1%5D.png?dl=0"
        );
        theEnemy.createEnemyMovingRight(
          "https://dl.dropboxusercontent.com/s/qoutemvnrw7bkgx/enemy%5B0%5D.png?dl=0"
        );
        theEnemy.createEnemyMovingRight(
          "https://dl.dropboxusercontent.com/s/sj93q5n2jzzmp9k/enemy%5B1%5D.png?dl=0"
        );
        theEnemy.createEnemyMovingRight(
          "https://dl.dropboxusercontent.com/s/wzlomyr67cq4lnm/enemy%5B2%5D.png?dl=0"
        );
        theEnemy.createEnemyMovingDown(
          "https://dl.dropboxusercontent.com/s/go0eb1gkv11ytd3/enemy%5B0%5Ddown.png?dl=0"
        );
        theEnemy.createEnemyMovingDown(
          "https://dl.dropboxusercontent.com/s/5yj1kvs3daiqvcl/enemy%5B1%5Ddown.png?dl=0"
        );
        theEnemy.createEnemyMovingDown(
          "https://dl.dropboxusercontent.com/s/go0eb1gkv11ytd3/enemy%5B0%5Ddown.png?dl=0"
        );
        theEnemy.createEnemyMovingDown(
          "https://dl.dropboxusercontent.com/s/z87n9hedlz5knbt/enemy%5B2%5Ddown.png?dl=0"
        );
        theEnemy.createEnemyMovingLeft(
          "https://dl.dropboxusercontent.com/s/f16q6xwlh89nnq2/enemy%5B0%5Dleft.png?dl=0"
        );
        theEnemy.createEnemyMovingLeft(
          "https://dl.dropboxusercontent.com/s/qzwrkdfly1ss1j7/enemy%5B1%5Dleft.png?dl=0"
        );
        theEnemy.createEnemyMovingLeft(
          "https://dl.dropboxusercontent.com/s/f16q6xwlh89nnq2/enemy%5B0%5Dleft.png?dl=0"
        );
        theEnemy.createEnemyMovingLeft(
          "https://dl.dropboxusercontent.com/s/xngonyedqwo5btn/enemy%5B2%5Dleft.png?dl=0"
        );
        theEnemy.createEnemyMovingUp(
          "https://dl.dropboxusercontent.com/s/0lc97eshc9o1f82/enemy%5B0%5DUp.png?dl=0"
        );
        theEnemy.createEnemyMovingUp(
          "https://dl.dropboxusercontent.com/s/tscu1avdk2yvove/enemy%5B1%5Dup.png?dl=0"
        );
        theEnemy.createEnemyMovingUp(
          "https://dl.dropboxusercontent.com/s/0lc97eshc9o1f82/enemy%5B0%5DUp.png?dl=0"
        );
        theEnemy.createEnemyMovingUp(
          "https://dl.dropboxusercontent.com/s/dq5w0pk62t081l9/enemy%5B2%5Dup.png?dl=0"
        );
        theEnemy.createEnemyDying(
          "https://dl.dropboxusercontent.com/s/ouy685v2dk9sjr2/offdead%5B0%5D.png?dl=0"
        );
        theEnemy.createEnemyDying(
          "https://dl.dropboxusercontent.com/s/xwphtq53xlwiuce/offdead%5B1%5D.png?dl=0"
        );
        theEnemy.createEnemyDying(
          "https://dl.dropboxusercontent.com/s/8s2yhgen8e4lpv0/offdead%5B2%5D.png?dl=0"
        );
        theEnemy.createEnemyDying(
          "https://dl.dropboxusercontent.com/s/ls9slr58r8lyfg8/offdead%5B3%5D.png?dl=0"
        );
      });
    }
  }

  $(document).keydown(function(e) {
    let directions = ["ArrowLeft", "ArrowRight", "ArrowUp", "ArrowDown"];

    if (directions.includes(e.key)) {
      e.preventDefault();
      myGame.user.moveYourSelf(e.key, myGame.theCanvas, myGame);
      myGame.user.gotKey(myGame.theCanvas);
      // myGame.theCanvas.drawKey(myGame.user);
      if (myGame.isWinner()) {
        alert("winner");
      }
    }

    if (e.code === "Space") {
      e.preventDefault();
      myGame.playerShoot();
      myGame.bulletCordinateX = myGame.user.x;
      myGame.bulletCordinateY = myGame.user.y;
      myGame.bulletCordinates();
      let currBullet = new Bullet(
        myGame.bulletCordinateX,
        myGame.bulletCordinateY,
        myGame.lastArrowPressed
      );
      myGame.bullets.push(currBullet);
      console.log(myGame.bullets);
    }
  });

  let myGame = new Game();
  myGame.drawGame();

  myGame.createEveryoneMovement();
  myGame.user.moveYourSelf("w", myGame.theCanvas);
  myGame.theCanvas.drawKey(myGame.user);
  myGame.animate();
  myGame.shoot();
  myGame.generateRandomEnemyShooting();
  myGame.enemyShoot();
};
