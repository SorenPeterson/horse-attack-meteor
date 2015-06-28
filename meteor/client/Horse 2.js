window.Horse = function() {
  var that = this;
  that.bitmap = new createjs.Sprite(that.spritesheet, 'flail')
  that.bitmap.x = Math.random() * window.innerWidth;
  that.bitmap.y = Math.random() * window.innerHeight;
  that.move();
}

Horse.prototype.spritesheet = new createjs.SpriteSheet({
  images: ["img/horse.png"],
  frames: {
    width: 100,
    height: 133,
    regX: 50,
    regY: 66
  },
  animations: {
    flail: [0, 5]
  },
  framerate: 15
});

Horse.prototype.move = function() {
  var that = this;

  previousx = that.bitmap.x;
  previousy = that.bitmap.y;
  nextx = Math.random() * window.innerWidth;
  nexty = Math.random() * window.innerHeight;

  var time = Math.sqrt(
    Math.pow(nextx - previousx, 2) +
    Math.pow(nexty - previousy, 2)
  );

  createjs.Tween.get(that.bitmap).to({
    x: nextx,
    y: nexty
  }, time*10).call(function() {
    that.move()
  });
}
