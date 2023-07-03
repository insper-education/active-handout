import { getValue, setValue } from "../client-db";
import { getBreakpoint } from "../breakpoints";

const btnClass = "ah-menu-btn";
const navClass = "ah-navigation";
const menuOpenedKey = "menu-opened";

export function initMenuPlugin() {
  const nav = document.getElementsByClassName(navClass)[0];
  const navContainer = nav.getElementsByClassName("ah-nav-container")[0];
  const menuBtns = document.getElementsByClassName(btnClass);
  const closeMenuBtn = document.getElementsByClassName("close-menu")[0];

  if (prefersOpenMenu() && !menuIsOverContent()) {
    openMenu();
  }

  for (let menuBtn of menuBtns) {
    menuBtn.addEventListener("click", function (event) {
      event.stopPropagation();
      toggleMenu(menuBtn);
    });
  }

  const togglableItems = document.getElementsByClassName("ah-togglable-item");
  for (let item of togglableItems) {
    const handle = item.getElementsByClassName("ah-togglable-handle")[0];
    handle.addEventListener("click", function (event) {
      event.stopPropagation();
      item.classList.toggle("opened");
    });
  }

  const tocItems = document.getElementsByClassName("ah-toc-item");
  for (let item of tocItems) {
    item.addEventListener("click", function () {
      if (menuIsOverContent()) {
        closeMenu();
      }
    });
  }

  closeMenuBtn.addEventListener("click", closeMenu);

  document.addEventListener("click", function (event) {
    if (!nav.classList.contains("show") || !menuIsOverContent()) return;
    if (!navContainer.contains(event.target)) {
      closeMenu();
    }
  });

  removePreload();
}

function isMenuOpened() {
  return getNav().classList.contains("show");
}

function menuIsOverContent() {
  return window.innerWidth <= getBreakpoint("large");
}

function getNav() {
  return document.getElementsByClassName(navClass)[0];
}

function openMenu() {
  getNav().classList.add("show");
  setValue(menuOpenedKey, true);
}

function closeMenu() {
  getNav().classList.remove("show");
  setValue(menuOpenedKey, false);
}

function prefersOpenMenu() {
  const openedPref = getValue(menuOpenedKey);
  return openedPref && openedPref == "true";
}

function toggleMenu(menuBtn) {
  if (isMenuOpened(menuBtn)) {
    closeMenu();
  } else {
    openMenu();
  }
}

function removePreload() {
  setTimeout(() => {
    getNav().classList.remove("preload");
  }, 0);
}
