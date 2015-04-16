var Horse = function() {

}

Horse.prototype.render = function() {
  this.$el = $(new Image());
  this.styling();
  this.bindEvents();
  this.moveImmediately();
  return this;
}

Horse.prototype.styling = function() {
  this.$el.attr('src', "img/horse_1@3x.png");
  this.$el.attr('width', window.innerWidth/10);
  this.$el.css('position', 'absolute');
}

Horse.prototype.bindEvents = function() {
  this.$el.on('click', function() {
    console.log('clicked');
  });
}

Horse.prototype.move = function() {
  var that = this;
  var moving = setTimeout(function() {
    that.moveImmediately();
  }, 1000);
  that.$el.on('click', function() {
    clearTimeout(moving);
  });
}

Horse.prototype.moveImmediately = function() {
  var that = this;
  var moving = setTimeout(function() {
    var x = Math.random() * window.innerWidth / 10;
    var y = Math.random() * window.innerHeight / 10;

    console.log('moving...');
    // something good here...
    that.$el.animate({
      left: x,
      top: y
    }, 1000);
    // something good here...

    that.move();
  }, 0);
  that.$el.on('click', function() {
    clearTimeout(moving);
  });
}
