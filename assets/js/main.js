const choixJoueur = document.getElementById("Userchoice");
console.log(choixJoueur);
let score = 0;

function jeu() {
  let decision = choixJoueur.value;
  let cpuChoice = Math.floor(Math.random() * 3) + 1;

  switch (cpuChoice) {
    case 1:
      cpuChoice = "Pierre";
      break;
    case 2:
      cpuChoice = "Feuille";
      break;
    case 3:
      cpuChoice = "Ciseaux";
    default:
      break;
  }
  console.log(cpuChoice);
  let result = "";
  if (
    (decision === "Pierre" && cpuChoice === "Ciseaux") ||
    (decision === "Feuille" && cpuChoice === "Pierre") ||
    (decision === "Ciseaux" && cpuChoice === "Feuille")
  ) {
    result = "Vous avez gagné !";
    score++;
  } else if (decision === cpuChoice) {
    result = "C'est une égalité !";
  } else {
    result = "L'ordinateur a gagné !";
  }

  document.getElementById(
    "result"
  ).innerText = `Vous avez choisi ${decision}, l'ordinateur a choisi ${cpuChoice}. ${result}, votre score est de ${score}`;
}
