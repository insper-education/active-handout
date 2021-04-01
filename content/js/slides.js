{
    let current_document = window.location.href;
    let last_slash = current_document.lastIndexOf("/");

    let slide_path = "";
    if (last_slash == current_document.length-1) {
        slide_path = current_document + "slides.pdf";
    } else {
        slide_path = current_document.substring(0, last_slash) + "/slides.pdf";
    }
    
    let xhr = new XMLHttpRequest();
    xhr.addEventListener("load", function(ev) {
        if (xhr.status == 200) {       
            let emb = document.createElement("embed");
            emb.src = slide_path;
            emb.width = 500;
            emb.height = 375;
            emb.type = "application/pdf";
            
            let div_center = document.createElement("div");
            div_center.style = "text-align: center";
            div_center.className = "no-print";
            div_center.appendChild(emb);
            
            document.querySelector("h1").insertAdjacentElement("afterend", div_center);
        }
    });
    xhr.open("head", slide_path);
    xhr.send();

}