/* ===========================
   TlouTV Pro — app.js (FULL)
   - Netflix TV style UI
   - Tabs + Rows render
   - Firestick remote navigation
   - HLS playback + VLC fallback
   - Exit confirmation modal on BACK
   - Smooth horizontal drag scrolling (rows + tabs)
   =========================== */

/* ================= CHANNELS ================= */
// NOTE: Keep this array valid. No extra "]);" at the end.
const CHANNELS = [
  {"id":"channel1","name":"Radio Tele 6 Univers","logo":"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRQhFbArTFlXYPUKKJ_oesEtaxdKyvQBn8D1w&s","url":normalizeStream("https://acwstream.com/lakay/tele6/tracks-v1a1/mono.m3u8"),"genre":"general"},
  {"id":"channel2","name":"Radio Tele Caraibes","logo":"https://ifex.org/wp-content/uploads/2025/03/haiti-radio-television-caraibes-arson-attack-facebook.jpeg","url":normalizeStream("https://bozztv.com/dvrfl03/hdirect/hdirect-telecaraibes/index.m3u8"),"genre":"general"},
  {"id":"channel3","name":"Radio Tele Ginen","logo":"https://yt3.googleusercontent.com/ytc/AIdro_k18hgxxj--vlOpIKL8WQ-wOw6AvskQT8eXIPn3qWx4-TU=s900-c-k-c0x00ffffff-no-rj","url":normalizeStream("http://teleginen.srfms.com:1935/teleginen/livestream/playlist.m3u8"),"genre":"news"},
  {"id":"channel4","name":"Tele Pacific","logo":"https://static.wikia.nocookie.net/logopedia/images/e/e6/Radio_T%C3%A9l%C3%A9_Pacific_Logo.png","url":normalizeStream("https://hls-p1st0n8r.livepush.io/live_cdn/nsOk3qoty1d5HDD/emB7xoUdyMbnjH8/tracks-v1a1/mono.m3u8"),"genre":"news"},
  {"id":"channel5","name":"Haiti News","logo":"https://m.media-amazon.com/images/I/611Ffvky5yL.png","url":normalizeStream("https://haititivi.com/website/haitinews/index.m3u8"),"genre":"news"},
  {"id":"channel6","name":"Telemix","logo":"https://i.ibb.co/RB7dzZq/logo-mix-2.png","url":normalizeStream("https://haititivi.com/haiti/telemix1/tracks-v1a1/mono.m3u8"),"genre":"general"},
  {"id":"channel7","name":"Kajou TV","logo":"https://static.wixstatic.com/media/d205b7_ced5950afd8849e2b21a72f36b3a16ff~mv2.png","url":normalizeStream("https://video1.getstreamhosting.com:1936/8055/8055/chunklist_w1507178321.m3u8"),"genre":"general"},
  {"id":"channel8","name":"RTH 2000","logo":"https://i.imgur.com/4z0FiEA.png","url":normalizeStream("https://2-fss-2.streamhoster.com/pl_120/amlst:206708-4203440/chunklist_b1998000.m3u8"),"genre":"general"},
  {"id":"channel9","name":"RTH 2000 TV2","logo":"https://i.imgur.com/4z0FiEA.png","url":normalizeStream("https://2-fss-2.streamhoster.com/pl_122/amlst:206708-4202592/chunklist_b1966000.m3u8"),"genre":"general"},
  {"id":"channel10","name":"Radio Tele Puissance","logo":"https://radiotelepuissance.com/wp-content/uploads/2020/08/cropped-radio-logo-1.png","url":normalizeStream("https://video1.getstreamhosting.com:1936/8560/8560/chunklist_w486676635.m3u8"),"genre":"religious"},
  {"id":"channel11","name":"Tele Pam","logo":"https://i.imgur.com/zfnFVqQ.png","url":normalizeStream("https://acwstream.com/app/2020/telepam/tracks-v1a1/mono.m3u8"),"genre":"general"},
  {"id":"channel12","name":"Radio Tele Boston","logo":"https://i.ibb.co/x3Gx3Ps/unnamed.png","url":normalizeStream("https://tv2.fastcast4u.com:3238/live/radiotelebostonlive.m3u8"),"genre":"religious"},
  {"id":"channel13","name":"Tele 4VEH","logo":"https://4veh.org/en/wp-content/uploads/2021/08/2021-logo-RT-4VEH-ENG-v8.png","url":normalizeStream("https://uni01rtmp.tulix.tv/4vehtv/4vehtv-firetv/playlist.m3u8"),"genre":"religious"},
  {"id":"channel14","name":"Tele Louange","logo":"https://editor.zenomedia.com/resources/zs_station/436269/CardWebsite/image.png","url":normalizeStream("https://5790d294af2dc.streamlock.net/8124/8124/chunklist_w1901943944.m3u8"),"genre":"religious"},
  {"id":"channel15","name":"Trace Urban","logo":"https://upload.wikimedia.org/wikipedia/commons/thumb/5/5c/Trace_Urban_logo_2010.svg/2560px-Trace_Urban_logo_2010.svg.png","url":normalizeStream("https://lightning-traceurban-samsungau.amagi.tv/playlist.m3u8"),"genre":"music"},
  {"id":"channel16","name":"Totalmix Radio","logo":"https://cdn-radiotime-logos.tunein.com/s127273g.png","url":normalizeStream("https://media.streambrothers.com:1936/hpgnrhawxv/hpgnrhawxv/chunklist_w1967596347.m3u8"),"genre":"sports"},
  {"id":"channel17","name":"Rezo Boul","logo":"https://www.rezoboul.com/uploads/images/logo_site_1714115779.png","url":normalizeStream("https://cdn1.ayitistream.com/web-r1/tracks-v1/index.fmp4.m3u8"),"genre":"sports"},
  {"id":"channel18","name":"4Diaspo TV","logo":"https://m.media-amazon.com/images/I/71w9kTfB7xL.png","url":normalizeStream("https://5790d294af2dc.streamlock.net/4diaspo/4diaspo/chunklist_w926608167.m3u8"),"genre":"general"},
  {"id":"channel19","name":"Planet Compas","logo":"https://play-lh.googleusercontent.com/2TF7iHbKnP1TNz4bnaY8aqozDJ-fK58dyRIANbZvt1XQkpvr57ELdUSpSi0LCHb5waot","url":normalizeStream("https://5dcab9aed5331.streamlock.net/mrcompas1/livestream/playlist.m3u8"),"genre":"music"},
  {"id":"channel20","name":"Fidele TV","logo":"https://i.ytimg.com/vi/t8SJhjQvb_4/maxresdefault.jpg","url":normalizeStream("https://59d39900ebfb8.streamlock.net/FIDELETV/FIDELETV/chunklist_w1411395380.m3u8"),"genre":"general"},
  {"id":"channel21","name":"BPX","logo":"https://i.ibb.co/SvGYHS7/images-1.jpg","url":normalizeStream(""),"genre":"general","description":"No stream URL yet"},
  {"id":"channel22","name":"Madras FM TV","logo":"https://www.monpetitforfait.com/comparateur-box-internet/wp-content/uploads/2020/06/madrasfm2.png","url":normalizeStream("https://edge12.vedge.infomaniak.com/livecast/ik:madrasfmtv/manifest.m3u8"),"genre":"music"},
  {"id":"channel23","name":"Bblack Caribbean","logo":"https://www.monpetitforfait.com/comparateur-box-internet/wp-content/uploads/2025/06/chaine-tv-bblack-caribbean.png","url":normalizeStream("https://edge16.vedge.infomaniak.com/livecast/ik:bblackcaribbean/chunklist_w2059905249.m3u8"),"genre":"music"},
  {"id":"channel24","name":"Bblack Africa","logo":"https://i.ibb.co/mvJc4z0/maxresdefault.jpg","url":normalizeStream("https://edge16.vedge.infomaniak.com/livecast/ik:bblackafrica/chunklist_w2121971628.m3u8"),"genre":"music"},
  {"id":"channel25","name":"Afrobeats","logo":"https://www.shutterstock.com/image-vector/afro-beat-text-african-drums-260nw-1741803605.jpg","url":normalizeStream("https://stream.ecable.tv/afrobeats/index.m3u8"),"genre":"music"},
  {"id":"channel26","name":"Trace Latina","logo":"https://upload.wikimedia.org/wikipedia/commons/thumb/0/04/TRACE_Latina_Logo.png/1280px-TRACE_Latina_Logo.png","url":normalizeStream("https://cdn-ue1-prod.tsv2.amagi.tv/linear/amg01131-tracetv-tracelatinait-samsungit/playlist.m3u8"),"genre":"music"},
  {"id":"channel27","name":"DBM","logo":"https://cdn6.aptoide.com/imgs/f/a/e/fae6e9aafb738fc5f81df9c0281cef8c_icon.png","url":normalizeStream("http://dbmtv.vedge.infomaniak.com/livecast/dbmtv/playlist.m3u8"),"genre":"general"},
  {"id":"channel28","name":"TMA","logo":"https://i.ibb.co/rtPW6pV/R.png","url":normalizeStream("http://hls.tmacaraibes.com/live/index.m3u8"),"genre":"music"},
  {"id":"channel29","name":"Tele Eclair","logo":"https://cdn6.aptoide.com/imgs/e/7/5/e7523cdc2229b9659beedab45974698d_icon.png","url":normalizeStream("https://play.streamhaiti.com:3585/live/radioteleeclairlive.m3u8"),"genre":"general"},
  {"id":"channel30","name":"TVA 30","logo":"https://televariete.com/tva30/logo.png","url":normalizeStream("https://acwstream.com/hb/chaine30/tracks-v1a1/mono.m3u8"),"genre":"general"},
  {"id":"channel31","name":"PVS","logo":"https://image.roku.com/developer_channels/prod/ba4c8f31be166308e659d3ffb67d316465621c29d19db94d6ece8bae7634cee5.png","url":normalizeStream("https://2-fss-1.streamhoster.com/pl_122/202676-1357858-1/chunklist.m3u8"),"genre":"general"},
  {"id":"channel32","name":"Tele Miracle","logo":"https://play-lh.googleusercontent.com/_xLb5cY2Jx9mxWOCcM9eT1mthdxT17zONK19X7dQ3eY9iNL2j88rKxnLhd3bQnMuNvk","url":normalizeStream("https://5790d294af2dc.streamlock.net/MIRACLETV/MIRACLETV/chunklist_w2147348876.m3u8"),"genre":"religious"},
  {"id":"channel33","name":"Radio Tele Hit","logo":"https://play-lh.googleusercontent.com/lujstN5hKyG0JWg_heOw5H7d8NbfzFAGE3Uq0oY9Qo8WxgFB6xD60lXCsGhYa8HDwHg","url":normalizeStream("https://59d39900ebfb8.streamlock.net/RadioTelehit/RadioTelehit/playlist.m3u8"),"genre":"music"},
  {"id":"channel34","name":"Radio Tele Sentinel","logo":"https://radiotelesentinel.com/wp-content/uploads/2025/03/logo-sentinel.png","url":normalizeStream("https://59d39900ebfb8.streamlock.net/radiotelesentinel/radiotelesentinel/chunklist_w2035690488.m3u8"),"genre":"religious"},
  {"id":"channel35","name":"VA Studio","logo":"https://i.imgur.com/bIQjQo1.jpeg","url":normalizeStream("https://haititivi.com/haiti/vastudio/tracks-v1a1/mono.m3u8"),"genre":"music"},
  {"id":"channel36","name":"Zoukla TV","logo":"https://www.telezoukla.com/gallery/tv%20zoukla-ts1633041059.png?ts=1768183155","url":normalizeStream("https://vdo.pro-fhi.net:3228/stream/play.m3u8"),"genre":"music"},
  {"id":"channel37","name":"Generation TV","logo":"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSAaQP-C3ATroz7tdW3USycLU19GDxF0H-sCw&s","url":normalizeStream("https://edge20.vedge.infomaniak.com/livecast/ik:generation-tv/chunklist_w1037567077.m3u8"),"genre":"music"},
  {"id":"channel38","name":"Identite TV","logo":"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSBLm7oYAN63J2TLWzmUbvV0LuvDKZZ07fMrg&s","url":normalizeStream("https://vdo2.pro-fhi.net:3769/stream/play.m3u8"),"genre":"music"},
  {"id":"channel39","name":"Trace Urban","logo":"https://upload.wikimedia.org/wikipedia/commons/thumb/5/5c/Trace_Urban_logo_2010.svg/2560px-Trace_Urban_logo_2010.svg.png","url":normalizeStream("https://lightning-traceurban-samsungau.amagi.tv/playlist.m3u8"),"genre":"music"}
];

