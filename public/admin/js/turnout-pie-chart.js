async function fetchAndRenderData() {
    const response = await fetch("data/voter_turnout.json");
    const jsonData = await response.json();

    let totalVoted = 0;
    let totalNotVoted = 0;

    const collegeData = jsonData.colleges.map((college) => {
        const voted = college.items.find((item) => item.name === "Already Voted").value;
        const notVoted = college.items.find((item) => item.name === "Not Yet Voted").value;
        totalVoted += voted;
        totalNotVoted += notVoted;
        return { name: college.name, voted, notVoted, total: voted + notVoted };
    });

    const totalStudents = totalVoted + totalNotVoted;

    const ctx = document.getElementById("chart-turnout").getContext("2d");
    new Chart(ctx, {
        type: "pie",
        data: {
            labels: ["Already Voted", "Not Yet Voted"],
            datasets: [
                {
                    label: "Student Voting Summary",
                    data: [totalVoted, totalNotVoted],
                    backgroundColor: ["#28a745", "#ff0015"],
                    borderColor: ["#ffffff", "#ffffff"],
                    borderWidth: 1,
                },
            ],
        },
        options: {
            responsive: true,
            plugins: {
                legend: { position: "top" },
                tooltip: {
                    callbacks: {
                        label: (context) => {
                            const label = context.label || "";
                            const value = context.raw || 0;
                            const percentage = ((value / totalStudents) * 100).toFixed(1);
                            return `${label}: ${value} (${percentage}%)`;
                        },
                    },
                },
            },
        },
    });

    document.querySelector(".summary-text span").innerHTML = `
      Total Students: ${totalStudents}<br>
      Already Voted: ${totalVoted} (${((totalVoted / totalStudents) * 100).toFixed(1)}%)<br>
      Not Yet Voted: ${totalNotVoted} (${((totalNotVoted / totalStudents) * 100).toFixed(1)}%)
    `;

    const progressContainer = document.querySelector(".content-colleges");
    collegeData.forEach((college) => {
        const percentage = (college.voted / college.total) * 100;
        const collegeHtml = `
        <div class="college-item">
          <h3>${college.name}</h3>
          <progress value="${percentage}" max="100"></progress>
          <p><b>${college.voted}</b> out of <b>${college.total}</b> students have already voted (${percentage.toFixed(1)}%).</p>
        </div>
      `;
        progressContainer.innerHTML += collegeHtml;
    });
}

fetchAndRenderData();
