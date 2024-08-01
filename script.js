document.addEventListener('DOMContentLoaded', function() {
  const logoAnimation = document.getElementById('logoAnimation');
  const mainContent = document.querySelectorAll('#mainContent');

  // Hide the logo animation and show the main content after 2 seconds
  setTimeout(function() {
      logoAnimation.style.display = 'none';
      mainContent.forEach(element => {
          element.style.display = 'block';
      });
  }, 2000); // Duration of the animation in milliseconds
});

function openChannel(channelId) {
  let url = '';
  switch(channelId) {
      case 'channel1':
          url = 'https://live-hls-xpil.livepush.io/live_cdn/emB7xoUdyMbnjH8/tracks-v1a1/mono.m3u8'; // Tele Pacific
          break;
      case 'channel2':
          url = 'http://teleginen.srfms.com:1935/teleginen/livestream/chunklist_w531595620.m3u8'; // Tele Ginen
          break;
      case 'channel3':
          url = 'https://haititivi.com/website/haitinews/index.m3u8'; // Haiti News
          break;
      case 'channel4':
          url = 'https://dacastmmd.mmdlive.lldns.net/dacastmmd/596115da85954b4da6ed86c199f2501c/chunklist_b4628000.m3u8'; // Ayiti TV
          break;
      case 'channel5':
          url = 'https://haititivi.com/haiti/telemix1/tracks-v1a1/mono.m3u8'; // Telemix
          break;
      case 'channel6':
          url = 'https://haititivi.com/haititv/tvs/mono.m3u8'; // Tele Labrise
          break;
      case 'channel7':
          url = 'https://video1.getstreamhosting.com:1936/8055/8055/chunklist_w1507178321.m3u8'; // Kajou TV
          break;
      case 'channel8':
          url = 'https://2-fss-2.streamhoster.com/pl_120/amlst:206708-4203440/chunklist_b3500000.m3u8'; // RTH 2000
          break;
      case 'channel9':
          url = 'https://2-fss-2.streamhoster.com/pl_120/amlst:206708-4202592/chunklist_b2000000.m3u8'; // RTH 2000 TV2
          break;
      case 'channel10':
          url = 'https://video1.getstreamhosting.com:1936/8560/8560/chunklist_w486676635.m3u8'; // Radio Tele Puissance
          break;
      case 'channel11':
          url = 'https://59d39900ebfb8.streamlock.net/4DIASPOTV/4DIASPOTV/chunklist_w507710567.m3u8'; // 4Diaspo TV
          break;
      case 'channel12':
          url = 'https://lakay.online/ott/telepam/tracks-v1a1/mono.m3u8'; // Tele Pam
          break;
      case 'channel13':
          url = 'rtmp://62.151.177.172/live5//telebiznispam'; // Radio Tele Biznis Pam
          break;
      case 'channel14':
          url = 'http://162.244.81.145:3333/live//telebostonrtb/chunklist_w649067629.m3u8'; // Radio Tele Boston
          break;
      case 'channel15':
          url = 'https://59d39900ebfb8.streamlock.net/FIDELETV/FIDELETV/chunklist_w1712363388.m3u8'; // Fidele TV
          break;
      case 'channel16':
          url = 'http://server.teletripotay.com/tripotay2/tracks-v1a1/mono.m3u8'; // Tripotay Lakay
          break;
      case 'channel17':
          url = 'https://ythls.armelin.one/channel/UCLeNHM8XDkZmd2rhV3ZG7Vg.m3u8'; // Pitit Manman Marie TV
          break;
      case 'channel18':
          url = 'https://uni01rtmp.tulix.tv/4vehtv/4vehtv-firetv/playlist.m3u8'; // Radio Télé 4VEH
          break;
      case 'channel19':
          url = 'https://5790d294af2dc.streamlock.net/8124/8124/chunklist_w1901943944.m3u8'; // Tele Louange
          break;
      case 'channel20':
          url = 'https://5790d294af2dc.streamlock.net/rtvboost/rtvboost/chunklist_w115996771.m3u8'; // Adduction Media
          break;
      case 'channel21':
          url = 'https://edge12.vedge.infomaniak.com/livecast/ik:madrasfmtv/manifest.m3u8'; // Madras FM TV
          break;
      case 'channel22':
          url = 'https://edge16.vedge.infomaniak.com/livecast/ik:bblackcaribbean/chunklist_w2059905249.m3u8'; // Bblack Caribbean
          break;
      case 'channel23':
          url = 'https://edge16.vedge.infomaniak.com/livecast/ik:bblackafrica/chunklist_w2121971628.m3u8'; // Bblack Africa
          break;
      case 'channel24':
          url = 'https://stream.ecable.tv/afrobeats/index.m3u8'; // Afrobeats
          break;
      case 'channel25':
          url = 'https://lightning-traceurban-samsungau.amagi.tv/playlist.m3u8'; // Trace Urban
          break;
      case 'channel26':
          url = 'https://cdn-ue1-prod.tsv2.amagi.tv/linear/amg01131-tracetv-tracelatinait-samsungit/playlist.m3u8'; // Trace Latina
          break;
      case 'channel27':
          url = 'http://dbmtv.vedge.infomaniak.com/livecast/dbmtv/playlist.m3u8'; // DBM
          break;
      case 'channel28':
          url = 'http://hls.tmacaraibes.com/live/index.m3u8'; // TMA
          break;
      default:
          alert('Channel not found!');
          return;
  }
  window.open(url, '_blank');
}

// Handle focus for Android TV remote control
document.querySelectorAll('.channel').forEach(channel => {
  channel.addEventListener('focus', (e) => {
      channel.classList.add('focus');
  });
  channel.addEventListener('blur', (e) => {
      channel.classList.remove('focus');
  });
});
