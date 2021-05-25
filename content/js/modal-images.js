{
    // Rafael Corsi @ insper . edu . br
    // maio 2021
    //
    // based on: https://jsfiddle.net/snowMonkey/f1zav0ge/

    let style_progress = document.head.appendChild(document.createElement("style"));
    style_progress.innerText = `
    .modal {
    display: none;
    position: fixed;
    z-index: 1;
    padding-top: 100px;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    overflow: auto;
    background-color: rgb(0, 0, 0);
    background-color: rgba(0, 0, 0, 0.6);
    }

    .modal-content {
    margin: auto;
    display: block;
    width: 100%;
    }

    .close {
    position: relative;
    top: -40px;
    right: -40px;
    color: #000;
    background-color: #fff;
    font-size: 80px;
    font-weight: bold;
    transition: 0.3s;
    background-size: 200px 200px;
    }

    .close:hover,
    .close:focus {
    color: #bbb;
    text-decoration: none;
    cursor: pointer;
    }

    @media only screen and (max-width: 700px) {
    .modal-content {
        width: 100%;
    }
    }`;

    document.getElementsByClassName("md-content")[0].outerHTML += `
    <div id="modalImg" class="modal">
      <span class="close">&times;</span>
      <img class="modal-content" id="img01">
    </div>`;

    var modal = document.getElementById('modalImg');
    var modalImg = document.getElementById("img01");
    var captionText = document.getElementById("caption");
    var images = document.images;

    for (var i = 0; i < images.length; i++) {
        images[i].addEventListener("click", function() {
            modal.style.display = "block";
            modalImg.src = this.src;
            captionText.innerHTML = this.alt;
        });
    }

    var span = document.querySelector(".close");
    span.addEventListener("click", function() {
        modal.style.display = "none";
    });

    document.addEventListener("keydown", (evt) => {
        if (evt.keyCode == 27 || window.event) {
            modal.style.display = "none";
        }
    });
}