const GENRE_ORDER = ["news","general","music","religious","sports"];

/* ================= ELEMENTS ================= */
const rowsEl = document.getElementById("rows");
const tabsViewport = document.getElementById("tabsViewport");
const tabsRail = document.getElementById("tabsRail");
const tabs = Array.from(document.querySelectorAll(".tab"));

const player = document.getElementById("player");
const video = document.getElementById("videoPlayer");
const loading = document.getElementById("loading");
const backBtn = document.getElementById("backBtn");

// Exit modal elements (must exist in index.html)
const exitModal = document.getElementById("exitModal");
const exitYes = document.getElementById("exitYes");
const exitNo  = document.getElementById("exitNo");

let hls = null;

/* ================= STATE ================= */
const state = {
  focus: "tabs",     // "tabs" | "rows"
  tabIdx: 0,
  rowIdx: 0,
  itemIdx: 0,
  filter: "all",
  rows: [],
  playing: false,
  menu: false,
  exitOpen: false,
  exitChoice: 0 // 0=Yes, 1=No
};

/* ================= ENV DETECT ================= */
function isFireTv(){
  const ua = navigator.userAgent || "";
  return /AFT|Fire\s?TV|AmazonWebView|KF[A-Z]{2,}/i.test(ua);
}

/* ================= URL NORMALIZATION ================= */
function normalizeStream(url){
  if (!url) return "";
  // leave https, fix accidental spaces
  return String(url).trim();
}

