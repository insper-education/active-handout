
{
    // HACK: depends on mkdocs-material
    let style_long_questions = document.head.appendChild(document.createElement("style"));
    style_long_questions.innerText = `
    .admonition.question.long  textarea {
        display: block;
        width: 100%;
        margin-bottom: 5px;
        border: 2px solid #555555;
        border-radius: 3px;
    }

    .admonition.question.long input[type=button] {
        background-color: var(--md-primary-fg-color);
        color: var(--md-primary-bg-color);
        margin-left: auto;
        margin-right: 0px;
        padding: 5px;
        border-radius: 3px;
        display: block;
    }
    `;


    let document_addr = document.location.pathname;

    let button_text = "Validate";
    if (window.ihandout_config["long-questions"]) {
        button_text = window.ihandout_config["long-questions"]["text"];
    }

    let long_questions = document.querySelectorAll(".admonition.question.long");

    long_questions.forEach((item, k) => {
        let answer = item.querySelector(".details");
        if (!answer) return;
        answer.remove();
        item.dataset.answered = false;

        let storage_key = document_addr + "/long-question-" + k;
        let previous_answer = localStorage.getItem(storage_key);

        let answer_line = document.createElement("div");
        answer_line.classList.add("answer-line");
        item.appendChild(answer_line);

        let text = document.createElement("textarea");
        text.setAttribute("rows", "10")
        text.setAttribute("cols", "80")
        text.setAttribute("wrap", "hard")

        if (previous_answer) {
            text.value = previous_answer;
            text.disabled = true;
            answer_line.appendChild(text);
            item.appendChild(answer);
            item.dataset.answered = true;
        } else {
            let validate_button = document.createElement("input");
            validate_button.type = "button";
            validate_button.value = button_text;

            answer_line.appendChild(text);
            answer_line.appendChild(validate_button);

            validate_button.addEventListener("click", (evt) => {
                let student_answer = text.value.trim();
                if (student_answer != "") {
                    item.appendChild(answer);
                    localStorage[storage_key] = student_answer;
                    text.disabled = true;
                    validate_button.remove();
                    item.dataset.answered = true;
                }

            });
        }

    });
}
