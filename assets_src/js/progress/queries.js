export function queryProgressBtns() {
  return document.querySelectorAll("button.progress");
}

export function queryNextSection(element) {
  const allSections = document.querySelectorAll(".progress-section");

  const currentSection = element.closest(".progress-section");

  let foundCurrent = false;
  for (let section of allSections) {
    if (foundCurrent) {
      return section;
    }
    if (section === currentSection) {
      foundCurrent = true;
    }
  }
  return null;
}

export function queryProgressContainer(progressBtn) {
  return progressBtn.closest(".ah-progress-container");
}
