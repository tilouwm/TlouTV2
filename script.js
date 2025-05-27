
document.addEventListener("DOMContentLoaded", () => {
  const channelRows = document.getElementById("channelRows");
  const searchInput = document.getElementById("searchInput");
  const searchBtn = document.getElementById("searchBtn");
  const toggleSearch = document.getElementById("toggleSearch");

  const categories = {
    haiti: [
  {
    "id": "channel1",
    "name": "Tele Pacific",
    "logo": "https://static.wikia.nocookie.net/logopedia/images/e/e6/Radio_T%C3%A9l%C3%A9_Pacific_Logo.png",
    "stream": "https://hls-p1st0n8r.livepush.io/live_cdn/nsOk3qoty1d5HDD/emB7xoUdyMbnjH8/tracks-v1a1/mono.m3u8"
  },
  {
    "id": "channel2",
    "name": "Tele Ginen",
    "logo": "https://static.wikia.nocookie.net/logopedia/images/0/09/RTG_Logo_%28With_Full_Name%29.png",
    "stream": "http://teleginen.srfms.com:1935/teleginen/livestream/chunklist_w531595620.m3u8"
  },
  {
    "id": "channel3",
    "name": "Haiti News",
    "logo": "https://m.media-amazon.com/images/I/611Ffvky5yL.png",
    "stream": "https://haititivi.com/website/haitinews/index.m3u8"
  },
  {
    "id": "channel4",
    "name": "Ayiti TV",
    "logo": "https://i.ibb.co/HGfjmgD/removal-ai-fb28fe02-1167-447e-bf61-2171033e7cfe-images.png",
    "stream": "https://dacastmmd.mmdlive.lldns.net/dacastmmd/596115da85954b4da6ed86c199f2501c/chunklist_b4628000.m3u8"
  },
  {
    "id": "channel5",
    "name": "Telemix",
    "logo": "https://i.ibb.co/RB7dzZq/logo-mix-2.png",
    "stream": "https://haititivi.com/haiti/telemix1/tracks-v1a1/mono.m3u8"
  },
  {
    "id": "channel6",
    "name": "SNL",
    "logo": "https://i.ibb.co/2NW7kFM/images.jpg",
    "stream": "https://haititivi.com/haititv/tvs/mono.m3u8"
  },
  {
    "id": "channel7",
    "name": "Kajou TV",
    "logo": "https://static.wixstatic.com/media/d205b7_ced5950afd8849e2b21a72f36b3a16ff~mv2.png",
    "stream": "https://video1.getstreamhosting.com:1936/8055/8055/chunklist_w1507178321.m3u8"
  },
  {
    "id": "channel8",
    "name": "RTH 2000",
    "logo": "https://i.imgur.com/4z0FiEA.png",
    "stream": "https://2-fss-2.streamhoster.com/pl_120/amlst:206708-4203440/chunklist_b3500000.m3u8"
  },
  {
    "id": "channel9",
    "name": "RTH 2000 TV2",
    "logo": "https://i.imgur.com/4z0FiEA.png",
    "stream": "https://2-fss-2.streamhoster.com/pl_120/amlst:206708-4202592/chunklist_b2000000.m3u8"
  },
  {
    "id": "channel10",
    "name": "Radio Tele Puissance",
    "logo": "https://radiotelepuissance.com/wp-content/uploads/2020/08/cropped-radio-logo-1.png",
    "stream": "https://video1.getstreamhosting.com:1936/8560/8560/chunklist_w486676635.m3u8"
  },
  {
    "id": "channel11",
    "name": "4Diaspo TV",
    "logo": "https://m.media-amazon.com/images/I/71w9kTfB7xL.png",
    "stream": "https://59d39900ebfb8.streamlock.net/4DIASPOTV/4DIASPOTV/chunklist_w507710567.m3u8"
  },
  {
    "id": "channel12",
    "name": "Tele Pam",
    "logo": "https://telepam.tv/wp-content/uploads/2022/09/telepammmm.png",
    "stream": "https://lakay.online/ott/telepam/tracks-v1a1/mono.m3u8"
  },
  {
    "id": "channel13",
    "name": "HMI Promz News",
    "logo": "https://i.imgur.com/gwPaw3v.png",
    "stream": "https://video1.getstreamhosting.com:1936/8326/8326/chunklist_w1322896209.m3u8"
  },
  {
    "id": "channel14",
    "name": "Radio Tele Boston",
    "logo": "https://i.ibb.co/x3Gx3Ps/unnamed.png",
    "stream": "https://tv2.fastcast4u.com:3238/live/radiotelebostonlive.m3u8"
  },
  {
    "id": "channel15",
    "name": "Fidele TV",
    "logo": "https://i.ytimg.com/vi/t8SJhjQvb_4/maxresdefault.jpg",
    "stream": "https://59d39900ebfb8.streamlock.net/FIDELETV/FIDELETV/chunklist_w1712363388.m3u8"
  },
  {
    "id": "channel16",
    "name": "BPX",
    "logo": "https://i.ibb.co/SvGYHS7/images-1.jpg",
    "stream": "https://video1.getstreamhosting.com:1936/8212/8212/playlist.m3u8"
  },
  {
    "id": "channel17",
    "name": "Nago TV",
    "logo": "https://i.ibb.co/fSnCtJb/nago-tv.png",
    "stream": "https://lakay.online/public/nagotv/tracks-v1/index.fmp4.m3u8"
  },
  {
    "id": "channel18",
    "name": "Tele 4VEH",
    "logo": "https://4veh.org/en/wp-content/uploads/2021/08/2021-logo-RT-4VEH-ENG-v8.png",
    "stream": "https://uni01rtmp.tulix.tv/4vehtv/4vehtv-firetv/playlist.m3u8"
  },
  {
    "id": "channel19",
    "name": "Tele Louange",
    "logo": "https://images.givelively.org/nonprofits/cb2020c9-71c2-4920-ad32-36f63bd7aef6/logos/christian-multi-media-network_processed_96612ebe1aaa555d1ff9fcfdde6a4cbc76db6b7adfcebbc48aa3ca3be40c8313_logo.png",
    "stream": "https://5790d294af2dc.streamlock.net/8124/8124/chunklist_w1901943944.m3u8"
  },
  {
    "id": "channel20",
    "name": "Adduction Media",
    "logo": "https://dslv9ilpbe7p1.cloudfront.net/nYhAQY37idxm1hlkmP1qPQ_store_logo_image.png",
    "stream": "https://5790d294af2dc.streamlock.net/rtvboost/rtvboost/chunklist_w115996771.m3u8"
  },
  {
    "id": "channel21",
    "name": "Madras FM TV",
    "logo": "https://www.monpetitforfait.com/comparateur-box-internet/wp-content/uploads/2020/06/madrasfm2.png",
    "stream": "https://edge12.vedge.infomaniak.com/livecast/ik:madrasfmtv/manifest.m3u8"
  },
  {
    "id": "channel22",
    "name": "Bblack Caribbean",
    "logo": "https://i1.wp.com/vjdid.com/wp-content/uploads/2017/10/logo-bblack-caribbean-contour-noir.png",
    "stream": "https://edge16.vedge.infomaniak.com/livecast/ik:bblackcaribbean/chunklist_w2059905249.m3u8"
  },
  {
    "id": "channel23",
    "name": "Bblack Africa",
    "logo": "https://i.ibb.co/mvJc4z0/maxresdefault.jpg",
    "stream": "https://edge16.vedge.infomaniak.com/livecast/ik:bblackafrica/chunklist_w2121971628.m3u8"
  },
  {
    "id": "channel24",
    "name": "Afrobeats",
    "logo": "https://www.shutterstock.com/image-vector/afro-beat-text-african-drums-260nw-1741803605.jpg",
    "stream": "https://stream.ecable.tv/afrobeats/index.m3u8"
  },
  {
    "id": "channel25",
    "name": "Trace Urban",
    "logo": "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5c/Trace_Urban_logo_2010.svg/2560px-Trace_Urban_logo_2010.svg.png",
    "stream": "https://lightning-traceurban-samsungau.amagi.tv/playlist.m3u8"
  },
  {
    "id": "channel26",
    "name": "Trace Latina",
    "logo": "https://upload.wikimedia.org/wikipedia/commons/thumb/0/04/TRACE_Latina_Logo.png/1280px-TRACE_Latina_Logo.png",
    "stream": "https://cdn-ue1-prod.tsv2.amagi.tv/linear/amg01131-tracetv-tracelatinait-samsungit/playlist.m3u8"
  },
  {
    "id": "channel27",
    "name": "DBM",
    "logo": "https://cdn6.aptoide.com/imgs/f/a/e/fae6e9aafb738fc5f81df9c0281cef8c_icon.png",
    "stream": "http://dbmtv.vedge.infomaniak.com/livecast/dbmtv/playlist.m3u8"
  },
  {
    "id": "channel28",
    "name": "TMA",
    "logo": "https://i.ibb.co/rtPW6pV/R.png",
    "stream": "http://hls.tmacaraibes.com/live/index.m3u8"
  },
  {
    "id": "channel29",
    "name": "Tele Pam",
    "logo": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTabRikF9IncQwcgdXkg3Xu2TwVwrnIHbZdjA&s",
    "stream": "https://lakay.online/web/telepam/tracks-v1a1/mono.m3u8"
  },
  {
    "id": "channel30",
    "name": "Tele Eclair",
    "logo": "https://cdn6.aptoide.com/imgs/e/7/5/e7523cdc2229b9659beedab45974698d_icon.png",
    "stream": "https://live.acwstream.com:3915/live/radioteleeclairlive.m3u8"
  },
  {
    "id": "channel31",
    "name": "TVA 30",
    "logo": "https://televariete.com/tva30/logo.png",
    "stream": "https://lakay.online/web/tva30/tracks-v1a1/mono.m3u8"
  },
  {
    "id": "channel32",
    "name": "Totalmix Radio",
    "logo": "https://cdn-radiotime-logos.tunein.com/s127273g.png",
    "stream": "https://2-fss-2.streamhoster.com/pl_138/205836-2391948-1/chunklist.m3u8"
  },
  {
    "id": "channel33",
    "name": "Television Caraibes",
    "logo": "https://i.ytimg.com/vi/G8E8iQtjiwE/hq720.jpg",
    "stream": "https://customer-gllhkkbamkskdl1p.cloudflarestream.com/.../stream.m3u8"
  }
],
    france: [
      {
        id: "fr_1",
        name: "France 24 (FR)",
        logo: "https://upload.wikimedia.org/wikipedia/commons/9/94/France_24_logo.svg",
        stream: "https://static.france24.com/live/F24_FR_HI/stream.m3u8"
      },
      {
        id: "fr_2",
        name: "TV5MONDE",
        logo: "https://upload.wikimedia.org/wikipedia/commons/3/3e/TV5Monde_logo_2016.svg",
        stream: "https://live.tv5monde.com/tv5monde_stream/playlist.m3u8"
      },
      {
        id: "fr_3",
        name: "BFM TV",
        logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1c/BFM_TV_logo_2021.svg/512px-BFM_TV_logo_2021.svg.png",
        stream: "https://bfmtv-bfmtv-live-hls.cdn.orange.fr/live-bfmtv-bfmtv-hls/live.m3u8"
      },
      {
        id: "fr_4",
        name: "Euronews FR",
        logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b1/Euronews_Logo_2016.svg/2560px-Euronews_Logo_2016.svg.png",
        stream: "https://rakuten-euronews-1-fr.samsung.wurl.tv/playlist.m3u8"
      },
      {
        id: "fr_5",
        name: "CNews",
        logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/fb/CNEWS_Logo_2017.svg/1280px-CNEWS_Logo_2017.svg.png",
        stream: "https://cnews-live-hls.orange.fr/live/cnews-hls/live.m3u8"
      }
    ],
    usa: [],
    caribbean: []
  };

  let favorites = JSON.parse(localStorage.getItem("favorites") || "[]");

  function renderChannels(category) {
    channelRows.innerHTML = "";
    const section = document.createElement("div");
    section.classList.add("channel-row");

    const channels = category === "favorites"
      ? Object.values(categories).flat().filter(c => favorites.includes(c.id))
      : categories[category] || [];

    const title = document.createElement("h2");
    title.textContent = category.charAt(0).toUpperCase() + category.slice(1);
    section.appendChild(title);

    const slider = document.createElement("div");
    slider.classList.add("channel-slider");

    channels.forEach(channel => {
      const card = document.createElement("div");
      
card.className = "channel-card";
card.setAttribute("tabindex", "0");
card.setAttribute("role", "button");
card.innerHTML = `
        <img src="${channel.logo}" alt="${channel.name}" />
        <div>${channel.name}</div>
        <button class="fav-btn" title="Favorite">${favorites.includes(channel.id) ? "★" : "☆"}</button>
      `;
card.addEventListener("keydown", (e) => {
  if (e.key === "Enter") playChannel(channel);
});

      card.querySelector(".fav-btn").addEventListener("click", (e) => {
        e.stopPropagation();
        toggleFavorite(channel.id);
      });
      card.addEventListener("click", () => playChannel(channel));
      slider.appendChild(card);
    });

    section.appendChild(slider);
    channelRows.appendChild(section);
    const firstCard = section.querySelector('.channel-card');
    if (firstCard) firstCard.focus();
  }

  function toggleFavorite(id) {
    const index = favorites.indexOf(id);
    if (index >= 0) favorites.splice(index, 1);
    else favorites.push(id);
    localStorage.setItem("favorites", JSON.stringify(favorites));
    const activeTab = document.querySelector(".menu-item.active").dataset.category;
    renderChannels(activeTab);
  }

  function playChannel(channel) {
    const video = document.getElementById("videoPlayer");
    const modal = document.getElementById("videoModal");
    document.getElementById("epgInfo").textContent = "Now: Example Show | Next: Sample Program";
    modal.style.display = "flex";

    if (Hls.isSupported()) {
      const hls = new Hls();
      hls.loadSource(channel.stream);
      hls.attachMedia(video);
    } else {
      video.src = channel.stream;
    }
  }

  document.getElementById("closePlayer").onclick = () => {
    const modal = document.getElementById("videoModal");
    const video = document.getElementById("videoPlayer");
    modal.style.display = "none";
    video.pause();
    video.src = "";
  };

  document.querySelectorAll(".menu-item").forEach(btn => {
    btn.setAttribute("tabindex", "0");
    btn.setAttribute("role", "button");
    btn.addEventListener("keydown", (e) => {
      if (e.key === "ArrowRight") {
        const firstCard = document.querySelector(".channel-card");
        if (firstCard) firstCard.focus();
      }
    });
    btn.addEventListener("click", () => {
      document.querySelectorAll(".menu-item").forEach(el => el.classList.remove("active"));
      btn.classList.add("active");
      renderChannels(btn.dataset.category);
    });
  });

  toggleSearch.addEventListener("click", () => {
    const isVisible = searchInput.style.display === "inline-block";
    searchInput.style.display = isVisible ? "none" : "inline-block";
    searchBtn.style.display = isVisible ? "none" : "inline-block";
    if (!isVisible) searchInput.focus();
  });

  searchBtn.addEventListener("click", () => {
    const term = searchInput.value.toLowerCase();
    const activeTab = document.querySelector(".menu-item.active").dataset.category;
    const allChannels = activeTab === "favorites" ? Object.values(categories).flat() : categories[activeTab];
    const matches = allChannels.filter(ch => ch.name.toLowerCase().includes(term));
    channelRows.innerHTML = "";
    const section = document.createElement("div");
    section.classList.add("channel-row");
    const title = document.createElement("h2");
    title.textContent = "Search Results";
    section.appendChild(title);
    const slider = document.createElement("div");
    slider.classList.add("channel-slider");
    matches.forEach(channel => {
      const card = document.createElement("div");
      
card.className = "channel-card";
card.setAttribute("tabindex", "0");
card.setAttribute("role", "button");
card.innerHTML = `
        <img src="${channel.logo}" alt="${channel.name}" />
        <div>${channel.name}</div>
        <button class="fav-btn" title="Favorite">${favorites.includes(channel.id) ? "★" : "☆"}</button>
      `;
card.addEventListener("keydown", (e) => {
  if (e.key === "Enter") playChannel(channel);
});

      card.querySelector(".fav-btn").addEventListener("click", (e) => {
        e.stopPropagation();
        toggleFavorite(channel.id);
      });
      card.addEventListener("click", () => playChannel(channel));
      slider.appendChild(card);
    });
    section.appendChild(slider);
    channelRows.appendChild(section);
    const firstCard = section.querySelector('.channel-card');
    if (firstCard) firstCard.focus();
  });

  renderChannels("haiti");
});
