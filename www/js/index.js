document.addEventListener('deviceready', function() {
  var stage = new createjs.Stage("mainCanvas");
  var horse = new createjs.Bitmap('img/horse_1@3x.png');
  stage.addChild(horse);
  createjs.Ticker.on('tick', stage);
  console.log('hello');
});