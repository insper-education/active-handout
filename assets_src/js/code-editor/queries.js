export function queryEditors() {
  return document.querySelectorAll(".code-editor");
}

export function queryFileContents(container) {
  return container.querySelectorAll(".file-content");
}

export function queryFileTabs(container) {
  return container.querySelectorAll(".file-tab .tab");
}

export function queryResetButton(container) {
  return container.querySelector(".editor-reset-btn");
}
