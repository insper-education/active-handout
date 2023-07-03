export function queryParsonsExercises() {
  return document.querySelectorAll("div.admonition.exercise.parsons");
}

export function queryDragArea(exercise) {
  return exercise.querySelector(".parsons-drag-area");
}

export function queryDropArea(exercise) {
  return exercise.querySelector(".parsons-drop-area");
}

export function queryCorrectAnswer(exercise) {
  return exercise.querySelector(".parsons-answer");
}

export function queryParsonsLineContainers(container) {
  return container.querySelectorAll(".parsons-line-container");
}

export function queryParsonsLine(container) {
  return container.querySelector(".parsons-line");
}

export function queryResetButton(exercise) {
  return exercise.querySelector("input[name=resetButton]");
}

export function querySubmitButton(exercise) {
  return exercise.querySelector("input[name=sendButton]");
}

export function queryIndents(container) {
  return container.querySelectorAll(".parsons-indent");
}

export function queryIndentButtons(container) {
  return container.querySelectorAll(".indent-btn");
}

export function queryAddIndentButton(container) {
  return container.querySelector(".indent-btn--add");
}

export function queryRemoveIndentButton(container) {
  return container.querySelector(".indent-btn--remove");
}
