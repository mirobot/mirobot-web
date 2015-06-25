(function(){
  var appsLink = document.createElement('a');
  appsLink.innerHTML = "Try Mirobot Apps!";
  appsLink.href = "http://apps.mirobot.io/#m=" + window.location.hostname
  var s = appsLink.style;
  s.background = '#33D121';
  s.border = 'none';
  s.color = '#FFF';
  s['font-size'] = '120%';
  s['text-decoration'] = 'none';
  s.position = 'absolute';
  s.left = '50%';
  s.top = '20px';
  s.display = 'block';
  s.padding = '10px';
  s['font-weight'] = 'bold';
  document.getElementById('header').appendChild(appsLink);
  var w = appsLink.getBoundingClientRect().width/2;
  s.margin = '0 0 0 -' + w + 'px';

  if(ui_version <= '201502261636'){
    var v = document.getElementById('version');
    v.parentNode.removeChild(v);
    v.style.position = 'static';
    var el = document.createElement('div');
    el.appendChild(v);
    el.style.position = 'absolute';
    el.style.bottom = '5px';
    el.style.right = '10px';
    el.style.width = '400px';
    el.style['text-align'] = 'right';
    var a = document.createElement('a');
    a.href = 'http://learn.mirobot.io/docs/update-firmware-v1/';
    a.innerHTML = 'Update Firmware';
    a.style['font-size'] = '75%';
    a.style.color = '#888';
    a.style.margin = '0 0 0 5px';
    el.appendChild(a);
    document.body.appendChild(el);
  }
})()