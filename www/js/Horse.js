var Horse = function() {
  var that = this;
  that.bitmap = that.bitmap.clone();
  that.bitmap.x = Math.random() * window.innerWidth / 2;
  that.bitmap.y = Math.random() * window.innerHeight / 2;
  that.bitmap.addEventListener('click', function() {
    console.log(that);
    console.log(that.bitmap.stage);
    that.bitmap.stage.removeChild(that.bitmap);
  })
  that.move();
}

Horse.prototype.bitmap = new createjs.Bitmap('img/horse_1@3x.png');

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
