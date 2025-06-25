async function renderCandidates() {
  // Fetch the JSON data
  const response = await fetch("data/results_ssc.json");
  const data = await response.json();

  // Loop through positions and render them
  data.positions.forEach((position) => {
    const containerId = `container-${position.position
      .toLowerCase()
      .replace(/\s+/g, "-")}`;
    const container = document.getElementById(containerId);

    if (container) {
      // Create position header with add button
      const positionHeader = document.createElement("div");
      positionHeader.style.display = "flex";
      positionHeader.style.justifyContent = "space-between";
      positionHeader.style.alignItems = "center";
      positionHeader.style.marginBottom = "1rem";

      const positionTitle = document.createElement("h2");
      positionTitle.textContent = position.position;
      positionHeader.appendChild(positionTitle);

      const addButton = document.createElement("button");
      addButton.textContent = "Add Candidate";
      addButton.style.padding = "0.5rem 1rem";
      addButton.style.cursor = "pointer";
      addButton.classList.add("btn-add");
      addButton.addEventListener("click", () => {
        alert(`Add a candidate to ${position.position}`);
      });
      positionHeader.appendChild(addButton);

      container.appendChild(positionHeader);

      // Render candidates
      position.candidates.forEach((candidate) => {
        const candidateDiv = document.createElement("div");
        candidateDiv.style.display = "flex";
        candidateDiv.style.alignItems = "center";
        candidateDiv.style.marginBottom = "1rem";
        candidateDiv.style.borderBottom = "1px solid #ddd";
        candidateDiv.style.paddingBottom = "0.5rem";

        // Candidate image
        const imgElement = document.createElement("img");
        imgElement.src = candidate.img;
        imgElement.alt = candidate.name;
        imgElement.style.width = "3rem";
        imgElement.style.height = "3rem";
        imgElement.style.borderRadius = "50%";
        imgElement.style.marginRight = "1rem";
        candidateDiv.appendChild(imgElement);

        // Candidate details
        const detailsDiv = document.createElement("div");
        detailsDiv.style.flexGrow = "1";

        const nameElement = document.createElement("p");
        nameElement.textContent = candidate.name;
        nameElement.style.fontWeight = "bold";
        nameElement.style.margin = "0";
        detailsDiv.appendChild(nameElement);

        const partylistElement = document.createElement("p");
        partylistElement.textContent = `Partylist: ${
          candidate.partylist || "Independent"
        }`;
        partylistElement.style.margin = "0";
        partylistElement.style.color = "#555";
        detailsDiv.appendChild(partylistElement);

        candidateDiv.appendChild(detailsDiv);

        // Edit button
        const editButton = document.createElement("button");
        editButton.textContent = "Edit";
        editButton.style.padding = "0.5rem 1rem";
        editButton.style.cursor = "pointer";
        editButton.classList.add("btn-edit");
        editButton.addEventListener("click", () => {
          alert(`Edit candidate: ${candidate.name}`);
        });
        candidateDiv.appendChild(editButton);

        container.appendChild(candidateDiv);
      });
    }
  });
}

// Execute the render function
renderCandidates();
