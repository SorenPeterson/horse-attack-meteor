document.addEventListener('deviceready', function() {
  $("#mainCanvas").attr('width', window.innerWidth / 2);
  $("#mainCanvas").attr('height', window.innerHeight / 2);

  var stage = new createjs.Stage("mainCanvas");
  createjs.Touch.enable(stage);

  setInterval(function() {
    $(".fps").text(createjs.Ticker.getMeasuredFPS());
    horse = new Horse();
    stage.addChild(horse.bitmap);
  }, 1000);

  createjs.Ticker.framerate = 30;
  createjs.Ticker.on('tick', stage);
});