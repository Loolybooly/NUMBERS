const topNumbers = [
  { rank: 1, link: "1.html" },
  { rank: 2, link: "2.html" },
  { rank: 3, link: "3.html" },
  { rank: 4, link: "4.html" },
  { rank: 5, link: "5.html" },
  { rank: 6, link: "6.html" },
  { rank: 7, link: "7.html" },
  { rank: 8, link: "8.html" },
  { rank: 9, link: "9.html" },
  { rank: 10, link: "10.html" },
];

document.addEventListener("DOMContentLoaded", function () {
  const rankingsContainer = document.getElementById("rankingsContainer");

  function displayRankings() {
    rankingsContainer.innerHTML = "";

    topNumbers.forEach((number) => {
      const rankingElement = document.createElement("a");
      rankingElement.href = number.link;
      rankingElement.className = "ranking-item";
      rankingElement.innerHTML = `
                <div class="ranking-number">#${number.rank}</div>
            `;
      rankingsContainer.appendChild(rankingElement);
    });
  }

  displayRankings();
});
