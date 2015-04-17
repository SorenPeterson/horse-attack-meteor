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
  this.$el.on('click', function() {
  });
}

Horse.prototype.move = function() {
  var that = this;
  that.moving = true;
  // var getLocation = (function() {
  //   var x;
  //   var y;
  //   return function(timestamp) {
  //     return {
  //       x: ,
  //       y:
  //     }
  //   }
  // })();

  var display = function(timestamp) {
    var x = Math.random() * window.innerWidth;
    var y = Math.random() * window.innerHeight;
    that.$el.css('left', x);
    that.$el.css('top', y);
    if(that.moving) {
      requestAnimationFrame(display);
    }
  }

  requestAnimationFrame(display);
}

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
