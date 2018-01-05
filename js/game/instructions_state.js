Gifti.Instructions=function(){
};

Gifti.Instructions.prototype={
    preload:function(){
    },

    create:function(){
      //Iamge du background du menu
      bgInstructions=this.add.sprite(768/2, 600/2, "bgInstructions");
      //Offset du background
      bgInstructions.anchor.setTo(0.5, 0.5);

      //Instructions pour le joueur 1
      instructionsPLayer1=this.add.text(320, 20, "Player 1:", { fontSize: '32px', fill: '#fff' });
      key1=this.add.sprite(250, 60, "key1");
      instructionKey1=this.add.text(315, 65, ": Tirer la balle.", { fontSize: '32px', fill: '#fff' });
      key2=this.add.sprite(230, 100, "key2");
      instructionKey2=this.add.text(315, 105, ": Déplacer le pad.", { fontSize: '32px', fill: '#fff' });
      //Instructions pour le joueur 2
      instructionsPLayer2=this.add.text(320, 170, "Player 2:", { fontSize: '32px', fill: '#fff' });
      key3=this.add.sprite(250, 210, "key3");
      instructionKey3=this.add.text(315, 215, ": Tirer la balle.", { fontSize: '32px', fill: '#fff' });
      key4=this.add.sprite(230, 250, "key4");
      instructionKey2=this.add.text(315, 255, ": Déplacer le pad.", { fontSize: '32px', fill: '#fff' });

      //Instructions pour le jeu
      instruction1=this.add.text(100, 320, "Dirigez votre pad, et faites rebondir la balle", { fontSize: '32px', fill: '#fff' });
      instruction2=this.add.text(130, 350, "afin de casser le maximum de briques!", { fontSize: '32px', fill: '#fff' });
      instruction3=this.add.text(60, 380, "Gagnez 500 point pour obtenir votre code promo,", { fontSize: '32px', fill: '#fff' });
      instruction4=this.add.text(100, 410, "mais attention car le player 2 fera diminuer", { fontSize: '32px', fill: '#fff' });
      instruction5=this.add.text(300, 440, "votre score!", { fontSize: '32px', fill: '#fff' });

      //Création du bouton "Retour"
      button=this.add.button(285, 500, "button", actionOnClickRetour, this, 1, 0, 2);
      buttonText=this.add.text(335, 510, "Retour", { fontSize: '32px', fill: '#000' });
    },

    update:function(){
      //Rotation du background
      bgInstructions.angle += 0.1;
    }
}

//Clique bouton "Retour"
function actionOnClickRetour(){
  this.state.start("Menu");
}