/* ================= TABS MOMENTUM SCROLL ================= */
let tabScrollX = 0;
let tabVel = 0;
let tabDragging = false;
let tabLastX = 0;
let tabSnapTimer = null;

function tabsMaxShift(){
  const viewportW = tabsViewport.getBoundingClientRect().width;
  const railW = tabsRail.scrollWidth;
  return Math.max(0, railW - viewportW);
}
function applyTabsShift(){
  const max = tabsMaxShift();
  tabScrollX = Math.max(0, Math.min(tabScrollX, max));
  tabsRail.style.transform = `translateX(${-tabScrollX}px)`;
}
function snapTabsToCenter(){
  const viewportRect = tabsViewport.getBoundingClientRect();
  const viewportCenter = (viewportRect.left + viewportRect.right) / 2;

  let bestDelta = 0;
  let bestAbs = Infinity;
  tabs.forEach(t => {
    const r = t.getBoundingClientRect();
    const c = (r.left + r.right) / 2;
    const d = c - viewportCenter;
    const ad = Math.abs(d);
    if (ad < bestAbs){ bestAbs = ad; bestDelta = d; }
  });

  tabScrollX += bestDelta;
  applyTabsShift();
}
function scheduleTabSnap(){
  if (tabSnapTimer) clearTimeout(tabSnapTimer);
  tabSnapTimer = setTimeout(() => {
    if (!tabDragging && !state.playing && !state.exitOpen) snapTabsToCenter();
  }, 90);
}

