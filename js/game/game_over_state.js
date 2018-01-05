Gifti.GameOver=function(){
};

Gifti.GameOver.prototype={
    preload:function(){
    },

    create:function(){
      //Iamge du background du menu
      bgGameOver=this.add.sprite(768/2, 600/2, "bgGameOver");
      //Offset du background
      bgGameOver.anchor.setTo(0.5, 0.5);

      //Affichage du "Game Over"
      gameOverText=this.add.text(310, 290, "Game Over", { fontSize: '64px', fill: '#600' });

      //Création des boutons
      button1=this.add.button(175, 350, "button", actionOnClickRejouer, this, 1, 0, 2);
      button1Text=this.add.text(218, 360, "Rejouer", { fontSize: '32px', fill: '#000' });
      button2=this.add.button(390, 350, "button", actionOnClickMenu, this, 1, 0, 2);
      button2Text=this.add.text(448, 360, "Menu", { fontSize: '32px', fill: '#000' });
    },

    update:function(){
      //Rotation du background
      bgGameOver.angle += 0.1;
    }
}

//Clique bouton "Rejouer"
function actionOnClickRejouer(){
  this.state.start("Game");
}

//Clique bouton "Menu"
function actionOnClickMenu(){
  this.state.start("Menu");
}
