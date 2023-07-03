export function initStyle() {
  const header = document.getElementsByClassName("ah-header")[0];
  document.documentElement.style.setProperty(
    "--header-height",
    `${header.offsetHeight}px`
  );

  // We listen to the resize event
  window.addEventListener("resize", () => {
    // We execute the same script as before
    let vh = window.innerHeight * 0.01;
    document.documentElement.style.setProperty("--vh", `${vh}px`);
  });

  initTextArea();
}

function initTextArea() {
  const growers = document.querySelectorAll(".grow-wrap");

  growers.forEach((grower) => {
    const textarea = grower.querySelector("textarea");
    textarea.addEventListener("input", () => {
      grower.dataset.replicatedValue = textarea.value;
    });
  });
}
