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
  let imageFront;
  let cardBack;
  women.sort((a, b) => a.id - b.id);
  women.splice(20, 0, women[0]);
  women.splice(30, 0, women[1]);
  console.log(women);
  women.shift();
  women.shift();
  console.log(women);
  
    for (let i = 0; i < women.length; i++) {
    // Creation de la div "cardZone"
    
    cardZone = document.createElement("div");
    cardZone.className = "cardZone"; //On attribut un id !!! pensez à nommer les id en fonction de l'index pour n'avoir que des id uniques !!! et garder les classes pour le CSS
    cardZone.id = "cardZone_"+women[i].id;
    flipCard.appendChild(cardZone); //On dit que cardZone est l'enfant de flipCard
    // Creation de la div "borderDemoFront"
    cardFront = document.createElement("div");
    cardFront.className = "borderDemoFront"; //On attribut un id
    cardFront.innerHTML = women[i].name; //On vient chercher les names dans l'API pour les rentrer dans le HTML
    cardZone.appendChild(cardFront); //On dit que cardFront est l'enfant de cardZone
    // Creation de la div "ImageFront"
    imageFront = document.createElement("img");
    imageFront.className = "imageFront"; //On attribut un id
    imageFront.id = "imageFront_"+women[i].id;
    imageFront.src = women[i].image_path; //On vient chercher les images dans l'API pour les rentrer dans le HTML SRC
    cardFront.appendChild(imageFront); //On dit que imageFront est l'enfant de cardFront
    // Creation de la div "borderDemoFront"    
    cardBack = document.createElement("div");
    cardBack.className = "borderDemoBack"; //On attribut un id
    cardBack.innerHTML = women[i].details; //On vient chercher les details dans l'API pour les rentrer dans le HTML
    cardZone.appendChild(cardBack); //On dit que cardBack est l'enfant de cardZone
  }
});
