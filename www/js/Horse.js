var Horse = function() {

}

Horse.prototype.render = function() {
  this.$el = $(new Image());
  this.$el.attr('src', "img/horse_1@3x.png");
  this.$el.attr('width', window.innerWidth/10);
  this.$el.css('position', 'absolute');
  this.moveImmediately();
  return this;
}

Horse.prototype.move = function() {
  var that = this;
  setTimeout(function() {
    that.moveImmediately();
  }, 1000);
}

Horse.prototype.moveImmediately = function() {
  var that = this;
  setTimeout(function() {
    var x = Math.random() * window.innerWidth;
    var y = Math.random() * window.innerHeight;

    console.log('moving...');
    // something good here...
    that.$el.animate({
      left: x,
      top: y
    }, 1000);
    // something good here...

    that.move();
  }, 0);
}
