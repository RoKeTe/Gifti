Gifti.Game=function(){
};

Gifti.Game.prototype={
    preload:function(){
    },

    create:function(){
      //Pour activer l'utilisation du module physique arcade de Phaser
      this.physics.startSystem(Phaser.Physics.ARCADE);

      //Ajout du background
      bg=this.add.sprite(0, 0, "bg");

      //Ajout du paddle du joueur 2
      paddle2=this.add.sprite((Gifti.GAME_WIDTH/2+Gifti.GAME_WIDTH/4)-52, Gifti.GAME_HEIGHT-28, "paddleRed");
      //Ajout de la physique sur le paddle du joueur 2
      this.physics.arcade.enable(paddle2);
      paddle2.body.collideWorldBounds=true;

      //Ajout du paddle du joueur 1
      paddle1=this.add.sprite((Gifti.GAME_WIDTH/4)-52, Gifti.GAME_HEIGHT-28, "paddleBlue");
      //Ajout de la physique sur le paddle du joueur 1
      this.physics.arcade.enable(paddle1);
      paddle1.body.collideWorldBounds=true;

      //Création de la balle
      ball=this.add.sprite(paddle1.body.position.x+52-11, paddle1.body.position.y-20, "ballBlue");
      this.physics.arcade.enable(ball);
      ball.body.collideWorldBounds=true;
      ballIsSticky=true;
      ballVelocity=new Phaser.Point(0,0);
      timer=0;

      //Création d'un groupe qui contiendra toutes les briques
      bricks=this.add.group();
      //Ajout d'un body sur l'ensemble des briques
      bricks.enableBody=true;

      //Création de l'ensemble des briques
      for(var i=0; i<12; i++){
        for(var j=0; j<10; j++){
          var brick;
          if(j<2) brick = bricks.create(i*64, j*32, "elementRedRectangle");
          else if(j<4) brick = bricks.create(i*64, j*32, "elementPurpleRectangle");
          else if(j<6) brick = bricks.create(i*64, j*32, "elementBlueRectangle");
          else if(j<8) brick = bricks.create(i*64, j*32, "elementGreenRectangle");
          else brick = bricks.create(i*64, j*32, "elementYellowRectangle");
          brick.body.immovable=true;
        }
      }

      //Création du gestionnaire d'entrées
      inputs = this.input.keyboard.createCursorKeys();
    },

    update:function(){
      //On reset la vélocité du paddle du joueur 1 et du joueur 2
      paddle1.body.velocity.x=0;
      paddle2.body.velocity.x=0;
      ball.body.velocity.x=0;
      ball.body.velocity.y=0;

      if(timer>0) timer--;

      //Collisions entre les deux paddles
      this.physics.arcade.collide(paddle1, paddle2);

      //On détecte les collisions entre la balle et les briques
      this.physics.arcade.overlap(ball, bricks, breakout, null, this);
      //On détecte si la balle touche le paddle2
      this.physics.arcade.overlap(ball, paddle2, touchPaddle2, null, this);
      //On détecte si la balle touche le paddle1
      this.physics.arcade.overlap(ball, paddle1, touchPaddle1, null, this);

      //Gestion des inputs joueur 1
      if(this.input.keyboard.isDown(Phaser.Keyboard.Q)){
        paddle1.body.velocity.x=-400;
      }
      else if(this.input.keyboard.isDown(Phaser.Keyboard.D)){
        paddle1.body.velocity.x=400;
      }
      if(ballIsSticky && ball.key=="ballBlue" && this.input.keyboard.isDown(Phaser.Keyboard.Z)){
        ballIsSticky=false;
        ball.body.position.y-=3;
        ballVelocity.y=-500;
      }

      //Gestion des inputs joueur 2
      if(this.input.keyboard.isDown(Phaser.Keyboard.LEFT)){
        paddle2.body.velocity.x=-400;
      }
      else if(this.input.keyboard.isDown(Phaser.Keyboard.RIGHT)){
        paddle2.body.velocity.x=400;
      }
      if(ballIsSticky && ball.key=="ballRed" && this.input.keyboard.isDown(Phaser.Keyboard.UP)){
        ballIsSticky=false;
        ball.body.position.y-=3;
        ball.velocity.x=0;
        ballVelocity.y=-500;
      }

      //Gestion quand la balle est collée ou non
      if(ballIsSticky){
        if(ball.key=="ballBlue"){
          ball.body.position.x=paddle1.body.position.x+52-11;
          ball.body.position.y=paddle1.body.position.y-20;
        }
        else{
          ball.body.position.x=paddle2.body.position.x+52-11;
          ball.body.position.y=paddle2.body.position.y-20;
        }
      }
      else{
        if(ball.position.y==0){
          ballVelocity.y=500;
        }
        if(ball.position.x<=0){
          ball.body.position.x=1;
          ballVelocity.x=400;
        }
        else if(ball.position.x+22>=Gifti.GAME_WIDTH){
          ball.body.position.x=(Gifti.GAME_WIDTH-1)-22;
          ballVelocity.x=-400;
        }
        ball.body.velocity.x=ballVelocity.x;
        ball.body.velocity.y=ballVelocity.y;
      }
    }
}

//Fonction appelée lorsqu'une brique est touchée par la balle
function breakout(ball, brick){
  ball.angle=Math.atan2(ball.body.position.x+11-brick.body.position.x+32, ball.body.position.y+11-brick.body.position.y+16);
  if(ball.body.position.x+11>brick.body.position.x+32) ballVelocity.x=Math.cos(ball.angle)*100;
  else if(ball.body.position.x+11<brick.body.position.x+32) ballVelocity.x=-Math.cos(ball.angle)*100;
  if(ball.body.position.y+11>brick.body.position.y+32){
    ballVelocity.y=500;
  }
  else if(ball.body.position.y+11<brick.body.position.y){
    ballVelocity.y=-500;
  }
  if(timer==0) brick.kill();
  timer=2;
}

function touchPaddle1(ball, paddle1){
  ball.angle=Math.atan2(paddle1.body.position.x+52-ball.body.position.x+11, paddle1.body.position.y+12-ball.body.position.y+11);
  if(ball.body.position.x+11>paddle1.body.position.x+52) ballVelocity.x=(1/Math.cos(ball.angle))*200;
  else if(ball.body.position.x+11<paddle1.body.position.x+52) ballVelocity.x=-(1/Math.cos(ball.angle))*200;
  ballVelocity.y=-500;
}

function touchPaddle2(ball, paddle2){
  ball.angle=Math.atan2(paddle2.body.position.x+52-ball.body.position.x+11, paddle2.body.position.y+12-ball.body.position.y+11);
  if(ball.body.position.x+11>paddle2.body.position.x+52) ballVelocity.x=(1/Math.cos(ball.angle))*200;
  else if(ball.body.position.x+11<paddle2.body.position.x+52) ballVelocity.x=-(1/Math.cos(ball.angle))*200;
  ballVelocity.y=-500;
}
