document.querySelectorAll(".button-cancel").forEach((button) => {
  button.addEventListener("click", () => {
    console.log("Delete button clicked.");
    const row = button.closest("tr");
    console.log("Row element:", row);

    const id = row.getAttribute("data-id");
    console.log("Extracted id:", id);

    // If the ObjectID is the developer's ID, alert and exit without confirmation.
    if (id === "67c311956f9fff1e2b6ba809") {
      console.warn("Attempt to delete protected developer account.");
      alert("It's ironic you are trying to delete me as 'developer' lol.");
      return;
    }

    // Get the email from the row attribute
    const email = row.getAttribute("data-email");
    console.log("Extracted email:", email);

    // Prevent deletion if trying to delete the logged in account
    const loggedInEmail = "<%= loggedInAdmin.email %>";
    console.log("Logged in admin email:", loggedInEmail);
    if (email === loggedInEmail) {
      console.warn("Attempt to delete own account. Aborting.");
      alert("You cannot delete your own account.");
      return;
    }

    // Ask for deletion confirmation.
    if (confirm("Are you sure you want to delete this admin account?")) {
      console.log("User confirmed deletion for email:", email);

      // Send JSON data instead of FormData
      fetch("/admin-accounts/delete", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email: email }),
      })
        .then((response) => {
          console.log("Received response from delete fetch:", response);
          if (response.ok) {
            console.log("Deletion successful, reloading page.");
            window.location.reload();
          } else {
            console.error("Deletion failed, response not OK.");
            alert("Unable to delete admin account.");
          }
        })
        .catch((err) => {
          console.error("Error during deletion fetch:", err);
          alert("An error occurred.");
        });
    } else {
      console.log("User cancelled deletion.");
    }
  });
});

document.querySelectorAll(".button-edit").forEach((button) => {
  button.addEventListener("click", () => {
    console.log("=== Edit button clicked ===");

    const row = button.closest("tr");
    console.log("Row element:", row);

    const adminId = row.getAttribute("data-id");
    console.log("Extracted adminId from row:", adminId);

    // Get the logged in admin id from the template (make sure it's stored as 'id' in your session)
    // const loggedInAdminId = "<%= loggedInAdmin.id %>";
    console.log("Logged in admin id from session/template:", loggedInAdminId);

    const protectedId = "67c311956f9fff1e2b6ba809";
    console.log("Protected admin id:", protectedId);

    // If the row's admin is protected, check if the logged in admin is the same
    if (adminId === protectedId) {
      console.log("The admin being edited is the protected admin.");
      if (loggedInAdminId.trim() !== protectedId) {
        console.warn("Logged in admin id does not match the protected admin id.");
        alert("You are not allowed to edit this account.");
        return;
      } else {
        console.log("Logged in admin is the protected admin. Edit allowed.");
      }
    }

    // Retrieve other data from the row
    const name = row.getAttribute("data-name");
    const email = row.getAttribute("data-email");
    const role = row.getAttribute("data-role");
    // const status = row.getAttribute("data-status");
    const password = row.getAttribute("data-password");
    const imgSrc = row.getAttribute("data-img");

    console.log("Populating edit modal with the following values:");
    console.log("Name:", name);
    console.log("Email:", email);
    console.log("Role:", role);
    // console.log("Status:", status);
    console.log("Password:", password);
    console.log("Image source:", imgSrc);

    // Populate the modal fields
    document.getElementById("edit-id").value = adminId;
    document.getElementById("edit-name").value = name;
    document.getElementById("edit-email").value = email;
    document.getElementById("edit-role").value = role;
    // document.getElementById("edit-status-display").value = status;
    document.getElementById("edit-password").value = password;
    document.getElementById("edit-img-preview").src = imgSrc;
    document.getElementById("edit-imgBase64").value = imgSrc;

    console.log("Edit modal populated. Displaying modal now.");
    editModal.style.display = "block";
  });
});
