import { queryAllInputs } from "./queries";

export function disableInputs(container) {
  const allInputs = queryAllInputs(container);
  for (const input of allInputs) {
    input.setAttribute("disabled", true);
  }
}

export function markDone(exercise) {
  exercise.classList.add("done");
}

export function markNotDone(exercise) {
  exercise.classList.remove("done");
}

export function dispatchResetHandoutEvent() {
  const event = new CustomEvent("reset-handout");
  window.dispatchEvent(event);
}