tabsViewport.addEventListener("wheel", (e) => {
  e.preventDefault();
  const dx = Math.abs(e.deltaX) > Math.abs(e.deltaY) ? e.deltaX : e.deltaY;
  tabVel += dx;
  scheduleTabSnap();
}, { passive:false });

tabsViewport.addEventListener("pointerdown", (e) => {
  tabDragging = true;
  tabLastX = e.clientX;
  tabsViewport.setPointerCapture?.(e.pointerId);
});
tabsViewport.addEventListener("pointermove", (e) => {
  if (!tabDragging) return;
  const dx = tabLastX - e.clientX;
  tabLastX = e.clientX;
  tabVel += dx;
  scheduleTabSnap();
});
tabsViewport.addEventListener("pointerup", () => {
  tabDragging = false;
  scheduleTabSnap();
});

function tickTabsMomentum(){
  if (Math.abs(tabVel) > 0.15){
    tabScrollX += tabVel;
    tabVel *= 0.92;
    applyTabsShift();
  }
  requestAnimationFrame(tickTabsMomentum);
}
tickTabsMomentum();

/* ================= ROW RAIL SCROLL (DRAG) ================= */
function attachRailScroll(rowObj){
  // We use native scrollLeft for the wrap, but keep rail transforms for remote focus.
  // Add drag behavior to the wrap.

  rowObj.dragging = false;
  rowObj.allowClick = true;
  rowObj.startX = 0;
  rowObj.startScrollLeft = 0;

  // Wheel horizontal support
  rowObj.wrapEl.addEventListener("wheel", (e) => {
    // Only affect horizontal scrolling; prevent page from shifting
    e.preventDefault();
    const dx = Math.abs(e.deltaX) > Math.abs(e.deltaY) ? e.deltaX : e.deltaY;
    rowObj.wrapEl.scrollLeft += dx;
  }, { passive:false });

  rowObj.wrapEl.addEventListener("pointerdown", (e) => {
    rowObj.dragging = true;
    rowObj.allowClick = false;
    rowObj.startX = e.clientX;
    rowObj.startScrollLeft = rowObj.wrapEl.scrollLeft;
    rowObj.wrapEl.classList.add("dragging");
    rowObj.wrapEl.setPointerCapture?.(e.pointerId);
  });

  // CONTINUED FROM YOUR LINE:
  rowObj.wrapEl.addEventListener("pointermove", (e) => {
    if (!rowObj.dragging) return;
    e.preventDefault();

    const x = e.clientX;
    const delta = x - rowObj.startX;

    // Invert drag for natural feel
    rowObj.wrapEl.scrollLeft = rowObj.startScrollLeft - delta;
  });

  const stopDragging = () => {
    rowObj.dragging = false;
    rowObj.wrapEl.classList.remove("dragging");
    setTimeout(() => { rowObj.allowClick = true; }, 50);
  };

  rowObj.wrapEl.addEventListener("pointerup", stopDragging);
  rowObj.wrapEl.addEventListener("pointerleave", stopDragging);
  rowObj.wrapEl.addEventListener("pointercancel", stopDragging);
}

