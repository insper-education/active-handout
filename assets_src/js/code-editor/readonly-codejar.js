import hljs from "highlight.js";

export function buildReadonlyCodeJar(parent, code) {
  const language = parent.getAttribute("data-language");
  parent.textContent = "";

  const preElement = document.createElement("pre");
  preElement.classList.add("readonly-code");
  parent.appendChild(preElement);

  const codeElement = document.createElement("code");
  preElement.appendChild(codeElement);
  codeElement.textContent = code;

  if (language) {
    hljs.configure({
      languages: [language],
    });
  }
  hljs.highlightElement(codeElement);

  return {
    updateCode: () => {},
  };
}
