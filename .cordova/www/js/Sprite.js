var Sprite = function() {}

Sprite.prototype.initialize = function() {
  this.anchorx = 0;
  this.anchory = 0;
  this.positionx = 0;
  this.poritiony = 0;
}

Sprite.prototype.context = function(context) {
  that.context = context;
  return this;
}

Sprite.prototype.draw = function(successCallback, failureCallback) {

}
