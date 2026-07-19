const scoreDisplay = {
  home: document.querySelector("#home-score"),
  away: document.querySelector("#away-score"),
};

console.log(scoreDisplay["home"]);
console.log(scoreDisplay["away"]);

const scores = {
  home: +document.querySelector("#home-score").textContent,
  away: +document.querySelector("#away-score").textContent,
};
console.log(scores["home"]);
console.log(scores["away"]);

function updateScore(team, score) {
  scores[team] = scores[team] + score;
  scoreDisplay[team].textContent = scores[team];
}

console.log(document.querySelectorAll(".score-btn"));

document.querySelectorAll(".score-btn").forEach((button) => {
  button.addEventListener("click", () => {
    const team = button.dataset.team;
    const points = Number(button.dataset.points);

    console.log(team + " scored " + points + " points");
    updateScore(team, points);
  });
});
