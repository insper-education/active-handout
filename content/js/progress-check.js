{
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

    let all_hr = document.querySelectorAll("article > hr");
    if (all_hr.length > 0) {
        let next = all_hr[0].nextElementSibling;
        while (next != null) {
            next.style.display = "none";
            next = next.nextElementSibling;
        }
    }

    all_hr.forEach((item, k) => {
        let but = document.createElement("input");
        but.type = "button";
        but.value = "Cheguei aqui";
        but.classList.add("checkpoint");
        but.style.display = item.style.display;
        let storage_key = document_addr + "/checkpoint-" + k;

        item.parentElement.replaceChild(but, item);
        but.addEventListener("click", (evt) => {
            let prev = but.previousElementSibling;
            while (prev != null) {
                if (prev.dataset.answered !== undefined &&
                    prev.dataset.answered === "false") {
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

            but.remove();
        });
    });

    let all_checkpoints = document.querySelectorAll(".checkpoint");
    all_checkpoints.forEach((item, k) => {
        let storage_key = document_addr + "/checkpoint-" + k;
        if (localStorage[storage_key] == "true") {
            item.click();
        }
    });
    
}