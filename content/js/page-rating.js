{

    let pageContent = document.getElementsByClassName("md-content__inner")[0];

    let pageRating = document.createElement("div");
    pageRating.classList.add("pageRating");
    pageContent.append(pageRating);

    let text = document.createTextNode("Was this page helpful?");

    let thumbsUp = document.createElement("IMG");
    thumbsUp.src = "https://cdnjs.cloudflare.com/ajax/libs/emojione/2.2.7/assets/svg/1f44d.svg";
    thumbsUp.id = "up"

    let thumbsDown = document.createElement("IMG");
    thumbsDown.src = "https://cdnjs.cloudflare.com/ajax/libs/emojione/2.2.7/assets/svg/1f44e.svg"
    thumbsDown.id = "down"

    pageRating.appendChild(text);
    pageRating.appendChild(thumbsUp);
    pageRating.appendChild(thumbsDown);

    let document_addr = document.location.pathname;
    let storage_key = document_addr + "/pageRating";
    var reportRating = localStorage[storage_key];
    let thumbs = [thumbsUp, thumbsDown];

    updateThumb(reportRating);

    function updateThumb(id) {
        for (var i = 0; i < thumbs.length; i++) {
            thumbs[i].style.margin = "0px 0px 0px 30px";
            if ( thumbs[i].id == id ){
               thumbs[i].width = 50
               thumbs[i].style.filter = '';
            } else {
               thumbs[i].width = 30
               thumbs[i].style.filter = 'grayscale(100%)';
            }
        }
    }

    for (var i = 0; i < thumbs.length; i++) {
        thumbs[i].addEventListener("click", (e) => {
            updateThumb(e.currentTarget.id);
            localStorage[storage_key] = e.currentTarget.id;
        });
    }
}
