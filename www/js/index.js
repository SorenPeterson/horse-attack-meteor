document.addEventListener('deviceready', function() {
  $("#mainCanvas").attr('width', window.innerWidth);
  $("#mainCanvas").attr('height', window.innerHeight-4);

  var stage = new createjs.Stage("mainCanvas");
  horse = new Horse();
  horse2 = new Horse();
  stage.addChild(horse2.bitmap);
  stage.addChild(horse.bitmap);

  setInterval(function() {
    $(".fps").text(createjs.Ticker.getMeasuredFPS());
  }, 1000);

  createjs.Ticker.framerate = 30;
  createjs.Ticker.on('tick', stage);
  console.log('hello');
});