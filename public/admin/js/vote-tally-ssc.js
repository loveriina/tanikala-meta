async function renderSSCPositions() {
  try {
    const response = await fetch("/get-vote-counts");
    const data = await response.json();
    if (!data.success) {
      throw new Error("Failed to fetch vote counts");
    }

    console.log("📡 Raw fetched vote data:", data.result);

    // SSC positions are expected to be exactly "President", "Vice President", and "Senator"
    const positions = ["President", "Vice President", "Senator"];
    const results = {};

    data.result.forEach((positionObj) => {
      const pos = positionObj.position;
      if (positions.includes(pos)) {
        if (!results[pos]) {
          results[pos] = { candidates: [], abstain: 0 };
        }
        positionObj.candidates.forEach((cand) => {
          if (cand.name.trim().toLowerCase() === "abstain") {
            results[pos].abstain += parseInt(cand.votes, 10);
          } else {
            results[pos].candidates.push({
              name: cand.name,
              votes: parseInt(cand.votes, 10),
            });
          }
        });
      }
    });

    console.log("🔍 Filtered SSC results:", results);
    renderResultsSSC(results);
  } catch (error) {
    console.error("❌ Error fetching SSC vote counts:", error);
  }
}

function renderResultsSSC(results) {
  const positions = ["President", "Vice President", "Senator"];
  positions.forEach((position) => {
    const containerId = `container-${position.toLowerCase().replace(/\s+/g, "-")}`;
    const container = document.getElementById(containerId);
    if (container) {
      container.innerHTML = `<h2>${position}</h2>`;
      const totalVotes = results[position] ? results[position].candidates.reduce((sum, c) => sum + c.votes, 0) + results[position].abstain : 0;
      if (results[position]) {
        results[position].candidates.forEach((candidate) => {
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
          container.appendChild(candidateDiv);
        });
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
        container.appendChild(abstainDiv);
      } else {
        container.innerHTML += `<p>No data available for ${position}</p>`;
      }
    } else {
      console.warn(`Container for ${position} not found.`);
    }
  });
}

renderSSCPositions();
