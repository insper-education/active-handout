import { removeValue } from "../client-db";
import { dispatchRememberEvent } from "../dom-utils";
import { getSubmissionCache, sendAndCacheData } from "../telemetry";
import {
  queryChoiceExercises,
  querySelfProgressExercises,
  queryOption,
  queryOptions,
  queryTextInputs as queryTextInput,
  queryTextExercises,
  queryCorrectOptionIdx,
  queryParentAlternative,
  queryAllExercises,
  queryExerciseForm,
} from "./queries";
import { disableInputs, dispatchResetHandoutEvent, markDone } from "./utils";

export function initExercisePlugin() {
  initExerciseForms();

  initTextExercises();
  initChoiceExercises();
  initSelfProgressExercises();

  const resetHandoutButton = document.getElementById("resetHandoutButton");

  if (resetHandoutButton) {
    resetHandoutButton.addEventListener("click", function () {
      const exercises = queryAllExercises();
      for (const ex of exercises) {
        removeValue(ex);
      }
      dispatchResetHandoutEvent();
      setTimeout(() => {
        location.reload();
      }, 200);
    });
  }

  document.querySelectorAll(".editable-button").forEach((val) => {
    const exerciseRoot = val.closest(".exercise.admonition");

    val.addEventListener("click", (evt) => {
      evt.preventDefault();
      exerciseRoot.querySelectorAll(":disabled").forEach((el) => {
        el.disabled = false;
      });
    });
  });
}

function initExerciseForms() {
  const exercises = queryAllExercises();
  for (const exercise of exercises) {
    const form = queryExerciseForm(exercise);

    form.addEventListener("submit", (event) => {
      event.preventDefault();
      event.stopImmediatePropagation();

      disableInputs(form);
      markDone(exercise);
      dispatchRememberEvent(exercise);
    });
  }
}

function initTextExercises() {
  queryTextExercises().forEach((exercise) => {
    const input = queryTextInput(exercise);

    exercise.addEventListener("remember", () => {
      sendAndCacheData(exercise, input.value, 1);
    });

    const { value: prevAnswer, submitted } = getSubmissionCache(exercise);
    if (prevAnswer !== null) {
      input.value = prevAnswer;
      const growWrap = input.closest(".grow-wrap");
      if (growWrap) {
        growWrap.dataset.replicatedValue = prevAnswer;
      }
      disableInputs(exercise);
      markDone(exercise);

      if (!submitted) {
        sendAndCacheData(exercise, prevAnswer, 1);
      }
    }
  });
}

function initChoiceExercises() {
  queryChoiceExercises().forEach((exercise) => {
    const choices = queryOptions(exercise);
    const correctIdx = queryCorrectOptionIdx(exercise);

    function showResults(shouldSubmit) {
      const hasCorrectAnswer = correctIdx >= 0;

      for (let choice of choices) {
        const alternative = queryParentAlternative(choice);
        if (hasCorrectAnswer) {
          if (correctIdx === choice.value) {
            alternative.classList.add("correct");
            if (choice.checked) {
              exercise.classList.add("correct");
            }
          } else {
            alternative.classList.add("wrong");
            if (choice.checked) {
              exercise.classList.add("wrong");
            }
          }
        }

        if (shouldSubmit && choice.checked) {
          const points = correctIdx === choice.value ? 1 : 0;
          sendAndCacheData(exercise, choice.value, points);
        }
      }
    }

    exercise.addEventListener("remember", () => {
      showResults(true);
    });

    const { value: prevAnswer, submitted } = getSubmissionCache(exercise);
    if (prevAnswer !== null) {
      const option = queryOption(exercise, prevAnswer);
      const alternative = queryParentAlternative(option);
      option.setAttribute("checked", true);
      alternative.classList.add("selected");

      disableInputs(exercise);
      markDone(exercise);

      showResults(!submitted);
    }
  });
}

function initSelfProgressExercises() {
  querySelfProgressExercises().forEach((exercise) => {
    exercise.addEventListener("remember", () => {
      disableInputs(exercise);
      markDone(exercise);
      sendAndCacheData(exercise, true, 1);
    });

    const { value: prevAnswer, submitted } = getSubmissionCache(exercise);
    if (prevAnswer !== null) {
      disableInputs(exercise);
      markDone(exercise);

      if (!submitted) {
        sendAndCacheData(exercise, true, 1);
      }
    }
  });
}
