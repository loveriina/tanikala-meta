fetch('data/voter_information.json')
            .then(response => response.json())
            .then(data => {
                const tableBody = document.querySelector("#studentTable tbody");

                data.forEach(student => {
                    const row = document.createElement("tr");

                    row.innerHTML = `
                        <td>${student.name}</td>
                        <td>${student.email}</td>
                        <td>${student.studentNo}</td>
                        <td>${student.campus}</td>
                        <td>${student.college}</td>
                        <td>${student.program}</td>
                    `;

                    tableBody.appendChild(row);
                });
            })
            .catch(error => console.error("Error loading data:", error));