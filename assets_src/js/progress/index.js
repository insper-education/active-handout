import { getValue, setValue } from "../client-db";
import { dispatchSectionOpenedEvent } from "../dom-utils";
import {
  queryNextSection,
  queryProgressBtns,
  queryProgressContainer,
} from "./queries";

export function initProgressPlugin() {
  queryProgressBtns().forEach((progressBtn) => {
    function progress() {
      const nextSection = queryNextSection(progressBtn);
      if (nextSection) {
        nextSection.classList.add("show");
        dispatchSectionOpenedEvent(nextSection);
      }

      const container = queryProgressContainer(progressBtn);
      container.classList.add("hide");
    }

    progressBtn.addEventListener("click", (event) => {
      progress();
      setValue(progressBtn, true);

      event.preventDefault();
      event.stopImmediatePropagation();
    });

    if (getValue(progressBtn)) {
      progress();
    }
  });
}
