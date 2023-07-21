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
  let cardBack;
  for (let i = 0; i < women.length; i++) {
    cardZone = document.createElement("div");
    cardZone.className = "cardZone";
    flipCard.appendChild(cardZone);
    cardFront = document.createElement("div");
    cardFront.className = "borderDemoFront";
    cardFront.innerHTML = women[i].name;
    cardZone.appendChild(cardFront);
    cardBack = document.createElement("div");
    cardBack.className = "borderDemoBack";
    cardBack.innerHTML = women[i].details;
    cardZone.appendChild(cardBack);
  }
});
