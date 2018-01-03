var Gifti={};
Gifti.GAME_WIDTH=768;
Gifti.GAME_HEIGHT=600;
Gifti.Boot=function(){};

Gifti.Boot.prototype={
  preload:function(){
    //aucune ressource à précharger pour cet état
  },

  create:function(){
   //Mise à l'échelle
   this.scale.scaleMode=Phaser.ScaleManager.SHOW_ALL;
   this.game.input.maxPointers=1;
   this.scale.minWidth=768;
   this.scale.minHeight=600;

   //au delà de 800*600 on ne souhaite pas de rescale
   this.scale.maxWidth=768;
   this.scale.maxHeight=600;
   this.scale.pageAlignHorizontally=true;
   this.scale.setScreenSize(true);

   //on passe au State Preloader
   this.state.start("Preload");
  },
}
