export function queryAllExercises() {
  return document.querySelectorAll(".admonition.exercise");
}

export function queryExerciseForm(exercise) {
  return exercise.querySelector(".exercise-form");
}

export function queryTextExercises() {
  return document.querySelectorAll(
    "div.admonition.exercise.short, " +
      "div.admonition.exercise.medium, " +
      "div.admonition.exercise.long"
  );
}

export function queryChoiceExercises() {
  return document.querySelectorAll("div.admonition.exercise.choice");
}

export function querySelfProgressExercises() {
  return document.querySelectorAll("div.admonition.exercise.self-progress");
}

export function queryTextInputs(el) {
  return el.querySelector("input[name='data'], textarea[name='data']");
}

export function queryOptions(el) {
  return el.querySelectorAll("input[name='data'][type='radio']");
}

export function queryCorrectOptionIdx(el) {
  return el.getAttribute("data-answer-idx");
}

export function queryOption(el, value) {
  return el.querySelector(`input[name='data'][value='${value}']`);
}

export function queryParentAlternative(option) {
  return option.closest(".alternative");
}

export function queryAllInputs(el) {
  return el.querySelectorAll("input,textarea");
}
