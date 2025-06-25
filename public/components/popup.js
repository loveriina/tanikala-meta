(function (window, document) {
  const DEFAULT_TIMEOUT = 0; // auto-hide after 10s
  const DEFAULT_BUTTON_TEXT = "Next";
  const DEFAULT_IMAGE_SRC = "/components/popup-checkmark.png";

  // Create the popup container once
  const container = document.createElement("div");
  container.id = "popupContainer";
  container.innerHTML = `
        <div class="popup-vote">
          <img src="${DEFAULT_IMAGE_SRC}" class="popup-img" />
          <h2 class="popup-title"></h2>
          <p class="popup-info"></p>
          <button id="popupNextBtn"></button>
        </div>
      `;
  document.body.appendChild(container);

  let hideTimeout = null;
  const titleEl = container.querySelector(".popup-title");
  const infoEl = container.querySelector(".popup-info");
  const imgEl = container.querySelector(".popup-img");
  const nextBtn = container.querySelector("#popupNextBtn");

  function hidePopup() {
    container.classList.remove("active"); // hides via CSS
    if (hideTimeout) {
      clearTimeout(hideTimeout);
      hideTimeout = null;
    }
  }

  window.bigPopup = function showPopup(title, message, opts = {}) {
    titleEl.innerHTML = title;
    infoEl.textContent = message;
    nextBtn.textContent = opts.buttonText || DEFAULT_BUTTON_TEXT;

    // Set image source
    imgEl.src = opts.imageSrc || DEFAULT_IMAGE_SRC;

    // remove old handler & attach new
    nextBtn.replaceWith(nextBtn.cloneNode(true));
    const btn = container.querySelector("#popupNextBtn");
    btn.addEventListener("click", () => {
      if (typeof opts.onButtonClick === "function") {
        opts.onButtonClick();
      } else {
        hidePopup();
      }
    });

    container.classList.add("active"); // show via CSS

    const t = opts.timeout != null ? opts.timeout : DEFAULT_TIMEOUT;
    if (t > 0) {
      if (hideTimeout) clearTimeout(hideTimeout);
      hideTimeout = setTimeout(hidePopup, t);
    }
  };
})(window, document);
