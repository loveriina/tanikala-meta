async function renderLSCPositions(selectedCollege) {
  try {
    const response = await fetch("/get-vote-counts");
    const data = await response.json();
    if (!data.success) {
      throw new Error("Failed to fetch vote counts");
    }

    console.log("📡 Raw fetched LSC vote data:", data.result);

    // For LSC positions, we expect the API to return positions with a hyphen, e.g. "Governor - CAL"
    const results = {};

    data.result.forEach((positionObj) => {
      const pos = positionObj.position;
      if (pos.includes(" - ")) {
        const parts = pos.split(" - ");
        if (parts.length === 2) {
          const title = parts[0].trim();
          const college = parts[1].trim().toUpperCase();
          if (!results[college]) {
            results[college] = {};
          }
          if (!results[college][title]) {
            results[college][title] = { candidates: [], abstain: 0 };
          }
          positionObj.candidates.forEach((cand) => {
            if (cand.name.trim().toLowerCase() === "abstain") {
              results[college][title].abstain += parseInt(cand.votes, 10);
            } else {
              results[college][title].candidates.push({
                name: cand.name,
                votes: parseInt(cand.votes, 10),
              });
            }
          });
        }
      }
    });

    console.log("🔍 Filtered LSC results:", results);
    renderResultsLSC(results[selectedCollege] || {}, selectedCollege);
  } catch (error) {
    console.error("❌ Error fetching LSC vote counts:", error);
  }
}

function renderResultsLSC(results, college) {
  const container = document.getElementById("lsc-container");
  container.innerHTML = `<h2>${college} Local Student Council</h2>`;

  Object.keys(results).forEach((position) => {
    const positionDiv = document.createElement("div");
    positionDiv.classList.add("position-container");
    positionDiv.innerHTML = `<h3>${position}</h3>`;

    const totalVotes = results[position].candidates.reduce((sum, c) => sum + c.votes, 0) + results[position].abstain;
    console.log(`📊 Total votes for ${position} (${college}):`, totalVotes);

    results[position].candidates.forEach((candidate) => {
      console.log(`👤 Rendering candidate: ${candidate.name} with votes: ${candidate.votes} under ${position} (${college})`);

      const candidateDiv = document.createElement("div");
      candidateDiv.classList.add("progress-element");

      const nameElement = document.createElement("p");
      nameElement.classList.add("progress-label");
      nameElement.textContent = candidate.name;

      const progressBar = document.createElement("progress");
      progressBar.max = totalVotes;
      progressBar.value = candidate.votes;

      const voteCount = document.createElement("span");
      voteCount.textContent = `${candidate.votes} votes`;

      candidateDiv.appendChild(nameElement);
      candidateDiv.appendChild(progressBar);
      candidateDiv.appendChild(voteCount);
      positionDiv.appendChild(candidateDiv);
    });

    console.log(`🚨 Rendering Abstain votes: ${results[position].abstain} for ${position} (${college})`);

    const abstainDiv = document.createElement("div");
    abstainDiv.classList.add("progress-element");

    const abstainLabel = document.createElement("p");
    abstainLabel.classList.add("progress-label");
    abstainLabel.textContent = "Abstain";

    const abstainProgressBar = document.createElement("progress");
    abstainProgressBar.max = totalVotes;
    abstainProgressBar.value = results[position].abstain;

    const abstainCount = document.createElement("span");
    abstainCount.textContent = `${results[position].abstain} votes`;

    abstainDiv.appendChild(abstainLabel);
    abstainDiv.appendChild(abstainProgressBar);
    abstainDiv.appendChild(abstainCount);
    positionDiv.appendChild(abstainDiv);

    container.appendChild(positionDiv);
  });
}

document.getElementById("college-selector").addEventListener("change", function () {
  const selectedCollege = this.value.toUpperCase();
  console.log(`🔄 Changing to: ${selectedCollege}`);
  renderLSCPositions(selectedCollege);
});

renderLSCPositions("CAFA");
