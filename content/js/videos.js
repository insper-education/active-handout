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
    // if there is no match, this source doesn't point to an youtube video
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
    .admonition.video {
      border-left-color: #DD111180;
    }
    .admonition.video > p.admonition-title {
      border-left-color: #DD111180;
      background-color: #DD111180;
      color: #fcfcfc;
    }
    .admonition.video > p.admonition-title::before {
      background-color: #fcfcfc;
    }
    .admonition.video > p:nth-child(2) {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
    }
    .admonition.video > p > img {
      margin: auto 1rem;
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
      .hide-on-print { 
        display: none;
      }
      .display-print-only {
        display: block;
      }
    }
  `;

  const documentVideoTags = document.querySelectorAll('.admonition.video');

  documentVideoTags.forEach((div, index) => {
    const img = div.getElementsByTagName('img')[0];
    const { source, videoId, isFromYoutube, ext } = parseVideoSource(img.src);
    const videoTitle = `${String(index).padStart(2, '0')}: ` + img.alt;
    const parentNode = img.parentNode;

    parentNode.removeChild(img);

    const pTitle = div.querySelector('p.admonition-title');

    pTitle.textContent = videoTitle;

    const qrcode = document.createElement('img');
    const qrCodeParams = new URLSearchParams({
      cht: 'qr',
      chs: '200x200', // qr code 200x200 [px]
      chl: source
    }).toString();

    qrcode.src = `https://chart.googleapis.com/chart?${qrCodeParams}`;
    qrcode.classList.add('display-print-only');
    qrcode.alt = `${videoTitle}`;

    const qrcodeSubtitle = document.createElement('span');
    qrcodeSubtitle.innerText = 'Use the following QR Code to access the video';
    qrcodeSubtitle.classList.add('display-print-only');

    const pVideo = div.querySelector('p:nth-child(2)');

    if (isFromYoutube) {
      const videoIframe = `<iframe class="hide-on-print" type="text/html" 
      width="640" height="360"
      src="http://www.youtube.com/embed/${videoId}?autoplay=0&origin=${ORIGIN}"
      frameborder="0"/>`;
      pVideo.innerHTML = videoIframe;
    } else {
      const video = `<video width="640" controls class="hide-on-print">
        <source  src="${source}" type="video/${ext}"/>
      </video>`;
      pVideo.innerHTML = video;
    }
    pVideo.appendChild(qrcodeSubtitle);
    pVideo.appendChild(qrcode);
  });
}
