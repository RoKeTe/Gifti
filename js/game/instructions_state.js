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

      //Création du bouton "Retour"
      button=this.add.button(285, 450, "button", actionOnClickRetour, this, 1, 0, 2);
      buttonText=this.add.text(335, 460, "Retour", { fontSize: '32px', fill: '#000' });
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