/* ================= HELPERS ================= */
function clearFocused(){
  document.querySelectorAll(".focused").forEach(el => el.classList.remove("focused"));
}

function ensureRowVisible(rowEl){
  const box = rowsEl.getBoundingClientRect();
  const r = rowEl.getBoundingClientRect();
  const pad = 24;
  if (r.top < box.top + pad) rowsEl.scrollTop -= (box.top + pad - r.top);
  else if (r.bottom > box.bottom - pad) rowsEl.scrollTop += (r.bottom - (box.bottom - pad));
}

function updateFocus(){
  clearFocused();

  // Exit modal focus
  if (state.exitOpen){
    // 0=Yes, 1=No
    if (state.exitChoice === 0) exitYes?.classList.add("focused");
    else exitNo?.classList.add("focused");
    return;
  }

  // Player focus
  if (state.playing){
    if (state.menu) backBtn.classList.add("focused");
    return;
  }

  // Tabs focus
  if (state.focus === "tabs"){
    const tab = tabs[state.tabIdx];
    if (tab) tab.classList.add("focused");
    return;
  }

  // Rows focus
  const rowObj = state.rows[state.rowIdx];
  if (!rowObj) return;

  const tile = rowObj.railEl.querySelector(`.tile[data-i="${state.itemIdx}"]`);
  if (tile) tile.classList.add("focused");

  // Keep focus visible
  ensureRowVisible(rowObj.rowEl);

  // Ensure the wrap scrollLeft keeps focused tile on screen (remote navigation)
  const tileEl = tile;
  if (tileEl){
    const wrapRect = rowObj.wrapEl.getBoundingClientRect();
    const tileRect = tileEl.getBoundingClientRect();
    const margin = 70;

    if (tileRect.left < wrapRect.left + margin){
      rowObj.wrapEl.scrollLeft -= (wrapRect.left + margin - tileRect.left);
    } else if (tileRect.right > wrapRect.right - margin){
      rowObj.wrapEl.scrollLeft += (tileRect.right - (wrapRect.right - margin));
    }
  }
}

/* ================= RENDER ================= */
function buildRows(){
  rowsEl.innerHTML = "";
  state.rows = [];

  const genresToShow = (state.filter === "all")
    ? GENRE_ORDER
    : GENRE_ORDER.filter(g => g === state.filter);

  genresToShow.forEach(g => {
    const items = CHANNELS.filter(c => c.genre === g);
    if (!items.length) return;

    const section = document.createElement("section");
    section.className = "row";
    section.dataset.genre = g;

    const head = document.createElement("div");
    head.className = "row-head";
    head.innerHTML = `<div class="row-title">${g.toUpperCase()}</div><div class="row-meta">${items.length} channels</div>`;

    const wrap = document.createElement("div");
    wrap.className = "rail-wrap";
    wrap.innerHTML = `<div class="rail-fade-left"></div><div class="rail-fade-right"></div>`;

    const rail = document.createElement("div");
    rail.className = "rail";

    items.forEach((c, i) => {
      const tile = document.createElement("div");
      tile.className = "tile";
      tile.dataset.i = String(i);
      tile.innerHTML = `
        <div class="thumb"><img src="${c.logo}" alt="" loading="lazy" onerror="this.style.display='none'"/></div>
        <div class="tile-foot">${c.name}</div>
      `;

      tile.addEventListener("click", (e) => {
        // block click if user was dragging
        const rowObj = state.rows.find(r => r.genre === g);
        if (rowObj && rowObj.allowClick === false){
          e.preventDefault();
          e.stopPropagation();
          return;
        }
      });

      rail.appendChild(tile);
    });

    wrap.appendChild(rail);
    section.appendChild(head);
    section.appendChild(wrap);
    rowsEl.appendChild(section);

    const rowObj = { genre: g, items, rowEl: section, wrapEl: wrap, railEl: rail };
    state.rows.push(rowObj);
    attachRailScroll(rowObj);
  });

  state.rowIdx = Math.min(state.rowIdx, Math.max(0, state.rows.length - 1));
  const curRow = state.rows[state.rowIdx];
  state.itemIdx = Math.min(state.itemIdx, Math.max(0, (curRow?.items.length || 1) - 1));

  updateFocus();
}

