Gifti.Menu=function(){
};

Gifti.Menu.prototype={
    preload:function(){
    },

    create:function(){
      //Iamge du background du menu
      bgMenu=this.add.sprite(768/2, 600/2, "bgMenu");
      //Offset du background
      bgMenu.anchor.setTo(0.5, 0.5);

      //Image logo Gifti
      logo=this.add.sprite(768/2, 600/2, "logo");
      //offset du logo
      logo.anchor.setTo(0.5, 0.5);
      //Petit texte accroché au logo
      logoText=this.add.text(120, 320, "Jeu promotionnel!!!", { fontSize: '82px', fill: '#c50' });
      logoText.angle=-45;

      //Création des boutons
      button1=this.add.button(175, 450, "button", actionOnClickJouer, this, 1, 0, 2);
      button1Text=this.add.text(230, 460, "Jouer", { fontSize: '32px', fill: '#000' });
      button2=this.add.button(390, 450, "button", actionOnClickInstructions, this, 1, 0, 2);
      button2Text=this.add.text(408, 460, "Instructions", { fontSize: '32px', fill: '#000' });
    },

    update : function(){
      //Rotation du background
      bgMenu.angle += 0.1;
    }
}

//Clique bouton "Jouer"
function actionOnClickJouer(){
  this.state.start("Game");
}

//Clique bouton "Instructions"
function actionOnClickInstructions(){
  this.state.start("Instructions");
}
