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
    padding-top: 100px;
    width: 100%;
    height: 100%;
    overflow: auto;
    background-color: rgba(0, 0, 0, 0.6);
    }

    .modal-content {
    margin: auto;
    display: block;
    width: 90%;
    }

    .close {
    position: relative;
    top: -40px;
    right: -40px;
    color: #000;
    font-size: 40px;
    transition: 0.3s;
    }

    .close:hover,
    .close:focus {
    color: #FFF;
    text-decoration: none;
    cursor: pointer;
    transition: 0.5s;
    }

    @media only screen and (max-width: 700px) {
    .modal-content {
        width: 100%;
    }
    }`;

    let mDiv = document.createElement('div');
    mDiv.className = "modal";
    mDiv.id = "modalImg";

    let mSpan = document.createElement('span')
    mSpan.className = "close";
    mSpan.innerHTML = "&times";

    let mImg = document.createElement('img');
    mImg.className = "modal-content";
    mImg.id = "imgNone";

    mDiv.appendChild(mSpan);
    mDiv.appendChild(mImg);

    main = document.getElementsByClassName("md-container")[0];
    main.appendChild(mDiv);

    let images = document.images;
    for (let i = 0; i < images.length; i++) {
        images[i].addEventListener("click", function() {
            mDiv.style.display = "block";
            mImg.src = this.src;
        });
    }

    let span = document.querySelector(".close");
    span.addEventListener("click", function() {
        mDiv.style.display = "none";
    });

    document.addEventListener("keydown", (evt) => {
        if (evt.keyCode == 27 || window.event) {
            mDiv.style.display = "none";
        }
    });
}
