document.addEventListener('deviceready', function() {
  var stage = new createjs.Stage("mainCanvas");
  var horseSprite = new createjs.SpriteSheet({
    images: ["./img/horse_1@3x.png"]
  });
  var sprite = new createjs.Sprite(horseSprite);
  stage.addChild(sprite);
  createjs.Ticker.on('tick', stage);
  console.log('hello');
});