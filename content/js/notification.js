const BOTTOM = "30px";
// HACK: depends on mkdocs-material styles
let style = document.head.appendChild(document.createElement("style"));
style.innerHTML = `
  .toast-container {
    display: flex;
    width: 100%;
    position: fixed;
    z-index: 10;
    padding-bottom: ${BOTTOM};
    bottom: 0;
  }
  .toast-inner-container {
    max-width: 100%;
    margin: 0 auto;
    padding: 0 0.5rem 0.5rem;
  }
  .toast {
    display: flex;
    align-items: center;
    width: 400px;
    max-width: 100%;
    box-shadow: 1px 1px 5px rgba(0, 0, 0, 0.5);
    text-align: center;
    border-radius: 5px;
    margin: 0 0 0.5rem;
    font-size: .8rem;
    -webkit-animation: fadein 0.5s;
    animation: fadein 0.5s;
  }
  .toast.hide {
    -webkit-animation: fadeout 0.5s;
    animation: fadeout 0.5s;
  }
  .toast .toast-content {
    padding: 16px 0 16px 16px;
    flex-grow: 1;
  }
  .toast button.toast-content {
    cursor: pointer;
  }
  .toast .close-icon {
    margin: 16px 16px 16px 0;
    width: 1rem;
    height: 1rem;
  }
  .toast .close-button {
    background-color: transparent;
    cursor: pointer;
    margin-left: 0.5rem;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  @keyframes fadein {
    from {
        transform: translateY(50px); 
        opacity: 0;
    }
    to {
      transform: translateY(0px); 
      opacity: 1;
    }
  }

  @keyframes fadeout {
    from {
        max-height: 200px; 
        opacity: 1;
    }
    to {
      max-height: 0px;
      opacity: 0;
    }
  }
  `;

const CONTAINER_ID = "toast-container";
const getOrCreateContainer = () => {
  let toastContainer = document.getElementById(CONTAINER_ID);
  if (toastContainer) return toastContainer;

  const footer = document.getElementsByTagName("footer")[0];

  toastContainer = document.createElement("div");
  toastContainer.className = "toast-container";

  const innerContainer = document.createElement("div");
  innerContainer.id = CONTAINER_ID;
  innerContainer.className = "toast-inner-container";
  toastContainer.appendChild(innerContainer);

  footer.appendChild(toastContainer);

  return innerContainer;
};

const createCloseButton = (onClick, color) => {
  const closeButton = document.createElement("button");
  closeButton.className = "close-button";
  closeButton.style.color = color;
  closeButton.innerHTML = `
    <svg xmlns="http://www.w3.org/2000/svg" class="close-icon" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
    </svg>
    `;
  closeButton.addEventListener("click", onClick);
  return closeButton;
};

const createContentElement = (text, onClick, color) => {
  let contentElement;
  if (onClick === undefined) {
    contentElement = document.createElement("span");
  } else {
    contentElement = document.createElement("button");
    contentElement.addEventListener("click", onClick);
    contentElement.style.color = color;
  }
  contentElement.className = "toast-content";
  contentElement.innerHTML = text;
  return contentElement;
};

const COLORS = {
  primary: "var(--md-primary-fg-color)",
  note: "#448aff",
  abstract: "#00b0ff",
  summary: "#00b0ff",
  tldr: "#00b0ff",
  info: "#00b8d4",
  todo: "#00b8d4",
  tip: "#00bfa5",
  hint: "#00bfa5",
  important: "#00bfa5",
  success: "#00c853",
  check: "#00c853",
  done: "#00c853",
  question: "#64dd17",
  help: "#64dd17",
  faq: "#64dd17",
  warning: "#ff9100",
  caution: "#ff9100",
  attention: "#ff9100",
  failure: "#ff5252",
  fail: "#ff5252",
  missing: "#ff5252",
  danger: "#ff1744",
  error: "#ff1744",
  bug: "#f50057",
  example: "#7c4dff",
  quote: "#9e9e9e",
  cite: "#9e9e9e",
};

/**
 * Show a toast notification
 * @param  {string} text The first number
 * @param  {object} options Configuration object
 * @param  {Number} options.timeout The timeout in milliseconds (optional)
 * @param  {string} options.color Text color. Options: "primary", "note", "abstract",
 *                        "summary", "tldr", "info", "todo", "tip", "hint",
 *                        "important", "success", "check", "done", "question",
 *                        "help", "faq", "warning", "caution", "attention",
 *                        "failure", "fail", "missing", "danger", "error",
 *                        "bug", "example", "quote", "cite", or any valid
 *                        css color. Default: "primary"
 * @param  {string} options.bgColor Background color. Default: "#fff"
 * @param  {callback} options.onClick Handler for the click event (optional)
 */
function toast(text, options) {
  options = options || {};
  let { timeout, color, bgColor, onClick } = options;
  const toastContainer = getOrCreateContainer();
  if (!color) color = "#fff";
  if (!bgColor) bgColor = "primary";
  if (COLORS[color]) color = COLORS[color];
  if (COLORS[bgColor]) bgColor = COLORS[bgColor];

  const toast = document.createElement("div");
  toast.className = "toast";
  toast.style.backgroundColor = bgColor;
  toast.style.color = color;

  toast.appendChild(createContentElement(text, onClick, color));

  const hideToast = () => {
    toast.classList.add("hide");
    setTimeout(() => toast.remove(), 500);
  };

  toast.appendChild(createCloseButton(hideToast, color));
  toastContainer.appendChild(toast);

  if (timeout) setTimeout(hideToast, timeout);
}

export default { toast };
