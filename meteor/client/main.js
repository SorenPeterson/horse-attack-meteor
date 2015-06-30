Template.Game.onRendered(function() {
	var canvas = document.getElementById('canvas');
	canvas.height = window.innerHeight;
	canvas.width = window.innerWidth;
	var stage = new createjs.Stage(canvas);
	createjs.Ticker.addEventListener("tick", handleTick);
	function handleTick(e) {
		console.log('hi');
		stage.update();
	}
	setTimeout(function() {
		stage.addChild(getNewHorse());
	}, 1000);
});

var getNewHorse;
(function() {
	var data = {
		images: ["/img/horse.png"],
		frames: {width: 100, height: 133, count: 6},
		animations: {
			flail: {
				frames: [0, 1, 2, 3, 4, 5]
			}
		}
	}
	var spriteSheet = new createjs.SpriteSheet(data);
	getNewHorse = function() {
		var horse = new createjs.Sprite(spriteSheet, 'flail');
		return horse;
	}
})();
