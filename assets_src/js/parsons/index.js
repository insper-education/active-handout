import { getSubmissionCache, sendAndCacheData } from "../telemetry";
import {
  queryAddIndentButton,
  queryCorrectAnswer,
  queryDragArea,
  queryDropArea,
  queryParsonsExercises,
  queryParsonsLine,
  queryParsonsLineContainers,
  queryRemoveIndentButton,
  queryResetButton,
  querySubmitButton,
} from "./queries";
import {
  addIndent,
  createSortables,
  disableIndentButtons,
  finishParsonsExercise,
  removeIndent,
  resetExercise,
  saveLineIndentCount,
  submitExercise,
} from "./utils";

export function initParsonsPlugin() {
  queryParsonsExercises().forEach((exercise) => {
    const sortables = registerListeners(exercise);

    const { value: prevAnswer, submitted } = getSubmissionCache(exercise);
    if (prevAnswer !== null) {
      const hasAnswer = queryCorrectAnswer(exercise)?.innerText !== undefined;
      sortables.forEach((sortable) => sortable.option("disabled", true));
      disableIndentButtons(exercise);
      finishParsonsExercise(exercise, prevAnswer.correct, hasAnswer);
      if (!submitted) {
        sendAndCacheData(exercise, prevAnswer, prevAnswer.correct ? 1 : 0);
      }
    }
  });
}

function registerListeners(exercise) {
  const slug = exercise.getAttribute("data-slug");
  const dragArea = queryDragArea(exercise);
  const dropArea = queryDropArea(exercise);
  const lineContainers = queryParsonsLineContainers(exercise);

  const sortables = createSortables(slug, dragArea, dropArea);

  window.addEventListener("reset-handout", () => {
    resetExercise(exercise, sortables);
  });

  lineContainers.forEach((lineContainer) => {
    const addIndentBtn = queryAddIndentButton(lineContainer);
    const removeIndentBtn = queryRemoveIndentButton(lineContainer);
    const line = queryParsonsLine(lineContainer);

    addIndentBtn?.addEventListener("click", (event) => {
      event.preventDefault();
      addIndent(line);
      saveLineIndentCount(slug, lineContainer);
      removeIndentBtn.removeAttribute("disabled");
    });

    removeIndentBtn?.addEventListener("click", (event) => {
      event.preventDefault();
      removeIndent(line);
      saveLineIndentCount(slug, lineContainer);
      if (!line.querySelector(".parsons-indent")) {
        removeIndentBtn.setAttribute("disabled", "disabled");
      }
    });
  });

  queryResetButton(exercise)?.addEventListener("click", (event) => {
    event.preventDefault();
    resetExercise(exercise, sortables);
  });
  querySubmitButton(exercise).addEventListener("click", (event) => {
    event.preventDefault();
    submitExercise(exercise);
  });

  return sortables;
}
