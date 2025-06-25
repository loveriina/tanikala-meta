let notificationContainer;

function createNotification(message, type = "success", duration = 4000) {
  if (!notificationContainer) {
    notificationContainer = document.createElement("div");
    notificationContainer.classList.add("notification-wrapper");
    document.body.appendChild(notificationContainer);
  }

  const notification = document.createElement("div");
  notification.classList.add("notification", type);
  notification.innerHTML = `
        <div class="notification-icon">
            <i class="fa ${
              type === "success" ? "fa-check-circle" : (type = "email" ? "fa-envelope" : type === "login" ? "fa-sign-in" : type === "error" ? "fa-exclamation-triangle" : type === "logout" ? "fa-sign-out" : type === "register" ? "fa-user-plus" : type === "info" ? "fa-info-circle" : "")
            }"></i>
        </div>
        <div class="notification-message">${message}</div>
        <button class="notification-close">&times;</button>
    `;

  notificationContainer.appendChild(notification);

  // Auto-remove after duration
  setTimeout(() => {
    notification.classList.add("hide");
    setTimeout(() => notification.remove(), 500);
  }, duration);

  // Close button functionality
  notification.querySelector(".notification-close").addEventListener("click", () => {
    notification.classList.add("hide");
    setTimeout(() => notification.remove(), 500);
  });
}

// Export as a module
export { createNotification };
