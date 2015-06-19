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

  var horsesOnScreen = 0;
  var difficulty = 1000;
  var rateOfDestruction = 0;

  stage = new createjs.Stage("mainCanvas");
  stage.on('stagemousedown', function(evt) {
    var child;
    var destroyedThisPass = 0;
    for(var i = 0; i < stage.children.length; i++) {
      child = stage.children[i];
      var stageX = evt.stageX + 50;
      var stageY = evt.stageY + 66;
      if(child.x < stageX && stageX < child.x + 100 &&
         child.y < stageY && stageY < child.y + 133) {
        stage.removeChild(child);
        score += 1;
        horsesOnScreen -= 1;
        destroyedThisPass += 1;
      }
    }
    rateOfDestruction += destroyedThisPass;
    setTimeout(function() {
      rateOfDestruction -= destroyedThisPass;
    }, 5000)
    increaseDifficulty();
    $score.text(score);
  });
  createjs.Touch.enable(stage);

  var increaseDifficulty = function() {
    if(horsesOnScreen < 10 && difficulty > 10) {
      difficulty -= 10;
    }
  }

  var looping = setInterval(function() {
    if(difficulty > 10) {
      difficulty -= 1;
    }
    if(difficulty < 500 && rateOfDestruction < (500 / difficulty)) {
      clearInterval(looping);
      GameOver(score);
    }
  }, 1000);

  var looper = function() {
    horse = new Horse();
    stage.addChild(horse.bitmap);
    horsesOnScreen += 1;
    setTimeout(looper, difficulty);
  }
  looper();

  createjs.Ticker.framerate = 30;
  createjs.Ticker.on('tick', stage);
}