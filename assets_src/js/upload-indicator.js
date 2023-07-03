export function addUploadIndicator(exercise) {
  exercise.classList.add("uploaded");
  const title = exercise.querySelector(".admonition-title");

  if (!title.querySelector(".upload-indicator")) {
    const indicator = document.createElement("span");
    indicator.classList.add("upload-indicator");
    title.appendChild(indicator);
  }
}