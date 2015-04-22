document.addEventListener('deviceready', function() {
  $("#mainCanvas").attr('width', window.innerWidth);
  $("#mainCanvas").attr('height', window.innerHeight-4);

  var stage = new createjs.Stage("mainCanvas");

  setInterval(function() {
    $(".fps").text(createjs.Ticker.getMeasuredFPS());
    horse = new Horse();
    stage.addChild(horse.bitmap);
  }, 1000);

  createjs.Ticker.framerate = 30;
  createjs.Ticker.on('tick', stage);
});