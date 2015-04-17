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
    that.$el.hide();
    delete that;
  });
}

Horse.prototype.move = function() {
  var that = this;
  that.moving = true;

  var nextx;
  var nexty;
  var previousx = Math.random() * window.innerWidth;
  var previousy = Math.random() * window.innerHeight;

  var startOfPathTimestamp;

  var getNewLocation = function(timestamp) {
    startOfPathTimestamp = timestamp;
    var time = 1000;
    nextx = Math.random() * window.innerWidth;
    nexty = Math.random() * window.innerHeight;

    var display = function(timestamp) {
      that.$el.css('left', nextx);
      that.$el.css('top', nexty);
      if(timestamp < startOfPathTimestamp + time) {
        requestAnimationFrame(display);
      }
    }

    if(that.moving) {
      setTimeout(function() {
        requestAnimationFrame(getNewLocation);
      }, time);
    }
    requestAnimationFrame(display);
  }

  requestAnimationFrame(getNewLocation);
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
