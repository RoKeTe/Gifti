var viewProduit=false;

var allProduits=document.getElementsByClassName("imgs");
for(var i=0; i<allProduits.length; i++){
  allProduits[i].addEventListener("click", ClickProduit, false);
}

function ClickProduit(){
  if(!viewProduit){
    viewProduit=true;
    var produit=this.childNodes;
    var div=document.createElement("div");
    div.id="presentation";
    var img=document.createElement("img");
    img=produit[3].cloneNode(true);
    img.id="imgPresentation";
    var name=document.createElement("h1");
    name.innerHTML=produit[1].innerHTML;
    name.id="titlePresentation";
    var description=document.createElement("p");
    description=produit[7].cloneNode(true);
    description.id="textPresentation";
    var button=document.createElement("button");
    button=produit[5].cloneNode(true);
    button.innerHTML="Ajouter au pannier : "+produit[5].innerHTML;
    button.id="buttonPresentation";
    var quit=document.createElement("div");
    quit.id="quitPresentation";
    quit.addEventListener("click", QuitPresentation, false);
    div.appendChild(img);
    div.appendChild(name);
    div.appendChild(description);
    div.appendChild(button);
    div.appendChild(quit);
    document.body.appendChild(div);
  }
}

function QuitPresentation(){
  viewProduit=false;
  var div=document.getElementById("presentation");
  div.parentNode.removeChild(div);
}