/* ================= FILTER (TABS) ================= */
function setFilter(cat){
  state.filter = cat;

  tabs.forEach(t => t.classList.remove("active"));
  const idx = tabs.findIndex(t => (t.dataset.cat || "all") === cat);
  state.tabIdx = idx >= 0 ? idx : 0;
  tabs[state.tabIdx]?.classList.add("active");

  state.rowIdx = 0;
  state.itemIdx = 0;
  rowsEl.scrollTop = 0;

  buildRows();
}

/* ================= PLAYBACK ================= */
function cleanupPlayback(){
  if (hls){ try{ hls.destroy(); } catch(_){ } hls = null; }
  try{ video.pause(); } catch(_){ }
  video.srcObject = null;
  video.removeAttribute("src");
  video.load();
}

function buildVlcIntent(url){
  try{
    const u = new URL(url);
    const scheme = (u.protocol || "https:").replace(":","");
    const path = `${u.host}${u.pathname}${u.search}`;
    const type = /\.m3u8(\?|$)/i.test(url) ? "application/x-mpegURL" : "video/*";
    return `intent://${path}#Intent;scheme=${scheme};package=org.videolan.vlc;action=android.intent.action.VIEW;type=${type};end`;
  } catch(_){
    return `vlc://${url}`;
  }
}

function openExternalFallback(url){
  loading.style.display = "block";
  loading.innerHTML = isFireTv()
    ? "Opening VLC…<br><small style='font-size:14px;opacity:.7;'>Press BACK to return</small>"
    : "Opening external player…<br><small style='font-size:14px;opacity:.7;'>If nothing opens, press BACK.</small>";

  if (isFireTv()){
    const intentUri = buildVlcIntent(url);
    try { window.location.href = intentUri; return; } catch(_){ }
  }

  let opened = null;
  try { opened = window.open(url, "_blank"); } catch(_) { opened = null; }
  if (!opened){ try { window.location.assign(url); } catch(_) {} }
}

