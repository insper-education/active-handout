import { CodeJar } from "codejar";
import hljs from "highlight.js";
import { getKey } from "../client-db";
import { initFiles } from "./files";
import {
  queryEditors,
  queryFileContents,
  queryFileTabs,
  queryResetButton,
} from "./queries";
import { buildReadonlyCodeJar } from "./readonly-codejar";

export function initCodeEditorPlugin() {
  const editors = queryEditors();
  editors.forEach(initEditor);
}

export function initEditor(editor) {
  const fileContents = Array.from(queryFileContents(editor));
  const tabs = queryFileTabs(editor);

  const files = initFiles(fileContents);

  fileContents.forEach(buildInitSubEditor(editor, files));

  setupTabs(tabs, editor);
}

function buildInitSubEditor(editor, files) {
  const resetBtn = queryResetButton(editor);

  return (fileContent) => {
    const filename = fileContent.getAttribute("data-filename");
    const readonly = fileContent.getAttribute("data-readonly") === "true";
    const language = fileContent.getAttribute("data-language");
    const initialCode = files[filename].code;

    let jar;
    if (readonly) {
      jar = buildReadonlyCodeJar(fileContent, initialCode);
    } else {
      jar = buildCodeJar(fileContent, language);
      const onUpdate = buildOnUpdateCallback(
        files,
        filename,
        fileContent,
        editor
      );
      jar.onUpdate(onUpdate);
      const prevCode = loadFileFromLocalStorage(fileContent, filename);
      if (prevCode) {
        jar.updateCode(prevCode);
        onUpdate(prevCode);
      } else {
        jar.updateCode(initialCode);
        onUpdate(initialCode);
      }

      resetBtn.addEventListener("click", () => {
        jar.updateCode(initialCode);
        onUpdate(initialCode);
      });
    }

    return [filename, jar];
  };
}

function buildOnUpdateCallback(files, filename, fileContent, editor) {
  return (code) => {
    files[filename].code = code;

    saveFileIfInExercise(fileContent, filename, code);

    // Dispatch event so others can do whatever they want with the new code
    const event = new CustomEvent("contentchanged", {
      detail: { filename, code, files },
    });
    editor.dispatchEvent(event);
  };
}

function buildCodeJar(fileContent, language) {
  return CodeJar(fileContent, (element) => {
    if (language) {
      hljs.configure({
        languages: [language],
      });
    }
    hljs.highlightElement(element);
  });
}

function setupTabs(tabs, editor) {
  tabs.forEach((tab, idx) => {
    tab.addEventListener("click", () => {
      editor.style.setProperty("--current-file", idx);

      tabs.forEach((t) => t.classList.remove("active"));
      tab.classList.add("active");
    });
  });
}

function saveFileIfInExercise(fileContent, filename, code) {
  const key = getFilenameKey(fileContent, filename);
  if (!key) return;
  localStorage.setItem(key, code);
}

function loadFileFromLocalStorage(fileContent, filename) {
  const key = getFilenameKey(fileContent, filename);
  if (!key) return null;
  return localStorage.getItem(key);
}

function getFilenameKey(fileContent, filename) {
  const exercise = fileContent.closest(".exercise");
  if (!exercise) return null;

  const exerciseKey = getKey(exercise);
  return `${exerciseKey}-${filename}`;
}
