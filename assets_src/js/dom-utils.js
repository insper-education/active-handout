export function createElementWithClasses(tagName, classList, parent) {
  const el = document.createElement(tagName);
  for (let className of classList) {
    el.classList.add(className);
  }
  if (parent) {
    parent.appendChild(el);
  }
  return el;
}

export function dispatchSectionOpenedEvent(section) {
  const event = new CustomEvent("section-opened", { detail: section });
  window.dispatchEvent(event);
}

export function dispatchRememberEvent(element) {
  const event = new CustomEvent("remember");
  element.dispatchEvent(event);
}

export function absoluteURL(relative) {
  const base = window.location.href;
  const stack = base.split("/");
  const parts = relative.split("/");

  // Remove trailing empty string
  if (!stack[stack.length - 1]) stack.pop();

  for (let part of parts) {
    if (part == ".") continue;
    if (part == "..") stack.pop();
    else stack.push(part);
  }

  // Add trailing empty string
  if (stack[stack.length - 1]) stack.push("");

  return stack.join("/");
}

export function deepCopy(dict) {
  return JSON.parse(JSON.stringify(dict));
}
