
/* ===========================
   TlouTV Pro — app.js (STABLE)
   =========================== */

/* ---------- helpers ---------- */
function normalizeStream(url){
  if (!url) return "";
  return String(url).trim();
}

function isFireTv(){
  const ua = navigator.userAgent || "";
  return /AFT|Fire\s?TV|AmazonWebView|KF[A-Z]{2,}/i.test(ua);
}

/* ---------- channels ---------- */
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

const GENRES = ["news","general","music","religious","sports"];

/* ---------- elements ---------- */
const rowsEl = document.getElementById("rows");
const tabs = Array.from(document.querySelectorAll(".tab"));

const player = document.getElementById("player");
const video = document.getElementById("videoPlayer");
const loading = document.getElementById("loading");
const backBtn = document.getElementById("backBtn");

const exitModal = document.getElementById("exitModal");
const exitYes = document.getElementById("exitYes");
const exitNo  = document.getElementById("exitNo");

let hls = null;

/* ---------- state ---------- */
const state = {
  focus: "tabs",
  tabIdx: 0,
  rowIdx: 0,
  itemIdx: 0,
  rows: [],
  playing: false,
  exitOpen: false
};

/* ---------- rendering ---------- */
function buildRows(){
  rowsEl.innerHTML = "";
  state.rows = [];

  GENRES.forEach(genre=>{
    const items = CHANNELS.filter(c=>c.genre===genre);
    if(!items.length) return;

    const section = document.createElement("section");
    section.className = "row";

    section.innerHTML = `
      <div class="row-head">
        <div class="row-title">${genre.toUpperCase()}</div>
      </div>
      <div class="rail-wrap">
        <div class="rail"></div>
      </div>
    `;

    const rail = section.querySelector(".rail");

    items.forEach((ch,i)=>{
      const tile = document.createElement("div");
      tile.className = "tile";
      tile.dataset.i = i;
      tile.innerHTML = `
        <div class="thumb"><img src="${ch.logo}" onerror="this.style.display='none'"></div>
        <div class="tile-foot">${ch.name}</div>
      `;
      rail.appendChild(tile);
    });

    rowsEl.appendChild(section);
    state.rows.push({genre,items,section,rail});
  });

  updateFocus();
}

/* ---------- focus ---------- */
function clearFocused(){
  document.querySelectorAll(".focused").forEach(e=>e.classList.remove("focused"));
}

function updateFocus(){
  clearFocused();

  if(state.exitOpen){
    exitNo?.classList.add("focused");
    return;
  }

  if(state.playing) return;

  if(state.focus==="tabs"){
    tabs[state.tabIdx]?.classList.add("focused");
    return;
  }

  const row = state.rows[state.rowIdx];
  if(!row) return;
  const tile = row.rail.querySelector(`.tile[data-i="${state.itemIdx}"]`);
  tile?.classList.add("focused");
}

/* ---------- playback ---------- */
function cleanupPlayback(){
  if(hls){ try{hls.destroy();}catch{} hls=null; }
  try{video.pause();}catch{}
  video.removeAttribute("src");
  video.load();
}

function startPlayback(url){
  cleanupPlayback();
  document.body.classList.add("is-playing");

  player.classList.add("active");
  loading.style.display="block";

  if(video.canPlayType("application/vnd.apple.mpegurl")){
    video.src=url;
    video.play().catch(()=>{});
  }else if(window.Hls && Hls.isSupported()){
    hls=new Hls();
    hls.loadSource(url);
    hls.attachMedia(video);
  }
}

function stopPlayback(){
  cleanupPlayback();
  document.body.classList.remove("is-playing");
  player.classList.remove("active");
  state.playing=false;
  state.focus="tabs";
  updateFocus();
}

/* ---------- exit modal ---------- */
function openExit(){
  state.exitOpen=true;
  exitModal.style.display="flex";
  updateFocus();
}
function closeExit(){
  state.exitOpen=false;
  exitModal.style.display="none";
  updateFocus();
}

/* ---------- actions ---------- */
function handleEnter(){
  if(state.exitOpen){
    closeExit();
    return;
  }

  if(state.playing) return;

  if(state.focus==="tabs"){
    state.focus="rows";
    updateFocus();
    return;
  }

  const row = state.rows[state.rowIdx];
  if(!row) return;
  const ch = row.items[state.itemIdx];
  if(!ch) return;

  state.playing=true;
  startPlayback(ch.url);
}

function handleBack(){
  if(state.exitOpen){
    closeExit();
    return true;
  }

  if(state.playing){
    stopPlayback();
    return true;
  }

  if(state.focus==="rows"){
    state.focus="tabs";
    updateFocus();
    return true;
  }

  openExit();
  return true;
}

/* ---------- events ---------- */
rowsEl.addEventListener("click",(e)=>{
  const tile=e.target.closest(".tile");
  if(!tile) return;

  const section=e.target.closest(".row");
  state.rowIdx=[...rowsEl.children].indexOf(section);
  state.itemIdx=parseInt(tile.dataset.i,10);
  state.focus="rows";
  handleEnter();
});

backBtn?.addEventListener("click",()=>{
  stopPlayback();
});

exitYes?.addEventListener("click",()=>{
  try{window.close();}catch{}
  try{location.href="about:blank";}catch{}
});
exitNo?.addEventListener("click",closeExit);

window.addEventListener("keydown",(e)=>{
  const k=e.keyCode;

  if(k===13){ handleEnter(); e.preventDefault(); }
  if(k===8 || k===27 || k===10009){ handleBack(); e.preventDefault(); }

  if(state.playing) return;

  if(state.focus==="tabs"){
    if(k===37) state.tabIdx=Math.max(0,state.tabIdx-1);
    if(k===39) state.tabIdx=Math.min(tabs.length-1,state.tabIdx+1);
  }else{
    if(k===37) state.itemIdx=Math.max(0,state.itemIdx-1);
    if(k===39) state.itemIdx++;
    if(k===38) state.rowIdx=Math.max(0,state.rowIdx-1);
    if(k===40) state.rowIdx=Math.min(state.rows.length-1,state.rowIdx+1);
  }

  updateFocus();
});

/* ---------- init ---------- */
function init(){
  exitModal.style.display="none";
  buildRows();
  updateFocus();
}
init();


