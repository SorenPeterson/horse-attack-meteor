var Horse = function() {

}

Horse.prototype.render = function() {
  this.$el = new Image();
  this.$el.src = "img/horse_1@3x.png";
  return this;
}

Horse.prototype.move = function() {

}
