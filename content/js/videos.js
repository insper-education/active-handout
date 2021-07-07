{
  const ORIGIN = window.location.href;

  /**
   * @param {string} source
   */
  function parseVideoSource(source) {
    const matches = source.match(
      /.*(?:youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=)([^#\&\?]*).*/
    );
    // the above pattern is supposed to match any possible youtube URL
    // if there is no match, this source doesn't point to a youtube video
    const isFromYoutube = !!matches;

    const ext = isFromYoutube ? null : source.split('.').pop();

    return {
      source,
      videoId: (isFromYoutube && matches[1]) || null,
      isFromYoutube,
      ext
    };
  }

  const videoStyles = document.createElement('style');
  document.head.appendChild(videoStyles);
  videoStyles.innerHTML = `
    .video-wrapper {
      display: flex;
      justify-content: center;
      align-items: center;
    }
    .display-print-only {
      display: none;
    }
  `;

  const videoStylesOnPrint = document.createElement('style');
  document.head.appendChild(videoStylesOnPrint);
  videoStylesOnPrint.media = 'print';
  videoStylesOnPrint.innerHTML = `
    @media print {
      .no-print { 
        display: none;
      }
      .display-print-only {
        display: block;
      }
    }
  `;

  const documentVideoTags = document.querySelectorAll('.admonition.video');

  documentVideoTags.forEach((div) => {
    const img = div.getElementsByTagName('img')[0];
    const { source, videoId, isFromYoutube, ext } = parseVideoSource(img.src);

    const videoWrapper = document.createElement('div');
    videoWrapper.classList.add('video-wrapper');

    div.parentNode.insertBefore(videoWrapper, div);
    div.parentNode.removeChild(div);

    const qrcodeElement = document.createElement('img');
    const qrCodeParams = new URLSearchParams({
      cht: 'qr',
      chs: '150x150',
      chl: source
    }).toString();

    qrcodeElement.classList.add('display-print-only');
    qrcodeElement.alt = '';
    qrcodeElement.src = `https://chart.googleapis.com/chart?${qrCodeParams}`;

    const descriptionElement = document.createElement('p');
    const descriptionText = img.alt;

    descriptionElement.innerText = descriptionText;
    descriptionElement.classList.add('display-print-only');

    const video = isFromYoutube
      ? `<iframe class="no-print" type="text/html" 
          width="640" height="360"
          src="https://www.youtube.com/embed/${videoId}?autoplay=0&origin=${ORIGIN}"
          frameborder="0"
        />`
      : `<video width="640" class="no-print" controls>
        <source  src="${source}" type="video/${ext}"/>
      </video>`;

    videoWrapper.innerHTML = video;
    videoWrapper.appendChild(qrcodeElement);
    videoWrapper.appendChild(descriptionElement);
  });
}
