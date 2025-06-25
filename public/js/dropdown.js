function toggleButton() {
  const checkbox = document.getElementById("agreement");
  const button = document.getElementById("proceedBtn");
  button.disabled = !checkbox.checked; // Enable when checked, disable when unchecked
}

function toggleDropdownVoter() {
  const dropdownMenu = document.querySelector(".dropdown-menu");
  dropdownMenu.style.display = dropdownMenu.style.display === "block" ? "none" : "block";
}

window.onclick = function (event) {
  if (!event.target.matches(".dropdown, .dropdown *")) {
    const dropdownMenu = document.querySelector(".dropdown-menu");
    if (dropdownMenu) {
      dropdownMenu.style.display = "none";
    }
  }
};
