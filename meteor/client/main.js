Template.Game.helpers({
	getScore: function() {
		return Session.get('score');
	}
});

Template.Game.onRendered(function() {
	var horsesOnScreen = 0;
	var difficulty = 1000;
	var rateOfDestruction = 0;

	var stage = new createjs.Stage('game');
	stage.on('stagemousedown', function(e) {
		var child;
		var destroyedThisPass = 0;
		for(var i = 0; i < stage.children.length; i++) {
		  child = stage.children[i];
		  var stageX = e.stageX + 50;
		  var stageY = e.stageY + 66;
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
		Session.set('score', score);
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
		  gameOver(score);
		}
	}, 1000);

	var looper = function() {
		var horse = new Horse();
		stage.addChild(horse.bitmap);
		horsesOnScreen += 1;
		setTimeout(looper, difficulty);
	}
	looper();

	createjs.Ticker.framerate = 30;
	createjs.Ticker.on('tick', stage);
});

