import { getBreakpoint } from "../breakpoints";

/*
The footnote is structured as follows:
<span class="footnote-container">
  <a class="footnote-anchor">Referenced text goes here</a>
  <div class="footnote-card">
    <li class="footnote-content">Footnote text goes here</li
  </div>
</span>
*/
export function initFooterPlugin() {
  window.addEventListener("section-opened", (event) => {
    const openedSection = event.detail;
    if (openedSection) {
      initFootnotes(openedSection);
    }
  });

  initFootnotes(document);
}

function initFootnotes(container) {
  const contentRect = document
    .getElementsByClassName("ah-content")[0]
    .getBoundingClientRect();

  const footnoteLinks = container.querySelectorAll(
    ".progress-section.show .footnote-ref"
  );

  for (let footnoteLink of footnoteLinks) {
    initFootnote(footnoteLink, contentRect);
  }
}

function initFootnote(footnoteLink, contentRect) {
  const footnoteRef = findRef(footnoteLink);
  const note = findNote(footnoteLink);
  const footnoteCard = setupCard(note);
  const footnoteCloseBtn = setupCloseBtn(footnoteCard);
  const footnoteContainer = setupContainer(footnoteRef, footnoteCard);
  setupCallbacks(footnoteContainer, footnoteRef, footnoteCloseBtn);

  setCustomProps(footnoteContainer, footnoteCard, contentRect);
}

function setupCard(note) {
  const footnoteCard = document.createElement("div");
  footnoteCard.classList.add("footnote-card");
  note.classList.add("footnote-content");
  footnoteCard.appendChild(note);

  return footnoteCard;
}

function setupContainer(footnoteRef, footnoteCard) {
  const footnoteContainer = document.createElement("span");
  footnoteContainer.classList.add("footnote-container");
  if (window.innerWidth > getBreakpoint("large", 1440)) {
    footnoteContainer.classList.add("opened");
  }

  // Move to container
  footnoteRef.parentElement.replaceChild(footnoteContainer, footnoteRef);
  footnoteContainer.appendChild(footnoteRef);
  footnoteContainer.appendChild(footnoteCard);

  return footnoteContainer;
}

function setupCloseBtn(footnoteCard) {
  const footnoteCloseBtn = document.createElement("button");
  footnoteCloseBtn.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512"><!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --><path d="M310.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L160 210.7 54.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L114.7 256 9.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L160 301.3 265.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L205.3 256 310.6 150.6z"/></svg>`;
  footnoteCloseBtn.classList.add(
    "footnote-close-btn",
    "ah-button",
    "ah-button--borderless"
  );
  footnoteCard.insertBefore(footnoteCloseBtn, footnoteCard.firstChild);
  return footnoteCloseBtn;
}

function setupCallbacks(footnoteContainer, footnoteRef, footnoteCloseBtn) {
  const openedClass = "opened";

  footnoteRef.classList.add("footnote-anchor");
  footnoteRef.addEventListener("click", (event) => {
    event.preventDefault();
    footnoteContainer.classList.toggle(openedClass);
  });

  footnoteCloseBtn.addEventListener("click", () => {
    footnoteContainer.classList.remove(openedClass);
  });
}

function findRef(footnoteLink) {
  return footnoteLink.closest("sup").previousElementSibling;
}

function findNote(footnoteLink) {
  const noteId = footnoteLink.getAttribute("href").substring(1);
  return document.getElementById(noteId);
}

function setCustomProps(footnoteContainer, footnoteCard, contentRect) {
  const offsetX = footnoteContainer.getBoundingClientRect().left;
  const distX = contentRect.right - offsetX;
  footnoteCard.style.setProperty("--dist-x", `${distX}px`);
  footnoteCard.style.setProperty(
    "--offset-x",
    `${offsetX - contentRect.left}px`
  );
}
