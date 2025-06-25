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

document.querySelector(".dropdown-toggle").addEventListener("click", function () {
  const dropdown = this.parentElement.parentElement;
  dropdown.classList.toggle("active");
});

// Close dropdown if clicked outside
window.addEventListener("click", function (e) {
  const dropdown = document.querySelector(".dropdown");
  if (!dropdown.contains(e.target)) {
    dropdown.classList.remove("active");
  }
});
