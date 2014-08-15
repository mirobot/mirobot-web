console.log('loading remote app');
has_remote_conn = true;
var mirobot;
var latest_ui_version = undefined;
var latest_ui_file = undefined;

var mirobot_version = 'unknown';

var el = function(id){
  return document.getElementById(id);
}

updateWirelessConfig = function(config){
  wirelessConfig = config;

  var conn = el('wifiConnState');
  if(wirelessConfig.wan_setting_ip === '0.0.0.0'){
    conn.innerHTML = '&#10007; Configure WiFi';
    conn.className = 'connState';
  }else{
    conn.innerHTML = '&#10003; Connected to WiFi (' + wirelessConfig.cover_sta_rssi + ')';
    conn.className = 'connState connected';
  }
}

var escEvent = function(event, modal){
  if (event.which === 27) { // 27 == "esc"
    // hide the dialog
    hideModal(modal);
  }
}

var hideModal = function(modal){
  el(modal).style.display = 'none';
  // unbind the event
  document.body.onkeyup = undefined;
}

var configureWifi = function(e){
  e.preventDefault();
  el('wifiFrame').src = '/wireless_en.html';
  el('wifiConfig').style.display = 'block';
  el('wifiContent').onclick = function(e){e.stopPropagation()};
  el('wifiConfig').onclick = function(){hideModal('wifiConfig')};
  document.body.onkeyup = function(e){ escEvent(e, 'wifiConfig')};
}

var downloadLatestUIVersion = function(){
    var hiddenIFrameID = 'hiddenDownloader',
        iframe = document.getElementById(hiddenIFrameID);
    if (iframe === null) {
        iframe = document.createElement('iframe');
        iframe.id = hiddenIFrameID;
        iframe.style.display = 'none';
        document.body.appendChild(iframe);
    }
    iframe.src = latest_ui_file;
}

var upgradeUI = function(){
  if(latest_ui_version){
    el('upgradeUI').style.display = 'block';
    el('upgradeUIContent').onclick = function(e){e.stopPropagation()};
    el('upgradeUI').onclick = function(){hideModal('upgradeUI')};
  document.body.onkeyup = function(e){ escEvent(e, 'upgradeUI')};
  }
}

var setVersions = function(){
  var versionString = "Firmware version: " + mirobot_version + " | UI version: " + ui_version;
  if(latest_ui_version && latest_ui_version > ui_version){
    versionString += ' <a href="#" onclick="upgradeUI();return false;">Upgrade</a>';
  }
  el('version').innerHTML = versionString;
}

var getVersion = function(){
  mirobot.version(function(state, msg){
    if(msg.msg){
      mirobot_version = msg.msg;
    }
    setVersions();
  });
}

var checkUIVersion = function(){
  if(has_remote_conn){
    $.ajax("https://api.github.com/repos/bjpirt/mirobot-ui/releases", {
      success: function(res){
        if(res.length > 0){
          latest_ui_version = res[0].tag_name;
          if(res[0].assets.length > 0){
            for(var i in res[0].assets){
              if(res[0].assets[i].name === 'mirobot.bin'){
                latest_ui_file = res[0].assets[i].browser_download_url;
              }
            }
          }
          setVersions();
        }
      }
    });
  }
}

var initProgram = function(){
  var host;
  if(window.location.hash !== '' && window.location.hash.match(/#m=/)){
    host = window.location.hash.replace('#m=', '')
  }else{
    host = window.location.hostname;
  }
  mirobot = new Mirobot('ws://' + host + ':8899/websocket');
  var builder = new Builder($('#code'), mirobot);

  var mirobotHandler = function(state){
    var conn = $('#miroConnState');
    if(state === 'connected'){
      if(mirobot_version === 'unknown'){
        window.setTimeout(getVersion, 1000);
      }
      $(conn).html('&#10003; Connected to Mirobot');
      $(conn).addClass('connected');
    }else if(state === 'disconnected'){
      $(conn).html('&#10007; Reconnecting to Mirobot');
      $(conn).removeClass('connected');
    }
  }

  checkUIVersion();

  mirobot.addListener(mirobotHandler);
}

LoadScripts(['jquery-custom-min.js', 'jquery-sortable.js', 'mirobot.js', 'builder.js'], '/', function(){
  initProgram();
});

updateWirelessConfig(wirelessConfig);
el('wifiConnState').onclick = configureWifi;
setVersions();