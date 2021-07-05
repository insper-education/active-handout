import notification from "./notification.js";

{
    // HACK: depends on mkdocs-material styles
    let style_progress = document.head.appendChild(document.createElement("style"));
    style_progress.innerText = `
    article input[type=button].checkpoint {
        margin-left: auto;
        margin-right: auto;
        display: block;

        background-color: var(--md-primary-fg-color);
        color: var(--md-primary-bg-color);
        font-size: 0.8rem;
        padding: 10px;
        border-radius: 3px;
    }
    `;

    let document_addr = document.location.pathname;

    let all_checkpoints = document.querySelectorAll(".admonition.progress");
    if (all_checkpoints.length > 0) {
        let next = all_checkpoints[0].nextElementSibling;
        while (next != null) {
            next.style.display = "none";
            next = next.nextElementSibling;
        }
    }

    all_checkpoints.forEach((item, k) => {
        let text = item.querySelector('p:not(.admonition-title)').innerText;
        let but = document.createElement("input");
        but.type = "button";
        but.value = text;
        but.classList.add("checkpoint");
        but.style.display = item.style.display;
        let storage_key = document_addr + "/checkpoint-" + k;

        item.parentElement.replaceChild(but, item);
        but.addEventListener("click", (evt) => {
            let prev = but.previousElementSibling;
            while (prev != null) {
                if (prev.dataset.answered !== undefined &&
                    prev.dataset.answered === "false") {
                        notification.toast("Please answer all questions before continuing.");
                        return;
                    }
                prev = prev.previousElementSibling;
            }

            localStorage[storage_key] = true;

            let next = but.nextElementSibling;
            while (next != null) {
                next.style.display = "";
                if (next.classList.contains("checkpoint")) {
                    break;
                }
                next = next.nextElementSibling;
            }

            var hr = document.createElement("HR");
            but.parentElement.replaceChild(hr, but);
            but.remove();
        });
    });

    let all_checkpoint_buttons = document.querySelectorAll(".checkpoint");
    all_checkpoint_buttons.forEach((item, k) => {
        let storage_key = document_addr + "/checkpoint-" + k;
        if (localStorage[storage_key] == "true") {
            item.click();
        }
    });
    
}
