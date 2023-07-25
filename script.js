async function getInfo() {
  const response = await fetch(
    "https://women-in-tech.apievangelist.com/apis/people/"
  );
  const women = await response.json();
  return women;
  
}
getInfo().then(function (women) {
  let flipCard = document.getElementById("flipCard");
  let cardZone;
  let cardFront;
  let title;
  let imageFront;
  let cardBack;
  women.sort((a, b) => a.id - b.id);
  women.splice(20, 0, women[0]); //on déplace l'index 0 (women[0]) à l'index 20, ça l'ajoute à l'index 20, mais il est toujours existant à l'index 0. Si avait écrit : women.splice(20,1,women[0]), on aurait écrasé le contenu de l'index 20 et remplacé par le contenu de l'index 0
  women.splice(30, 0, women[1]);
  women.shift(); // on supprime l'index 0 dans le tableau
  women.shift();
  
    for (let i = 0; i < women.length; i++) {
    // Creation de la div "cardZone"
    
    cardZone = document.createElement("div");
    cardZone.className = "cardZone"; //On attribut une classe !!! pensez à nommer les id en fonction de l'index pour n'avoir que des id uniques !!! et garder les classes pour le CSS
    cardZone.id = "cardZone_"+women[i].id;
    flipCard.appendChild(cardZone); //On dit que cardZone est l'enfant de flipCard
    // Creation de la div "borderDemoFront"
    cardFront = document.createElement("div");
    cardFront.className = "borderDemoFront"; //On attribut une classe
    cardZone.appendChild(cardFront); //On dit que cardFront est l'enfant de cardZone
    // Creation de la balise p "title"
    title = document.createElement("p");
    title.innerHTML = women[i].name; //On vient chercher les names dans l'API pour les rentrer dans le HTML
    cardFront.appendChild(title); //On dit que title est l'enfant de cardFront
    // Creation de la balise img "ImageFront"
    imageFront = document.createElement("img");
    imageFront.className = "imageFront"; //On attribut une classe
    imageFront.id = "imageFront_"+women[i].id; //On attribut un id
    imageFront.src = women[i].image_path; //On vient chercher les images dans l'API pour les rentrer dans le HTML SRC
    // imageFront.onload = function() {
    //   console.log("ca marche")
    // };
    imageFront.onerror = function(event) {
      event.srcElement.src= "https://http.cat/images/404.jpg";
      console.log(event)
    };
    cardFront.appendChild(imageFront); //On dit que imageFront est l'enfant de cardFront
    // Creation de la div "borderDemoFront"    
    cardBack = document.createElement("div");
    cardBack.className = "borderDemoBack"; //On attribut une classe
    cardBack.innerHTML = women[i].details; //On vient chercher les details dans l'API pour les rentrer dans le HTML
    cardZone.appendChild(cardBack); //On dit que cardBack est l'enfant de cardZone
  }
});
