window.AdsEngine = (function () {

  let ads = [];
  let index = 0;

  let container, video, image;
  let skipBtn, linkBtn;
  let labelAd, counterAd, progressBar;

  let skipTimer = null;
  let imgTimer = null;
  let progressTimer = null;

  /* =========================
     SHUFFLE ALEATORIO
  ========================= */
  function shuffle(list) {
    const arr = list.map(ad => ({ ...ad }));
    for (let i = arr.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [arr[i], arr[j]] = [arr[j], arr[i]];
    }
    return arr;
  }

  /* =========================
     BUILD UI
  ========================= */
  function buildUI() {
    container = document.createElement("div");
    container.id = "ads-layer";
    container.innerHTML = `
    <div id="ads-label">Publicidad</div>
    <div id="ads-counter"></div>

    <div id="ads-progress">
      <div id="ads-progress-bar"></div>
    </div>

    <video id="ads-video"
      muted autoplay playsinline webkit-playsinline></video>

    <img id="ads-image">

    <a id="ads-link" target="_blank" rel="noopener">Visitar anuncio</a>
    <button id="ads-skip">Omitir</button>
  `;

    document.body.appendChild(container);

    video = container.querySelector("#ads-video");
    image = container.querySelector("#ads-image");
    skipBtn = container.querySelector("#ads-skip");
    linkBtn = container.querySelector("#ads-link");
    labelAd = container.querySelector("#ads-label");
    counterAd = container.querySelector("#ads-counter");
    progressBar = container.querySelector("#ads-progress-bar");

    video.controls = false;

    const font = document.createElement("link");
    font.rel = "stylesheet";
    font.href = "https://fonts.googleapis.com/css2?family=Audiowide&display=swap";
    document.head.appendChild(font);


    const style = document.createElement("style");
    style.innerHTML = `
  #ads-layer{
    position:fixed;
    inset:0;
    background:#000;
    z-index:999999;
    font-family:'Audiowide', sans-serif;
  }


    #ads-video,#ads-image{
      width:100%;
      height:100%;
      object-fit:contain;
    }

    #ads-label{
      position:absolute;
      top:16px;
      left:16px;
      background:rgba(0,0,0,.7);
      color:#fff;
      padding:6px 10px;
      font-size:13px;
      border-radius:4px;
      z-index:2;
    }

    #ads-counter{
      position:absolute;
      top:16px;
      right:16px;
      background:rgba(0,0,0,.7);
      color:#fff;
      padding:6px 10px;
      font-size:13px;
      border-radius:4px;
      z-index:2;
    }

    #ads-link{
      position:absolute;
      top:56px;
      right:16px;
      background:rgba(0,0,0,.85);
      color:#fff;
      padding:8px 14px;
      border-radius:4px;
      text-decoration:none;
      font-size:13px;
      z-index:2;
    }

    #ads-skip{
      position:absolute;
      bottom:20px;
      right:20px;
      background:rgba(0,0,0,.85);
      color:#fff;
      padding:14px 20px;
      border:0;
      border-radius:6px;
      font-size:15px;
      opacity:.5;
      cursor:not-allowed;
      z-index:2;
    }

    #ads-skip.enabled{
      opacity:1;
      cursor:pointer;
    }

    #ads-progress{
      position:absolute;
      bottom:0;
      left:0;
      width:100%;
      height:4px;
      background:rgba(255,255,255,.25);
      z-index:2;
    }

    #ads-progress-bar{
      width:0%;
      height:100%;
      background:#ff0000;
      transition:width .25s linear;
    }
  `;
    document.head.appendChild(style);
  }

  /* =========================
     PLAY ADS
  ========================= */
  function playNext(onFinish) {

    if (index >= ads.length) {
      finishAds(onFinish);
      return;
    }

    const ad = ads[index];

    video.style.display = "none";
    image.style.display = "none";
    progressBar.style.width = "0%";

    linkBtn.href = ad.link || "#";
    linkBtn.textContent = ad.cta || "Conoce más";

    counterAd.textContent = `Anuncio ${index + 1} de ${ads.length}`;

    /* ===== SKIP ===== */
    clearInterval(skipTimer);
    skipBtn.onclick = null;

    if (ad.noSkip) {
      skipBtn.style.display = "none";
    } else {
      skipBtn.style.display = "block";
      let skip = ad.skipAfter || 0;

      skipBtn.disabled = true;
      skipBtn.style.pointerEvents = "none";
      skipBtn.classList.remove("enabled");
      skipBtn.textContent = `Omitir en ${skip}`;

      skipTimer = setInterval(() => {
        skip--;
        if (skip <= 0) {
          skipBtn.textContent = "Omitir anuncio";
          skipBtn.disabled = false;
          skipBtn.style.pointerEvents = "auto";
          skipBtn.classList.add("enabled");
          skipBtn.onclick = next;
          clearInterval(skipTimer);
        } else {
          skipBtn.textContent = `Omitir en ${skip}`;
        }
      }, 1000);
    }

    /* ===== PROGRESO ===== */
    function startProgress(duration) {
      let elapsed = 0;
      clearInterval(progressTimer);

      progressTimer = setInterval(() => {
        elapsed += 0.25;
        progressBar.style.width = `${Math.min(100, (elapsed / duration) * 100)}%`;
      }, 250);
    }

    /* ===== VIDEO ===== */
    if (ad.type === "video") {
      video.src = ad.src;
      video.currentTime = 0;
      video.muted = false;
      video.style.display = "block";
      video.play();

      video.onloadedmetadata = () => {
        startProgress(video.duration);
      };

      video.onended = next;
    }

    /* ===== IMAGE ===== */
    if (ad.type === "image") {
      image.src = ad.src;
      image.style.display = "block";
      const duration = ad.duration || 5;
      startProgress(duration);
      imgTimer = setTimeout(next, duration * 1000);
    }

    function next() {
      clearInterval(skipTimer);
      clearInterval(progressTimer);
      clearTimeout(imgTimer);
      video.pause();
      index++;
      playNext(onFinish);
    }
  }

  /* =========================
     FINISH
  ========================= */
  function finishAds(onFinish) {
    clearInterval(skipTimer);
    clearInterval(progressTimer);
    clearTimeout(imgTimer);
    container.remove();
    setTimeout(onFinish, 100);
  }

  /* =========================
     PUBLIC API
  ========================= */
  function start(channel, onFinish) {

    if (!window.ADS_CONFIG || !ADS_CONFIG[channel]?.length) {
      onFinish();
      return;
    }

    index = 0;
    ads = shuffle(ADS_CONFIG[channel]);

    buildUI();
    playNext(onFinish);
  }

  return { start };

})();
