var Game = function() {
  $container.html($('<canvas>').attr('id', 'mainCanvas'));
  $container.css('background-image', 'url(img/game.png)');

  $container.prepend($('<div>').addClass('score'));
  var $score = $('.score');
  var score = 0;
  $score.text(score);

  $score.center();


  $("#mainCanvas").attr('width', window.innerWidth);
  $("#mainCanvas").attr('height', window.innerHeight);

  stage = new createjs.Stage("mainCanvas");
  stage.on('stagemousedown', function(evt) {
    console.log(evt);
    var child;
    for(var i = 0; i < stage.children.length; i++) {
      child = stage.children[i];
      var stageX = evt.stageX + 50;
      var stageY = evt.stageY + 50;
      if(child.x < stageX && stageX < child.x + 100 &&
         child.y < stageY && stageY < child.y + 133) {
        stage.removeChild(child);
        score += 1;
      }
    }
    $score.text(score);
  });
  createjs.Touch.enable(stage);

  setInterval(function() {
    $(".fps").text(createjs.Ticker.getMeasuredFPS());
    horse = new Horse();
    stage.addChild(horse.bitmap);
  }, 1000);

  createjs.Ticker.framerate = 30;
  createjs.Ticker.on('tick', stage);
}