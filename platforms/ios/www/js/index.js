document.addEventListener('deviceready', function() {
  $("#mainCanvas").attr('width', window.innerWidth);
  $("#mainCanvas").attr('height', window.innerHeight-4);

  var stage = new createjs.Stage("mainCanvas");
  var horse = new createjs.Bitmap('img/horse_1@3x.png');
  stage.addChild(horse);

  var moveHorse = function() {
    previousx = horse.x;
    previousy = horse.y;
    nextx = Math.random() * window.innerWidth;
    nexty = Math.random() * window.innerHeight;
    var time = Math.sqrt(
      Math.pow(nextx - previousx, 2) +
      Math.pow(nexty - previousy, 2)
    );
    createjs.Tween.get(horse).to({
      x: nextx,
      y: nexty
    }, time*2).call(moveHorse);
  }

  moveHorse();

  createjs.Ticker.framerate = 30;
  createjs.Ticker.on('tick', stage);
  console.log('hello');
});