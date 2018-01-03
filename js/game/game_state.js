Gifti.Game=function(){

};

Gifti.Game.prototype={
    preload:function(){

    },

    create:function(){
      //Pour activer l'utilisation du module physique arcade de Phaser
      this.physics.startSystem(Phaser.Physics.ARCADE);

      //Ajout du paddle du joueur 1
      paddle1=this.add.sprite((Gifti.GAME_WIDTH/4)-52, Gifti.GAME_HEIGHT-24, 'paddleBlue');
      //Ajout de la physique sur le paddle du joueur 1
      this.physics.arcade.enable(paddle1);
      paddle1.body.collideWorldBounds=true;

      ball={
        
      }

      //Création d'un groupe qui contiendra toutes les briques
      bricks=this.add.group();
      //Ajout d'un body sur l'ensemble des briques
      bricks.enableBody=true;

      //Création de l'ensemble des briques
      for(var i=0; i<12; i++){
        for(var j=0; j<8; j++){
          var brick = bricks.create(i*64, j*32, 'elementYellowRectangle');
          brick.body.immovable=true;
        }
      }

      //Création du gestionnaire d'entrées
      inputs = this.input.keyboard.createCursorKeys();
    },

    update:function(){
      //On reset la vélocité du paddle du joueur 1
      paddle1.body.velocity.x=0;

      if(this.input.keyboard.isDown(Phaser.Keyboard.Q)){
        paddle1.body.velocity.x=-400;
      }
      else if(this.input.keyboard.isDown(Phaser.Keyboard.D)){
        paddle1.body.velocity.x=400;
      }
    }
}
