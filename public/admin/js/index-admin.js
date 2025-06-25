// Toggle the visibility of the dropdown menu
function toggleDropdown() {
  var dropdown = document.querySelector(".dropdown");
  var dropdownMenu = document.querySelector(".dropdown-menu");

  // Toggle active class to show/hide the dropdown
  dropdown.classList.toggle("active");

  // Toggle visibility of the dropdown menu
  if (dropdownMenu.style.display === "block") {
    dropdownMenu.style.display = "none";
  } else {
    dropdownMenu.style.display = "block";
  }
}

// SHOW SETTINGS
function showSettings() {
  var settingsMenu = document.getElementById("settings-menu");
  if (settingsMenu.style.display === "none" || settingsMenu.style.display === "") {
    settingsMenu.style.display = "block";
  } else {
    settingsMenu.style.display = "none";
  }
}

// // FOOTER
// function updateDateTime() {
//   var now = new Date();
//   var formattedDate = now
//     .toLocaleDateString("en-PH", {
//       year: "numeric",
//       month: "long",
//       day: "numeric",
//     })
//     .toUpperCase();
//   var formattedTime = now.toLocaleTimeString("en-PH", {
//     hour: "2-digit",
//     minute: "2-digit",
//     hour12: true,
//     timeZone: "Asia/Manila",
//   });
//   document.getElementById("datetime").innerHTML = `${formattedDate} - ${formattedTime}`;
// }

// updateDateTime();
// setInterval(updateDateTime, 45000); // update every 45 seconds

// EDIT ELECTION NAME
// function showPopup(popupId, parentId = "main", overlayId = "container-overlay") {
//   let form = document.getElementById(popupId);
//   let parent = document.getElementById(parentId);
//   let overlay = document.getElementById(overlayId);

//   if (form.style.display == "none" || form.style.display == "") {
//     form.style.display = "block";

//     overlay.classList.add("overlay");

//     parent.style.overflow = "hidden";

//     // Add the centering styles to the form when it's visible
//     form.style.position = "absolute";
//     form.style.top = "50%";
//     form.style.left = "50%";
//     form.style.transform = "translate(-50%, -50%)"; // This centers it perfectly
//   } else {
//     form.style.display = "none";

//     overlay.classList.remove("overlay");

//     parent.style.overflow = "auto"; // This re-enables scrolling
//   }
// }

function showPopup(popupId, parentId = "main", overlayId = "container-overlay") {
  let form = document.getElementById(popupId);
  let parent = document.getElementById(parentId);
  let overlay = document.getElementById(overlayId);

  if (form.style.display == "none" || form.style.display == "") {
    form.style.display = "block";

    overlay.classList.add("overlay");

    parent.style.overflow = "hidden";
    parent.style.padding = 0;

    // Calculate the scroll position of the parent and window height
    let parentScrollTop = parent.scrollTop;
    let parentHeight = parent.clientHeight;
    let formHeight = form.offsetHeight;

    // Adjust the form's position to center it in the visible viewport
    let topPosition = parentHeight / 2 - formHeight / 2 + parentScrollTop;

    form.style.position = "absolute";
    form.style.top = `${topPosition}px`; // Dynamically adjust based on scroll
    form.style.left = "50%";
    form.style.transform = "translateX(-50%)"; // Center horizontally
  } else {
    form.style.display = "none";

    overlay.classList.remove("overlay");

    parent.style.overflow = "auto"; // Re-enable scrolling
    parent.style.padding = "1.5rem";
  }
}