function startWebPlayback(url){
  cleanupPlayback();
  if (!url){
    loading.style.display = "block";
    loading.innerHTML = "No stream URL for this channel.";
    return;
  }

  const isHttp = /^http:\/\//i.test(url);
  const httpsTry = isHttp ? url.replace(/^http:\/\//i, "https://") : url;

  const tryNative = (src) => new Promise((resolve, reject) => {
    let done = false;

    const cleanup = () => {
      video.removeEventListener("canplay", onCanPlay);
      video.removeEventListener("canplaythrough", onCanPlay);
      video.removeEventListener("error", onFail);
      video.removeEventListener("stalled", onFail);
    };

    const onCanPlay = async () => {
      if (done) return;
      done = true;
      cleanup();
      try { await video.play(); } catch(_){ }
      resolve(true);
    };

    const onFail = () => {
      if (done) return;
      done = true;
      cleanup();
      reject(new Error("native_fail"));
    };

    video.addEventListener("canplay", onCanPlay);
    video.addEventListener("canplaythrough", onCanPlay);
    video.addEventListener("error", onFail);
    video.addEventListener("stalled", onFail);

    video.controls = true;
    video.autoplay = true;
    video.muted = false;
    video.playsInline = true;
    video.setAttribute("playsinline","");
    video.setAttribute("webkit-playsinline","");

    video.src = src;
    video.load();

    setTimeout(() => {
      if (!done){
        done = true;
        cleanup();
        reject(new Error("native_timeout"));
      }
    }, 6500);
  });

  const tryHlsJs = (src) => new Promise((resolve, reject) => {
    if (!(window.Hls && Hls.isSupported())) return reject(new Error("hls_not_supported"));

    hls = new Hls({
      enableWorker: true,
      lowLatencyMode: true,
      backBufferLength: 30,
      xhrSetup: (xhr) => { xhr.withCredentials = false; }
    });

    const cleanup = () => {
      if (!hls) return;
      hls.off(Hls.Events.MANIFEST_PARSED, onParsed);
      hls.off(Hls.Events.ERROR, onError);
    };

    const onParsed = async () => {
      cleanup();
      try { await video.play(); } catch(_){ }
      resolve(true);
    };

    const onError = (_evt, data) => {
      if (data && data.fatal){
        cleanup();
        reject(new Error(data.type || "hls_fatal"));
      }
    };

    hls.on(Hls.Events.MANIFEST_PARSED, onParsed);
    hls.on(Hls.Events.ERROR, onError);

    hls.loadSource(src);
    hls.attachMedia(video);

    setTimeout(() => {
      cleanup();
      reject(new Error("hls_timeout"));
    }, 9000);
  });

  (async () => {
    try{
      if (httpsTry !== url){
        try { await tryNative(httpsTry); loading.style.display="none"; return; } catch(_){ }
      }
      await tryNative(url);
      loading.style.display = "none";
      return;
    } catch(_nativeErr){
      try{
        await tryHlsJs(httpsTry);
        loading.style.display = "none";
        return;
      } catch(_hlsErr){
        openExternalFallback(url);
      }
    }
  })();
}

function openPlayer(channel){
  state.playing = true;
  state.menu = false;

  player.classList.add("active");
  player.classList.remove("show-menu");
  player.setAttribute("aria-hidden", "false");

  loading.style.display = "block";
  loading.innerHTML = `Loading stream…<br><small style="font-size:14px;opacity:.7;">${channel.name}</small>`;

  startWebPlayback(channel.url);
  updateFocus();
}

function stopPlayback(){
  state.playing = false;
  state.menu = false;

  player.classList.remove("active");
  player.classList.remove("show-menu");
  player.setAttribute("aria-hidden", "true");

  cleanupPlayback();

  loading.style.display = "block";
  loading.innerHTML = "Loading stream…";

  updateFocus();
}

function togglePlayerMenu(){
  state.menu = !state.menu;
  player.classList.toggle("show-menu", state.menu);
  updateFocus();
}

/* ================= EXIT MODAL ================= */
function openExitModal(){
  state.exitOpen = true;
  state.exitChoice = 0; // default YES
  exitModal?.classList.add("active");
  updateExitFocus();
}

function closeExitModal(){
  state.exitOpen = false;
  exitModal?.classList.remove("active");
  updateFocus();
}

function updateExitFocus(){
  exitYes?.classList.toggle("focused", state.exitChoice === 0);
  exitNo?.classList.toggle("focused", state.exitChoice === 1);
}

function doExit(){
  // Best-effort exit for WebView/PWA/Browser
  try { window.close(); } catch(_){}

  // If installed as PWA, window.close() may fail; attempt navigation
  try { window.location.href = "about:blank"; } catch(_){}

  // Last resort
  try { history.go(-999); } catch(_){}
}

/* ================= ACTIONS ================= */
function handleEnter(){
  if (state.exitOpen){
    if (state.exitChoice === 0) doExit();
    else closeExitModal();
    return;
  }

  if (state.playing){
    togglePlayerMenu();
    return;
  }

  if (state.focus === "tabs"){
    const cat = tabs[state.tabIdx]?.dataset.cat || "all";
    setFilter(cat);
    state.focus = "rows";
    updateFocus();
    return;
  }

  const rowObj = state.rows[state.rowIdx];
  const ch = rowObj ? rowObj.items[state.itemIdx] : null;
  if (ch) openPlayer(ch);
}

function handleBack(){
  // 1) if exit modal open, close it
  if (state.exitOpen){
    closeExitModal();
    return true;
  }

  // 2) if playing, stop playback
  if (state.playing){
    stopPlayback();
    return true;
  }

  // 3) if on rows, go to tabs
  if (state.focus === "rows"){
    state.focus = "tabs";
    updateFocus();
    return true;
  }

  // 4) if already on tabs (root), ask to exit
  if (state.focus === "tabs"){
    openExitModal();
    return true;
  }

  return false;
}

/* ================= CLICK SUPPORT ================= */
tabsRail.addEventListener("click", (e) => {
  const tab = e.target.closest(".tab");
  if (!tab) return;
  state.tabIdx = tabs.indexOf(tab);
  setFilter(tab.dataset.cat || "all");
  state.focus = "rows";
  updateFocus();
});

rowsEl.addEventListener("click", (e) => {
  if (state.exitOpen || state.playing) return;

  const tile = e.target.closest(".tile");
  if (!tile) return;

  const rowSection = e.target.closest(".row");
  const genre = rowSection ? rowSection.dataset.genre : null;
  const rIdx = state.rows.findIndex(r => r.genre === genre);
  const iIdx = parseInt(tile.dataset.i || "0", 10);

  const rowObj = state.rows[rIdx];
  if (rowObj && rowObj.allowClick === false) return;

  if (rIdx >= 0){
    state.focus = "rows";
    state.rowIdx = rIdx;
    state.itemIdx = iIdx;
    updateFocus();
    handleEnter();
  }
});

backBtn?.addEventListener("click", stopPlayback);

// Exit modal buttons
exitYes?.addEventListener("click", doExit);
exitNo?.addEventListener("click", closeExitModal);

/* Browser back button support */
window.addEventListener("popstate", () => {
  // Instead of leaving, show modal
  if (!state.exitOpen) openExitModal();
});

/* ================= FIRESTICK REMOTE / KEYBOARD ================= */
window.addEventListener("keydown", (e) => {
  const keyCode = e.keyCode;
  const key = e.key;

  // prevent page scroll for arrows
  if ([37,38,39,40].includes(keyCode)) e.preventDefault();

  // ENTER
  if (keyCode === 13 || key === "Enter"){
    e.preventDefault();
    handleEnter();
    return;
  }

  // BACK
  if (keyCode === 8 || keyCode === 27 || keyCode === 10009 || key === "Backspace" || key === "Escape"){
    const handled = handleBack();
    if (handled) e.preventDefault();
    return;
  }

  // If exit modal open: LEFT/RIGHT change choice
  if (state.exitOpen){
    if (keyCode === 37 || key === "ArrowLeft" || keyCode === 39 || key === "ArrowRight"){
      state.exitChoice = state.exitChoice === 0 ? 1 : 0;
      updateExitFocus();
    }
    return;
  }

  if (state.playing) return;

  if (state.focus === "tabs"){
    if (keyCode === 37 || key === "ArrowLeft"){
      state.tabIdx = Math.max(0, state.tabIdx - 1);
      updateFocus();
      scheduleTabSnap();
      return;
    }
    if (keyCode === 39 || key === "ArrowRight"){
      state.tabIdx = Math.min(tabs.length - 1, state.tabIdx + 1);
      updateFocus();
      scheduleTabSnap();
      return;
    }
    if (keyCode === 40 || key === "ArrowDown"){
      state.focus = "rows";
      updateFocus();
      return;
    }
    return;
  }

  if (state.focus === "rows"){
    const rowObj = state.rows[state.rowIdx];
    if (!rowObj) return;

    if (keyCode === 37 || key === "ArrowLeft"){
      state.itemIdx = Math.max(0, state.itemIdx - 1);
      updateFocus();
      return;
    }
    if (keyCode === 39 || key === "ArrowRight"){
      state.itemIdx = Math.min(rowObj.items.length - 1, state.itemIdx + 1);
      updateFocus();
      return;
    }
    if (keyCode === 38 || key === "ArrowUp"){
      if (state.rowIdx === 0){
        state.focus = "tabs";
      } else {
        state.rowIdx = Math.max(0, state.rowIdx - 1);
        state.itemIdx = Math.min(state.itemIdx, state.rows[state.rowIdx].items.length - 1);
      }
      updateFocus();
      return;
    }
    if (keyCode === 40 || key === "ArrowDown"){
      state.rowIdx = Math.min(state.rows.length - 1, state.rowIdx + 1);
      state.itemIdx = Math.min(state.itemIdx, state.rows[state.rowIdx].items.length - 1);
      updateFocus();
      return;
    }
  }
}, { passive:false });

window.addEventListener("resize", () => {
  updateFocus();
  applyTabsShift();
});

/* ================= INIT ================= */
function init(){
  // Ensure exit modal hidden on load
  exitModal?.classList.remove("active");

  setFilter("all");
  state.focus = "tabs";
  updateFocus();
  applyTabsShift();

  // Add a dummy history state so browser back triggers popstate
  try { history.replaceState({ tloutv: true }, "", location.href); } catch(_){}
  try { history.pushState({ tloutv: "guard" }, "", location.href); } catch(_){}
}

init();
