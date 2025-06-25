fetch("data/voter_turnout.json")
    .then((response) => {
        if (!response.ok) {
            throw new Error("Failed to load JSON file");
        }
        return response.json();
    })
    .then((data) => {
        const container = document.getElementById("container-charts");

        data.colleges.forEach((college) => {
            const collegeContainer = document.createElement("div");
            collegeContainer.classList.add("college-chart");

            const brElement = document.createElement("br");
            collegeContainer.appendChild(brElement);

            const collegeTitle = document.createElement("h3");
            collegeTitle.textContent = college.name;
            collegeContainer.appendChild(collegeTitle);

            const brElementCollegeName = document.createElement("br");
            collegeContainer.appendChild(brElementCollegeName);

            const chartElement = document.createElement("div");
            chartElement.id = `chart-${college.name.replace(/\s+/g, "-").toLowerCase()}`;
            collegeContainer.appendChild(chartElement);

            container.appendChild(collegeContainer);

            const myChart = new LinerBar(`#${chartElement.id}`, {
                items: college.items,
            });

            myChart.render();
        });
    })
    .catch((error) => {
        console.error("Error loading JSON data:", error);
    });
