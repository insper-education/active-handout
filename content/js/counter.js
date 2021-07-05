{
    let admonitions_for_counting = ["question"];
    if (window.ihandout_config["counter"]) {
        admonitions_for_counting = window.ihandout_config["counter"];
    }

    for (const admonition_type of admonitions_for_counting) {
        let elements = document.querySelectorAll(".admonition." + admonition_type);
        let count = 1;
        for (const element of elements) {
            let title = element.querySelector(".admonition-title");
            title.innerHTML += " " + count;
            count++;
        }
    }
}