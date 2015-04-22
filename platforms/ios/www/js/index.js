document.addEventListener('deviceready', function() {
  $("#mainCanvas").attr('width', window.innerWidth);
  $("#mainCanvas").attr('height', window.innerHeight);

  var stage = new createjs.Stage("mainCanvas");
  var horse = new createjs.Bitmap('img/horse_1@3x.png');
  stage.addChild(horse);
  createjs.Ticker.on('tick', stage);
  console.log('hello');
});