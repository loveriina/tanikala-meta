async function renderEditCandidatesLSC(collegeValue) {
  const response = await fetch("data/results_lsc.json");
  const data = await response.json();

  const selectedCollege = data.colleges.find((college) =>
    college.college.toLowerCase().includes(collegeValue.toLowerCase())
  );

  if (!selectedCollege) {
    console.error("College not found!");
    return;
  }

  document.querySelectorAll(".container-lsc").forEach((container) => {
    container.innerHTML = "";
  });

  selectedCollege.positions.forEach((position) => {
    const containerId = `container-lsc-${position.position
      .toLowerCase()
      .replace(/\s+/g, "-")
      .replace(/([a-z])([A-Z])/g, "$1-$2")}`;
    const container = document.getElementById(containerId);

    if (container) {
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
      addButton.classList.add("btn-add");
      addButton.style.padding = "0.5rem";
      addButton.style.cursor = "pointer";
      addButton.addEventListener("click", () =>
        alert(`Add candidate to ${position.position}`)
      );
      positionHeader.appendChild(addButton);

      container.appendChild(positionHeader);

      position.candidates.forEach((candidate) => {
        const candidateDiv = document.createElement("div");
        candidateDiv.style.display = "flex";
        candidateDiv.style.alignItems = "center";
        candidateDiv.style.marginBottom = "1rem";

        const imgElement = document.createElement("img");
        imgElement.src = candidate.img;
        imgElement.alt = candidate.name;
        imgElement.style.width = "3rem";
        imgElement.style.height = "3rem";
        imgElement.style.borderRadius = "50%";
        imgElement.style.marginRight = "1rem";
        candidateDiv.appendChild(imgElement);

        const infoContainer = document.createElement("div");
        infoContainer.style.flexGrow = "1";

        const nameElement = document.createElement("p");
        nameElement.textContent = `${candidate.name} (${
          candidate.partylist || "Independent"
        })`;
        nameElement.style.marginBottom = "0.5rem";
        infoContainer.appendChild(nameElement);

        candidateDiv.appendChild(infoContainer);

        const editButton = document.createElement("button");
        editButton.textContent = "Edit";
        editButton.classList.add("btn-edit");
        editButton.style.padding = "0.5rem";
        editButton.style.cursor = "pointer";
        editButton.addEventListener("click", () =>
          alert(`Edit candidate: ${candidate.name}`)
        );
        candidateDiv.appendChild(editButton);

        container.appendChild(candidateDiv);
      });
    }
  });
}

document.querySelector("select").addEventListener("change", function () {
  renderEditCandidatesLSC(this.value);
});

renderEditCandidatesLSC(document.querySelector("select").value);
