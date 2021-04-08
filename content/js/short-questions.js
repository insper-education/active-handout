{
    // HACK: depends on mkdocs-material
    let style_short_questions = document.head.appendChild(document.createElement("style"));
    style_short_questions.innerText = `
    .admonition.question.short  input[type=text] {
        border: 1px solid #555555;
        border-radius: 3px;
    }

    .admonition.question.short input[type=button] {
        background-color: var(--md-primary-fg-color);
        color: var(--md-primary-bg-color);
        
        margin-left: 10px;
        margin-right: 10px;
        padding: 5px;
        border-radius: 3px;
    }

    .admonition.question.short > .answer-line {
        display: flex;
        flex-direction: row;
        width: 100%;
    }

    .answer-line > input[type=text] {
        flex-grow: 4;
    }
    `;


    let document_addr = document.location.pathname;

    let button_text = "Validate";
    if (window.ihandout_config["short-questions"]) {
        button_text = window.ihandout_config["short-questions"]["text"];
    }

    let short_questions = document.querySelectorAll(".admonition.question.short");
    
    short_questions.forEach((item, k) => {
        let answer = item.querySelector(".details");
        if (!answer) return;
        answer.remove();
        item.dataset.answered = false;
        
        let storage_key = document_addr + "/short-question-" + k;
        let previous_answer = localStorage.getItem(storage_key);
       
        let answer_line = document.createElement("div");
        answer_line.classList.add("answer-line");
        item.appendChild(answer_line);

        let text = document.createElement("input");
        text.type = "text";
    
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