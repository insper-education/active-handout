{
    // Rafael Corsi @ insper . edu . br
    // maio 2021
    //

    const style_progress = document.head.appendChild(document.createElement('style'));
    style_progress.innerText = `
    #modalContainer {
        position: fixed;
        top: 0px;
        left: 0px;
        width: 100%;
        height: 100%;
        z-index: 200;
        
        display: none;
        background-color: rgba(0, 0, 0, 0.6);

        padding: 50px;
    }

    #modalContainer img {
        margin: auto;
        max-width: 100%;
        max-height: 100%;
        width: auto;
        height: auto;

        display: block;
    }
    `;

    const modalContainer = document.createElement('div');
    modalContainer.className = 'modal';
    modalContainer.id = 'modalContainer';
    modalContainer.innerHTML = '<img>';

    const modalImg = modalContainer.querySelector('img');
    modalContainer.addEventListener('click', function () {
        modalContainer.style.display = 'none';
    });

    document.body.appendChild(modalContainer);

    const images = document.images;
    for (let i = 0; i < images.length; i++) {
        images[i].addEventListener('click', function () {
            modalContainer.style.display = 'block';
            modalImg.src = this.src;
        });
    }
}
