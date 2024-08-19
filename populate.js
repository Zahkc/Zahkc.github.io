stars = 0;
while (stars <= 100) {
  x = 16;
  y = 50;
  while ((x >= 12 && x <=24) && (y >= 25 && y <=75)) {
    x = Math.floor(Math.random() * 995)/10;
    y = Math.floor(Math.random() * 995)/10;
  }
  a = Math.floor(Math.random() * 500) + 500;
  newLine = '<div class="glow" style=" top: ' + x + '%; left: ' + y + '%;"><div class="bigStar" style="animation: glimmer ' + a + 'ms infinite;"></div></div>';
  stars++;
  document.getElementById("galaxy").innerHTML += newLine;
}

stars = 0;
while (stars <= 500) {
  x = 16;
  y = 50;
  while ((x >= 12 && x <=24) && (y >= 25 && y <=75)) {
    x = Math.floor(Math.random() * 995)/10;
    y = Math.floor(Math.random() * 995)/10;
  }
  newLine = '<div class="smallStar" style=" top: ' + x + '%; left: ' + y + '%;"></div>';
  stars++;
  document.getElementById("galaxy").innerHTML += newLine;
}

const spinring = document.querySelector('.spinring');
const text = spinring.innerHTML;
spinring.innerHTML = '';
spinring.style.setProperty('--numchs', text.length);
for ( let i = 0; i < text.length; i++ ) {
  spinring.innerHTML = spinring.innerHTML + '<div class="char" style="--char-index: ' + i + ';">' + text.charAt(i) + '</div>';
}

vaccume(12);

async function vaccume(fallingCount){
  for (let i = 0; i < fallingCount; i++) {
    document.getElementById("galaxy").innerHTML += '<div id="star' + i + '"></div>';
  }
  starPos = 0;
  while (true){
    yMax = window.innerHeight - (window.innerHeight*0.0075);
    xMax = window.innerWidth - (window.innerHeight*0.0075);
    flingStar(starPos%fallingCount);
    starPos++;
    await new Promise(r => setTimeout(r, 500));
  }
}

function flingStar(starPos) {
  switch(Math.floor(Math.random() *4)) {
    case 0:
      xStart = Math.floor(Math.random() * xMax );
      yStart = 0;
      xArc = xStart;
      yArc = yMax + 10;
      break;
    case 1:
      xStart = 0;
      yStart = Math.floor(Math.random() * yMax );
      xArc = xMax + 10;
      yArc = yStart;
      break;
    case 2:
      xStart = Math.floor(Math.random() * xMax );
      yStart = yMax;
      xArc = xStart;
      yArc = - 10;
      break;
    case 3:
      xStart = xMax;
      yStart = Math.floor(Math.random() * yMax );
      xArc = -10;
      yArc = yStart;
  }

  path = "'M " +
  xStart + " " +
  yStart + " Q " +
  xArc + " " +
  yArc + " " +
  (xMax / 2) + " " +
  (yMax / 2) + "'";

  document.getElementById("star"+starPos).innerHTML = '<div class="sinkingStar" style="offset-path: path(' + path + '); animation: move '+Math.floor(Math.random()*3500 + 1500)+'ms ease-in-out;"></div>';
}
