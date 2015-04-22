var Horse = function() {
  this.bitmap = this.bitmap.clone();
  this.bitmap.x = Math.random() * window.innerWidth;
  this.bitmap.y = Math.random() * window.innerHeight;
  this.move();
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
  }, time*2).call(function() {
    that.move()
  });
}
