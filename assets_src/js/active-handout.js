import { initTabbedPlugin } from "./tabbed-content";
import { initProgressPlugin } from "./progress";
import { initMenuPlugin } from "./menu";
import { initExercisePlugin } from "./exercise";
import { initFooterPlugin } from "./footnote";
import { initParsonsPlugin } from "./parsons";
import { initStyle } from "./style";
import { initAuth } from "./auth";
import { initCodeEditorPlugin, initEditor } from "./code-editor";
import * as clientDB from "./client-db";
import { getSubmissionCache, sendAndCacheData } from "./telemetry";
import { initDashboard } from "./dashboard";
import { initClipBoard } from "./clipboard-code";

function onLoad() {
  initAuth();

  initTabbedPlugin();

  initStyle();
  initDashboard();
  initProgressPlugin();
  initExercisePlugin();
  initParsonsPlugin();
  initFooterPlugin();
  initMenuPlugin();
  initCodeEditorPlugin();

  initClipBoard();
  applyRegisteredInitializers();
}

function applyRegisteredInitializers() {
  window.initializers.forEach((initialize) => initialize());
  window.initialized = true;
}

export function initActiveHandout() {
  window.clientDB = clientDB;
  window.sendAndCacheData = sendAndCacheData;
  window.getSubmissionCache = getSubmissionCache;
  window.initEditor = initEditor;

  if (document.readyState !== "loading") {
    onLoad();
  } else {
    document.addEventListener("DOMContentLoaded", onLoad);
  }
}
