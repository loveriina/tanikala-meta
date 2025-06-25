// notificationHandler.js

// Utility to pick the right icon for each popup type
function getPopupIcon(type) {
  switch (type) {
    case "success":   return "/components/popup-checkmark.png";
    case "error":     return "/components/popup-error.png";
    case "email":     return "/components/popup-envelope.png";
    case "login":     return "/components/popup-login.png";
    case "logout":    return "/components/popup-logout.png";
    case "register":  return "/components/popup-register.png";
    case "info":      return "/components/popup-info.png";
    default:          return "/components/popup-info.png";
  }
}

// Wrapper around bigPopup to match your old notify API
function notify(message, type = "error", duration = 3000) {
  // Title = capitalized type (e.g. "Error", "Success")
  const title = type.charAt(0).toUpperCase() + type.slice(1);

  bigPopup(
    title,
    message,
    {
      imageSrc: getPopupIcon(type),
      buttonText: "Dismiss",
      timeout: duration
    }
  );
}

// Read URL params once
const urlParams = new URLSearchParams(window.location.search);

// Helper to replace the URL so you don't get repeated popups on reload
function clearUrl() {
  history.replaceState({}, document.title, window.location.pathname);
}

// === All your existing URL-param handlers, rewritten to use bigPopup ===

if (urlParams.get("logged_out") === "true") {
  notify("You have successfully logged out.", "logout", 30000);
  clearUrl();
}

if (urlParams.get("logged_in") === "true") {
  notify("You have successfully logged in to your account.", "login", 30000);
  clearUrl();
}

if (urlParams.get("error") === "not_registered") {
  notify(
    "You are not eligible to vote as you are not recognized as a registered voter in this election.",
    "error",
    30000
  );
  clearUrl();
}

if (urlParams.get("error") === "already_voted") {
  notify("You have already voted for this election.", "error", 30000);
  clearUrl();
}

if (urlParams.get("devAlert") === "votingAgain") {
  notify("You are a developer. You can vote again for testing purposes.", "info", 30000);
  clearUrl();
}

if (urlParams.get("new_reg") === "true") {
  notify("You have successfully registered for voting.", "register", 30000);
  clearUrl();
}

if (urlParams.get("registered") === "true") {
  notify("You have already registered for voting.", "register", 30000);
  clearUrl();
}

if (urlParams.get("message_submitted") === "true") {
  notify("Your message has been submitted.", "success", 30000);
  clearUrl();
}

if (urlParams.get("otp_sent") === "true") {
  notify("Check your email for the OTP.", "email", 8000);
  clearUrl();
}

if (urlParams.get("error") === "old_password_incorrect") {
  notify("Old password is incorrect!", "error", 30000);
  clearUrl();
}

// (Optional) Catch-all for any other ?error=… codes you might add later
// if (urlParams.has("error")) {
//   const err = urlParams.get("error");
//   notify(`Error: ${err}`, "error", 4000);
//   clearUrl();
// }
