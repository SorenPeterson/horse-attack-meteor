var Horse = function() {

}

Horse.prototype.render = function() {
  this.$el = $(new Image());
  this.styling();
  this.bindEvents();
  this.move();
  return this;
}

Horse.prototype.styling = function() {
  this.$el.attr('width', window.innerWidth/10);
  this.$el.attr('src', "img/horse_1@3x.png");
  this.$el.addClass('horse-sprite');
}

Horse.prototype.bindEvents = function() {
  var that = this;
  this.$el.on('click', function() {
    that.moving = false;
  });
}

Horse.prototype.move = function() {
  var that = this;
  that.moving = true;

  var nextx;
  var nexty;
  var previousx = Math.random() * window.innerWidth;
  var previousy = Math.random() * window.innerHeight;

  var getNewLocation = function() {
    nextx = Math.random() * window.innerWidth;
    nexty = Math.random() * window.innerHeight;
    if(that.moving) {
      setTimeout(getNewLocation, 1000);
    }
  }

  getNewLocation();

  var display = function(timestamp) {
    that.$el.css('left', nextx);
    that.$el.css('top', nexty);
    if(that.moving) {
      requestAnimationFrame(display);
    }
  }

  requestAnimationFrame(display);
}

Horse.prototype.getLocation = function() {
};

// Horse.prototype.move = function() {
//   var that = this;
//   var moving = setTimeout(function() {
//     that.moveImmediately();
//   }, 1000);
//   that.$el.on('click', function() {
//     clearTimeout(moving);
//   });
// }

// Horse.prototype.moveImmediately = function() {
//   var that = this;
//   var moving = setTimeout(function() {

//     console.log('moving...');
//     // something good here...
//     that.$el.animate({
//       left: x,
//       top: y
//     }, 2000);
//     // something good here...

//     that.move();
//   }, 0);
//   that.$el.on('click', function() {
//     clearTimeout(moving);
//   });
// }
