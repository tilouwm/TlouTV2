let lastFocusedChannel = null;

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
    usa: [
      {
    id: "usa_add_1",
    name: "ABC 25 Columbia",
    logo: "https://wpcdn.us-east-1.vip.tn-cloud.net/www.abccolumbia.com/content/uploads/2022/10/t/q/wolo-abc-25-columbia-440x200-1.png",
    stream: "https://fl1.moveonjoy.com/ABC_EAST/index.m3u8"
  },
  {
    id: "usa_add_2",
    name: "ACCN",
    logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSN_-z1o5WkbiEgNyNS0CBdcynX0QS_l_7emA&s",
    stream: "https://fl3.moveonjoy.com/ACC_NETWORK/index.m3u8"
  },
  {
    id: "usa_add_3",
    name: "AMC East",
    logo: "https://1000logos.net/wp-content/uploads/2023/05/AMC-TV-Logo-2013.png",
    stream: "https://fl5.moveonjoy.com/AMC_NETWORK/index.m3u8"
  },
  {
    id: "usa_add_4",
    name: "Aspire",
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/88/Aspire_tv.png/1200px-Aspire_tv.png",
    stream: "https://fl3.moveonjoy.com/Aspire/index.m3u8"
  },
  {
    id: "usa_add_5",
    name: "BBC America East",
    logo: "https://static.wikia.nocookie.net/logopedia/images/7/7d/BBC_America.svg/revision/latest?cb=20220330103750",
    stream: "https://fl3.moveonjoy.com/BBC_AMERICA/index.m3u8"
  },
  {
    id: "usa_add_6",
    name: "BBC News North America",
    logo: "https://pbs.twimg.com/profile_images/1288471278953869320/Ki2rybZI_400x400.jpg",
    stream: "https://fl3.moveonjoy.com/BBC_WORLD_NEWS/index.m3u8"
  },
  {
    id: "usa_add_7",
    name: "BET East",
    logo: "https://upload.wikimedia.org/wikipedia/commons/b/bd/BET-2021Logo.svg",
    stream: "https://fl3.moveonjoy.com/BET_EAST/index.m3u8"
  },
  {
    id: "usa_add_8",
    name: "BET Gospel",
    logo: "https://upload.wikimedia.org/wikipedia/commons/b/bd/BET-2021Logo.svg",
    stream: "https://fl3.moveonjoy.com/BET_GOSPEL/index.m3u8"
  },
  {
    id: "usa_add_9",
    name: "BET Her East",
    logo: "https://upload.wikimedia.org/wikipedia/commons/b/bd/BET-2021Logo.svg",
    stream: "https://fl3.moveonjoy.com/BET_HER/index.m3u8"
  },
  {
    id: "usa_add_10",
    name: "BET Jams",
    logo: "https://upload.wikimedia.org/wikipedia/commons/b/bd/BET-2021Logo.svg",
    stream: "https://fl3.moveonjoy.com/BET_Jams/index.m3u8"
  },
  {
    id: "usa_add_11",
    name: "BET Soul",
    logo: "https://upload.wikimedia.org/wikipedia/commons/b/bd/BET-2021Logo.svg",
    stream: "https://fl3.moveonjoy.com/BET_SOUL/index.m3u8"
  },
  {
    id: "usa_add_12",
    name: "Big Ten Network",
    logo: "https://upload.wikimedia.org/wikipedia/en/3/39/Big_Ten_Network_Logo.svg",
    stream: "https://fl3.moveonjoy.com/BIG_TEN_NETWORK/index.m3u8"
  },
  {
    id: "usa_add_13",
    name: "Bloomberg TV",
    logo: "https://cdn.worldvectorlogo.com/logos/bloomberg-television.svg",
    stream: "https://fl3.moveonjoy.com/BLOOMBERG/index.m3u8"
  },
  {
    id: "usa_add_14",
    name: "Bounce",
    logo: "https://storage.googleapis.com/btvwp-uploads/2018/10/515d1f8b-bounce_logo_720x486.jpg",
    stream: "https://fl3.moveonjoy.com/BOUNCE_TV/index.m3u8"
  },
  {
    id: "usa_add_15",
    name: "Bravo East",
    logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQeTvn0YFu54_I272EC-WlFG9g_2AixhInMQA&s",
    stream: "https://fl3.moveonjoy.com/BRAVO/index.m3u8"
  },
  {
    id: "usa_add_16",
    name: "Buzzr",
    logo: "https://upload.wikimedia.org/wikipedia/commons/d/d6/Buzzr_logo.svg",
    stream: "https://fl3.moveonjoy.com/Buzzr/index.m3u8"
  },
  {
    id: "usa_add_17",
    name: "C-SPAN",
    logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTsHDHUb2SVaYQMchfssEQoA4ydIwQi4k8nQg&s",
    stream: "https://fl3.moveonjoy.com/C-SPAN/index.m3u8"
  },
  {
    id: "usa_add_18",
    name: "CBS East",
    logo: "https://mms.businesswire.com/media/20201008005740/en/828766/5/cbs_hero_midnight_logo_092220.jpg?download=1",
    stream: "https://fl3.moveonjoy.com/CBS_News/index.m3u8"
  },
  {
    id: "usa_add_19",
    name: "CBS Sports Network USA",
    logo: "https://public-assets-pressexpress.s3.amazonaws.com/assets/releases/docimages/2250/887144-854918/a4df4ef049b119253c9833bea8ed6515.jpg",
    stream: "https://fl3.moveonjoy.com/CBS_SPORTS_NETWORK/index.m3u8"
  },
  {
    id: "usa_add_20",
    name: "Cleo TV",
    logo: "https://yt3.googleusercontent.com/mvn0bshh5-0dg2UipmuTFjE9EP8TEm4et3y4PxIeO86z7k9zELp_RC-lYAE5YCH2OsM3yA7ACRE=s900-c-k-c0x00ffffff-no-rj",
    stream: "https://fl3.moveonjoy.com/Cleo_TV/index.m3u8"
  },
  {
    id: "usa_add_21",
    name: "CMT East",
    logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRJNerMmzRfov4WRmqzeCXvk4Hkvk02pjzx1g&s",
    stream: "https://fl3.moveonjoy.com/CMT/index.m3u8"
  },
  {
    id: "usa_add_22",
    name: "CNBC",
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/db/CNBC_2023.svg/1200px-CNBC_2023.svg.png",
    stream: "https://fl3.moveonjoy.com/CNBC/index.m3u8"
  },
  {
    id: "usa_add_24",
    name: "Comedy Central East",
    logo: "https://variety.com/wp-content/uploads/2013/10/comedy_central_logo-black.jpg",
    stream: "https://fl3.moveonjoy.com/Comedy_Central/index.m3u8"
  },
  {
    id: "usa_add_25",
    name: "Comet",
    logo: "https://upload.wikimedia.org/wikipedia/commons/9/97/Comet_logo.svg",
    stream: "https://fl3.moveonjoy.com/COMET/index.m3u8"
  },
  {
  id: "usa_add_26",
  name: "Court TV",
  logo: "https://upload.wikimedia.org/wikipedia/en/b/bf/Court_TV_2019.png",
  stream: "https://fl3.moveonjoy.com/COURT_TV/index.m3u8"
},
{
  id: "usa_add_27",
  name: "Cozi TV",
  logo: "https://cdn.mos.cms.futurecdn.net/A2nAS4YiEfQAmjp87PbJ78-1200-80.jpg",
  stream: "https://fl3.moveonjoy.com/COZI_TV/index.m3u8"
},
{
  id: "usa_add_28",
  name: "Crave 1",
  logo: "https://brucetelecom.com/wp-content/uploads/2019/12/Crave-1.png",
  stream: "https://fl3.moveonjoy.com/CRAVE_1/index.m3u8"
},
{
  id: "usa_add_29",
  name: "Crave 2",
  logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSVN8QzuooUeDoBoEac4WR0Okjig1tMW0wIGw&s",
  stream: "https://fl3.moveonjoy.com/CRAVE_2/index.m3u8"
},
{
  id: "usa_add_30",
  name: "Crave 3",
  logo: "https://www.start.ca/wp-content/uploads/2022/09/StartTV_ChannelLogos_Crave3.png",
  stream: "https://fl3.moveonjoy.com/CRAVE_3/index.m3u8"
},
{
  id: "usa_add_31",
  name: "Crave 4",
  logo: "https://www.cooptel.ca/wp-content/uploads/2022/01/Crave4.png",
  stream: "https://fl3.moveonjoy.com/CRAVE_4/index.m3u8"
},
{
  id: "usa_add_33",
  name: "Disney Channel East",
  logo: "https://static.wikia.nocookie.net/dreamlogos/images/4/48/Disney_channel_Logo_2010.png",
  stream: "https://fl5.moveonjoy.com/DISNEY/index.m3u8"
},
{
  id: "usa_add_34",
  name: "Disney Junior East",
  logo: "https://static.wikia.nocookie.net/tgif/images/8/83/Disney_Junior_Logo.png/revision/latest?cb=20230529162024",
  stream: "https://fl3.moveonjoy.com/DISNEY_JR/index.m3u8"
},
{
  id: "usa_add_35",
  name: "Disney XD West",
  logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a8/2015_Disney_XD_logo.svg/800px-2015_Disney_XD_logo.svg.png",
  stream: "https://fl3.moveonjoy.com/DISNEY_XD/index.m3u8"
},
{
  id: "usa_add_36",
  name: "E! East",
  logo: "https://yt3.googleusercontent.com/5dENunTd9mqCTygK6W2EBKC7aWW_v4odPBFVikDFIXvGJXv8wpiTdQycysr9P4cyzBjAnXkwZA=s900-c-k-c0x00ffffff-no-rj",
  stream: "https://fl3.moveonjoy.com/E_ENTERTAINMENT_TELEVISION/index.m3u8"
},
{
  id: "usa_add_37",
  name: "ESPN U",
  logo: "https://static.wikia.nocookie.net/disney/images/6/62/2000px-ESPN_U.svg.png/revision/latest?cb=20121029061856",
  stream: "https://fl3.moveonjoy.com/ESPN_U/index.m3u8"
},
{
  id: "usa_add_38",
  name: "ESPNews",
  logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSkHwQu-zJYQZ-35odEWWMpzg4AUGrCv4mLWw&s",
  stream: "https://fl3.moveonjoy.com/ESPN_NEWS/index.m3u8"
},
{
  id: "usa_add_39",
  name: "Fox Business Network",
  logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSNai03uLWEQU2VNYbFtBo22ZOdLGzIFLpPOg&s",
  stream: "https://fl3.moveonjoy.com/FOX_Business_Network/index.m3u8"
},
{
  id: "usa_add_40",
  name: "Fox News Channel",
  logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/67/Fox_News_Channel_logo.svg/1200px-Fox_News_Channel_logo.svg.png",
  stream: "https://fl1.moveonjoy.com/FOX_NEWS_CHANNEL/index.m3u8"
},
{
  id: "usa_add_45",
  name: "Fox Soul",
  logo: "https://images-cdn1.welcomesoftware.com/assets/fox+soul.jpg/Zz0wZGFmNWM3OGEyMDMxMWVmYTEwM2QyZTIxN2ExY2U1OA==?width=768&height=430",
  stream: "https://fl1.moveonjoy.com/FOX_SOUL/index.m3u8"
},
{
  id: "usa_add_46",
  name: "Fox Sports 1",
  logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/37/2015_Fox_Sports_1_logo.svg/1200px-2015_Fox_Sports_1_logo.svg.png",
  stream: "https://fl3.moveonjoy.com/FOX_Sports_1/index.m3u8"
},
{
  id: "usa_add_47",
  name: "Free form East",
  logo: "https://assets.cdn.watchdisneyfe.com/delta/assets/freeform/freeform-new-og.jpg",
  stream: "https://fl3.moveonjoy.com/FREE_FORM/index.m3u8"
},
{
  id: "usa_add_48",
  name: "Fuse East",
  logo: "https://upload.wikimedia.org/wikipedia/commons/c/c2/Fuse_Black_Logo_2017.png",
  stream: "https://fl3.moveonjoy.com/FUSE/index.m3u8"
},
{
  id: "usa_add_49",
  name: "FX East",
  logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRwPbDnP0clpoBoMBh_S1Cjnrb3fdjYXbrL_Q&s",
  stream: "https://fl5.moveonjoy.com/FX/index.m3u8"
},
{
  id: "usa_add_50",
  name: "FXM East",
  logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/cb/FX_Movies_logo.svg/1200px-FX_Movies_logo.svg.png",
  stream: "https://fl3.moveonjoy.com/FX_MOVIE/index.m3u8"
},
{
  id: "usa_add_51",
  name: "FXX East",
  logo: "https://static.wikia.nocookie.net/logo-timeline/images/1/11/FXX.png/revision/latest?cb=20191230235038",
  stream: "https://fl3.moveonjoy.com/FXX/index.m3u8"
},
{
  id: "usa_add_52",
  name: "FYI East",
  logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQTLSRenw5gtqCGVk20rfOFf8E-ExU8x_xpMA&s",
  stream: "https://fl3.moveonjoy.com/FYI/index.m3u8"
},
{
  id: "usa_add_55",
  name: "Grit",
  logo: "https://static.wikia.nocookie.net/logopedia/images/0/0d/Grit_TV_White.png/revision/latest?cb=20220930152416",
  stream: "https://fl3.moveonjoy.com/GRIT_TV/index.m3u8"
},
{
  id: "usa_add_56",
  name: "Hallmark Channel East",
  logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT-J7zIbdW9VBBgM_qI1YiOcZUtpPUJD7o6zA&s",
  stream: "https://fl3.moveonjoy.com/HALLMARK_CHANNEL/index.m3u8"
},
{
  id: "usa_add_57",
  name: "Hallmark Drama",
  logo: "https://static.wikia.nocookie.net/logopedia/images/3/33/Hallmark_Drama_%28Gold%29.svg/revision/latest?cb=20171130164502",
  stream: "https://fl3.moveonjoy.com/HALLMARK_DRAMA/index.m3u8"
},
{
  id: "usa_add_58",
  name: "Hallmark Movies Mysteries East",
  logo: "https://w7.pngwing.com/pngs/5/426/png-transparent-hallmark-movies-mysteries-television-channel-hallmark-channel-television-show-movies-miscellaneous-television-blue.png",
  stream: "https://fl3.moveonjoy.com/HALLMARK_MOVIES_MYSTERIES/index.m3u8"
},
{
  id: "usa_add_61",
  name: "ION Plus East",
  logo: "https://upload.wikimedia.org/wikipedia/commons/3/31/ION_Plus_logo.svg",
  stream: "https://fl3.moveonjoy.com/ION_Plus/index.m3u8"
},
{
  id: "usa_add_62",
  name: "ION TV East",
  logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSEtcBJTvmPG5_4v1lhDP0OmPHO8a6xzmoPJQ&s",
  stream: "https://fl3.moveonjoy.com/ION_TV/index.m3u8"
},
{
  id: "usa_add_64",
  name: "Lifetime East",
  logo: "https://seeklogo.com/images/L/lifetime-tv-logo-F20AAEFC65-seeklogo.com.png",
  stream: "https://fl3.moveonjoy.com/LIFETIME/index.m3u8"
},
{
  id: "usa_add_65",
  name: "Lifetime Movies East",
  logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRPIsc5e84R2yGOBzTfRYrDrWPS1XxGSDnwfg&s",
  stream: "https://fl3.moveonjoy.com/LIFETIME_MOVIE_NETWORK/index.m3u8"
},
{
  id: "usa_add_68",
  name: "MGM+ East",
  logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRodA0w8wryO_aWhBpe2VFse-H3t2ku2krSuQ&s",
  stream: "https://fl3.moveonjoy.com/EPIX/index.m3u8"
},
{
  id: "usa_add_69",
  name: "MGM+ Marquee",
  logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQSAf8b2zYbf2FFZnrb8UUue458Czph5Qileg&s",
  stream: "https://fl3.moveonjoy.com/EPIX_DRIVE_IN/index.m3u8"
},
{
  id: "usa_add_71",
  name: "MSG",
  logo: "https://www.tvguide.com/a/img/resize/85ca5dd1f043693fce1aebaa8514d4eddd9efd81/hub/2023/03/28/d9eb9621-3fbf-490e-8382-c682223fe857/msglogo.png?auto=webp&format=pjpg",
  stream: "https://fl3.moveonjoy.com/MSG/index.m3u8"
},
{
  id: "usa_add_72",
  name: "MTV2 (720p)",
  logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSbVX8N9caR7p2W_ortNcizqoqknzxTks7RBQ&s",
  stream: "https://fl5.moveonjoy.com/MTV_2/index.m3u8"
},
{
  id: "usa_add_75",
  name: "MTV Classic East",
  logo: "https://upload.wikimedia.org/wikipedia/commons/1/10/MTV_Classic_US.svg",
  stream: "https://fl3.moveonjoy.com/MTV_CLASSIC/index.m3u8"
},
{
  id: "usa_add_78",
  name: "MTV Live",
  logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTMCRxr3ARrMGyNPsZZE7Pij1zh3hx9X8_afw&s",
  stream: "https://fl5.moveonjoy.com/MTV_LIVE/index.m3u8"
},
{
  id: "usa_add_79",
  name: "MTVU",
  logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQFTiUoU82UF2uuA4J5JY5Dd2pQwH1hUcj9ug&s",
  stream: "https://fl3.moveonjoy.com/MTV_U/index.m3u8"
},
{
  id: "usa_add_81",
  name: "Much (720p)",
  logo: "https://static.tvtropes.org/pmwiki/pub/images/297px_muchmusic_logosvg.png",
  stream: "https://fl1.moveonjoy.com/MUCH/index.m3u8"
},
{
  id: "usa_add_82",
  name: "National Geographic East",
  logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQIzwzDXCZwlRY36-gtGasdQWUiuN5Vhuwpvg&s",
  stream: "https://fl3.moveonjoy.com/National_Geographic/index.m3u8"
},
{
  id: "usa_add_83",
  name: "National Geographic Wild East",
  logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/27/National_Geographic_Wild_logo.svg/1200px-National_Geographic_Wild_logo.svg.png",
  stream: "https://fl3.moveonjoy.com/Nat_Geo_Wild/index.m3u8"
},
{
  id: "usa_add_84",
  name: "NBA TV",
  logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQKZFiCQeT2twfp-iI5i2GAeODTyC3nGG9Vhg&s",
  stream: "https://fl3.moveonjoy.com/NBA_TV/index.m3u8"
},
{
  id: "usa_add_90",
  name: "Nick Jr. East",
  logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQEScHipCYb9eKnxlmAs_3-DAVbVuOxwK2yBQ&s",
  stream: "https://fl5.moveonjoy.com/NICK_JR/index.m3u8"
},
{
  id: "usa_add_91",
  name: "Nick Music",
  logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSbY2G7jmTxniEqH-nhDLg3BTG1lgYpA9hmjA&s",
  stream: "https://fl3.moveonjoy.com/NICK_MUSIC/index.m3u8"
},
{
  id: "usa_add_93",
  name: "Nicktoons East",
  logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRXEgXKyX_NeizFt7UPM5jYGjnXRoGy5Xc2Qw&s",
  stream: "https://fl1.moveonjoy.com/NICKTOONS/index.m3u8"
},
{
  id: "usa_add_95",
  name: "OuterMax East (720p)",
  logo: "https://static.wikia.nocookie.net/logosfake/images/b/b5/OuterMax_%282001%29.svg/revision/latest?cb=20210119152852",
  stream: "https://fl3.moveonjoy.com/OUTER_MAX/index.m3u8"
},
{
  id: "usa_add_98",
  name: "Oxygen East",
  logo: "https://www.tvinsider.com/wp-content/uploads/2020/05/oxygen.png",
  stream: "https://fl3.moveonjoy.com/OXYGEN/index.m3u8"
},
{
  id: "usa_add_99",
  name: "Paramount Network East",
  logo: "https://yt3.googleusercontent.com/nX44BMyDJbQEAiu7EIi3tCc3vjVNyywnp35ZPKFkp2g9MGKwdTHIrKsj9tZsRjGdmcrBnC0B=s900-c-k-c0x00ffffff-no-rj",
  stream: "https://fl3.moveonjoy.com/PARAMOUNT_NETWORK/index.m3u8"
},
{
  id: "usa_add_102",
  name: "Reelz (720p)",
  logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTWQSaJB4n1YVcfJjmuy85iNdIiFsm85kNcIg&s",
  stream: "https://fl3.moveonjoy.com/REELZ/index.m3u8"
},
{
  id: "usa_add_103",
  name: "Revolt",
  logo: "https://cdnimg.spectrum.net/imageserver/image/default?providerId=REVOLT_TV_HD&productId=MUSOD&sourceType=colorHybrid",
  stream: "https://fl3.moveonjoy.com/REVOLT/index.m3u8"
},
{
  id: "usa_add_104",
  name: "Showtime 2 East",
  logo: "https://static.wikia.nocookie.net/logopedia/images/3/34/Showtime_2_East_%281997%29.svg/revision/latest?cb=20250211205009",
  stream: "https://fl3.moveonjoy.com/SHOWTIME_2/index.m3u8"
},
{
  id: "usa_add_105",
  name: "Showtime East",
  logo: "https://cordcutting.com/wp-content/uploads/2019/12/Showtime-Logo-New.png",
  stream: "https://fl3.moveonjoy.com/SHOWTIME/index.m3u8"
},
{
  id: "usa_add_106",
  name: "Showtime Next East",
  logo: "https://static.wikia.nocookie.net/logopedia/images/7/78/Showtime_Next_%282022-%29.svg/revision/latest/scale-to-width-down/300?cb=20230126015111",
  stream: "https://fl3.moveonjoy.com/SHOWTIME_NEXT/index.m3u8"
},
{
  id: "usa_add_107",
  name: "Showtime West",
  logo: "https://cdn.freebiesupply.com/logos/thumbs/2x/showtime-west-logo.png",
  stream: "https://fl3.moveonjoy.com/SHOWTIME_WEST/index.m3u8"
},
{
  id: "usa_add_108",
  name: "Showtime Women East",
  logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSFp0Cak_gOInKsfkWGzNfv7B7SZzwqZH5opQ&s",
  stream: "https://fl3.moveonjoy.com/SHOWTIME_WOMEN/index.m3u8"
},
{
  id: "usa_add_113",
  name: "Starz East",
  logo: "https://yt3.googleusercontent.com/Q_vwnQ-ml3qjT9WU1Ji6aiPyHTqw2-DRE0selV1F2KdXnV8YI-pQb4r55bcEnXNUP3ja2YYK=s900-c-k-c0x00ffffff-no-rj",
  stream: "https://fl3.moveonjoy.com/STARZ/index.m3u8"
},
{
  id: "usa_add_114",
  name: "Starz Encore Classic East",
  logo: "https://upload.wikimedia.org/wikipedia/commons/1/19/Starz_Encore_Classic.svg",
  stream: "https://fl5.moveonjoy.com/STARZ_ENCORE_CLASSIC/index.m3u8"
},
{
  id: "usa_add_115",
  name: "Starz West",
  logo: "https://cdn.freebiesupply.com/logos/large/2x/starz-west-logo-svg-vector.svg",
  stream: "https://fl3.moveonjoy.com/STARZ_WEST/index.m3u8"
},
{
  id: "usa_add_116",
  name: "Sundance TV East",
  logo: "https://www.hollywoodreporter.com/wp-content/uploads/2014/01/sundancetv_logo_a_l.jpg",
  stream: "https://fl3.moveonjoy.com/SUNDANCE/index.m3u8"
},
{
  id: "usa_add_117",
  name: "Syfy East",
  logo: "https://yt3.googleusercontent.com/PAO1zdi5-ZWaGxsxARO14s66fAZ201ufG0qDdyFk0TMID7cs_s3xEmTxTWEgI2wKJd5d85N3l3I=s900-c-k-c0x00ffffff-no-rj",
  stream: "https://fl3.moveonjoy.com/SYFY/index.m3u8"
},
{
  id: "usa_add_119",
  name: "TSN1",
  logo: "https://www.tsn.ca/polopoly_fs/1.1104783!/fileimage/httpImage/image.jpg_gen/derivatives/landscape_620/tsn.jpg",
  stream: "https://fl5.moveonjoy.com/TSN_1/index.m3u8"
},
{
  id: "usa_add_120",
  name: "TSN2",
  logo: "https://www.tsn.ca/polopoly_fs/1.1104783!/fileimage/httpImage/image.jpg_gen/derivatives/landscape_620/tsn.jpg",
  stream: "https://fl5.moveonjoy.com/TSN_2/index.m3u8"
},
{
  id: "usa_add_121",
  name: "TSN3",
  logo: "https://www.tsn.ca/polopoly_fs/1.1104783!/fileimage/httpImage/image.jpg_gen/derivatives/landscape_620/tsn.jpg",
  stream: "https://fl5.moveonjoy.com/TSN_3/index.m3u8"
},
{
  id: "usa_add_122",
  name: "TSN4",
  logo: "https://www.tsn.ca/polopoly_fs/1.1104783!/fileimage/httpImage/image.jpg_gen/derivatives/landscape_620/tsn.jpg",
  stream: "https://fl5.moveonjoy.com/TSN_4/index.m3u8"
},
{
  id: "usa_add_123",
  name: "TSN5",
  logo: "https://www.tsn.ca/polopoly_fs/1.1104783!/fileimage/httpImage/image.jpg_gen/derivatives/landscape_620/tsn.jpg",
  stream: "https://fl5.moveonjoy.com/TSN_5/index.m3u8"
},
{
  id: "usa_add_124",
  name: "TV Land East",
  logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTmPRBJpl2ayOfp9ooR5E9XC6nMerBr_VK9KQ&s",
  stream: "https://fl3.moveonjoy.com/TV_Land/index.m3u8"
},
{
  id: "usa_add_125",
  name: "TV One",
  logo: "https://i1.wp.com/tvone.tv/wp-content/uploads/sites/97/2017/01/Logo-2.jpg?zoom=2&resize=266%2C266&quality=80&strip=all&ssl=1",
  stream: "https://fl3.moveonjoy.com/TV_ONE/index.m3u8"
}
    ],
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
  lastFocusedChannel = document.activeElement;
  const video = document.getElementById("videoPlayer");
  const modal = document.getElementById("videoModal");
  modal.style.display = "flex";
  document.body.style.overflow = "hidden";
  document.querySelector(".main-content").style.display = "none";
  document.getElementById("menu").style.display = "none";

  // Native fullscreen on Firestick/AndroidTV
  const isFireDevice = /aft|android tv/i.test(navigator.userAgent);
  if (isFireDevice && video.requestFullscreen) {
    setTimeout(() => {
      video.requestFullscreen().catch(() => {});
    }, 500);
  }

  video.focus();


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
    document.body.style.overflow = "";
    document.querySelector(".main-content").style.display = "";
    document.getElementById("menu").style.display = "";
    if (document.fullscreenElement) {
      document.exitFullscreen().catch(() => {});
    }
    if (lastFocusedChannel) {
      lastFocusedChannel.focus();
    }
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


window.addEventListener('keydown', function(e) {
  if (e.key === "Backspace" || e.key === "Escape") {
    const modal = document.getElementById("videoModal");
    if (modal && modal.style.display === "flex") {
      if (document.fullscreenElement) {
        document.exitFullscreen().catch(() => {});
      }
      document.getElementById("closePlayer").click();
      e.preventDefault();
    }
  }
});
