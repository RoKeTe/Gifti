Gifti.Preload=function(){
  // ici les variables que nous allons utiliser dans ce groupe de code
  // nous allons afficher la progression du chargement des données du jeu
  this.loadtext; // variable de texte
};

Gifti.Preload.prototype={
  preload:function(){
   // aucune ressource à précharger pour cet état
  },

  create:function(){
   //nous ajoutons au départ le texte "chargement", à la position x 25 et y 160, et de couleur #fff i.e blanc
   this.loadText=this.add.text(150, 290, "Chargement", { fill:"#ffffff" });
   //A chaque chargement de fichier nous appelons la fonction fileComplete que nous allons définir plus loin
   this.load.onFileComplete.add(this.fileComplete, this);
   //lorsque toutes les fichiers seront chargés, nous appelons la fonction loadComplete
   this.load.onLoadComplete.add(this.loadComplete, this);

   //on appelle la fonction qui va définir le chargement des fichiers
   this.startLoad();
  },

 startLoad:function(){
  //ici nous indiquons tous les fichiers que nous souhaitons charger pour notre jeu
  //et leur assignons à chacun un nom unique par lequel nous allons les référencer pour les utiliser

  //Image des boutons pour les menus
  this.load.spritesheet("button", "assets/game_imgs/buttons.png", 190, 49);
  //Logos et images des menu
  this.load.image("logo", "assets/logo/Gifti5.png");
  this.load.image("bgMenu", "assets/game_imgs/bg_menu.png");
  this.load.image("bgInstructions", "assets/game_imgs/bg_instructions.png");
  this.load.image("bgVictory", "assets/game_imgs/bg_victory.png");
  this.load.image("bgGameOver", "assets/game_imgs/bg_game_over.png");
  //Images du jeu
  this.load.image("bg", "assets/game_imgs/bg.png");
  this.load.image("gui", "assets/game_imgs/gui.png");
  this.load.image("paddleBlue", "assets/game_imgs/paddleBlue.png");
  this.load.image("paddleRed", "assets/game_imgs/paddleRed.png");
  this.load.spritesheet("balls", "assets/game_imgs/balls.png", 22, 22);
  this.load.image("ballGrey", "assets/game_imgs/ballGrey.png");
  this.load.image("elementGreyRectangle", "assets/game_imgs/element_grey_rectangle.png");
  this.load.image("elementRedRectangle", "assets/game_imgs/element_red_rectangle.png");
  this.load.image("elementPurpleRectangle", "assets/game_imgs/element_purple_rectangle.png");
  this.load.image("elementBlueRectangle", "assets/game_imgs/element_blue_rectangle.png");
  this.load.image("elementGreenRectangle", "assets/game_imgs/element_green_rectangle.png");
  this.load.image("elementYellowRectangle", "assets/game_imgs/element_yellow_rectangle.png");
  this.load.image("particle", "assets/game_imgs/particle.png");
  //on lance le chargement
  this.load.start();
 },

 update:function(){
    //n'est pas utile pour cet état, nous la definissons à titre didactique mais elle n'est pas nécessaire
 },

  //Maintenant, définissons nos fonctions!
  fileComplete:function(p_progress, p_cacheKey, p_success, p_totalLoaded, p_totalFiles){
     //à chaque nouveau fichier chargé nous mettons à jour notre variable loadText
     this.loadText.setText("Fichiers chargés : "+p_progress+"% - "+p_totalLoaded+" sur "+p_totalFiles);
  },

  loadComplete:function(){
     // tous les fichiers sont chargés, on peut donc lancer l'état suivant : le menu
     this.state.start("Instructions");
  }
}
