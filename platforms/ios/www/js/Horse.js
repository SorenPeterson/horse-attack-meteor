var Horse = function() {

}

Horse.prototype.render = function() {
  this.$el = $(new Image());
  this.$el.attr('src', "img/horse_1@3x.png");
  this.$el.css('width', window.innerWidth);
  return this;
}

Horse.prototype.move = function() {

}
