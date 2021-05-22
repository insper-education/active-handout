{
    // Rafael Corsi @ insper . edu . br
    // maio 2021
    //
    // based on: https://jsfiddle.net/snowMonkey/f1zav0ge/

    let style_progress = document.head.appendChild(document.createElement("style"));
    style_progress.innerText = `
    #myImg {
    border-radius: 5px;
    cursor: pointer;
    transition: 0.1s;
    }

    #myImg:hover {
    opacity: 0.2;
    }

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
    background-color: rgba(0, 0, 0, 0.4);
    }

    .modal-content {
    margin: auto;
    display: block;
    width: 100%;
    }

    #caption {
    margin: auto;
    display: block;
    width: 80%;
    height: 150px;
    max-width: 700px;
    text-align: center;
    color: #ccc;
    padding: 10px 0;
    }

    .modal-content,
    #caption {
    //animation-name: zoom;
    //animation-duration: 0.2s;
    }

    @keyframes zoom {
    from {
        transform: scale(0)
    }
    to {
        transform: scale(1)
    }
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
    <div id="myModal" class="modal">
      <span class="close">&times;</span>
      <img class="modal-content" id="img01">
      <div id="caption"></div>
    </div>`;

    var modal = document.getElementById('myModal');
    var images = document.images;
    var modalImg = document.getElementById("img01");
    var captionText = document.getElementById("caption");

    for (var i = 0; i < images.length; i++) {
        var img = images[i];
        img.onclick = function(evt) {
            console.log(evt);
            modal.style.display = "block";
            modalImg.src = this.src;
            captionText.innerHTML = this.alt;
    }}

    var span = document.getElementsByClassName("close")[0];

    span.onclick = function() {
        modal.style.display = "none";
    }

    document.onkeydown = function(evt) {
        evt = evt || window.event;
        if (evt.keyCode == 27) {
            modal.style.display = "none";
        }
    };
}
