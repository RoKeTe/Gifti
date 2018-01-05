Gifti.Victory=function(){
};

Gifti.Victory.prototype={
    preload:function(){
    },

    create:function(){
      letters=["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];

      //Iamge du background du menu
      bgVictory=this.add.sprite(768/2, 600/2, "bgVictory");
      //Offset du background
      bgVictory.anchor.setTo(0.5, 0.5);

      //Affichage du "Game Over"
      victoryText=this.add.text(330, 290, "Victoire", { fontSize: '64px', fill: '#070' });

      //Affichage bon de réduction
      reductionText=this.add.text(230, 340, "Votre bon de réduction:", { fontSize: '32px', fill: '#040' });
      bon=generateBon();
      reduction=this.add.text(220, 380, bon, { fontSize: '32px', fill: '#000' });
    },

    update:function(){
      //Rotation du background
      bgVictory.angle += 0.1;
    }
}

//Fonction de création du bon
function generateBon(){
  return genElement()+genElement()+genElement()+genElement()+" - "+genElement()+genElement()+genElement()+genElement()+" - "
    +genElement()+genElement()+genElement()+genElement()+" - 2018";
}

//Fonction qui génére un élément du bon
function genElement(){
  type=getRandom(0,1);
  if(type==0){//Lettre
    letter=getRandom(0,25);
    return letters[letter];
  }
  else{//Chiffre
    return number=""+getRandom(0,9);
  }
}
