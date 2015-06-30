Meteor.startup(function() {
	Session.set('score', 0);
});

Template.Game.onRendered(function() {
	var canvas = document.getElementById('canvas');
	canvas.height = window.innerHeight;
	canvas.width = window.innerWidth;
	var stage = new createjs.Stage(canvas);
	createjs.Touch.enable(stage);
	stage.on('stagemousedown', function(e) {
		var hitTest = function(x, y, child) {
			if(x < child.x + 50 &&
			   x > child.x - 50 &&
			   y < child.y + 66 &&
			   y > child.y - 66) {
				return true;
			}
			return false;
		}
		_.each(stage.children.reverse(), function(child) {
			var result = hitTest(e.stageX, e.stageY, child);
			if(result) {
				Session.set('score', Session.get('score') + 1);
				stage.removeChild(child);
			}
		});
	});
	createjs.Ticker.addEventListener("tick", handleTick);
	function handleTick(e) {
		stage.update();
	}
	// Add a horse every second
	setInterval(function() {
		stage.addChild(getNewHorse());
	}, 100);
});

var getNewHorse;
(function() {
	var data = {
		images: ["/img/horse.png"],
		frames: {width: 100, height: 133, count: 6, regX: 50, regY: 66},
		animations: {
			flail: {
				frames: [0, 1, 2, 3, 4, 5],
				speed: 0.5
			}
		}
	}
	var spriteSheet = new createjs.SpriteSheet(data);
	var randomCoord = function() {
		return {
			x: Math.random() * window.innerWidth,
			y: Math.random() * window.innerHeight
		}
	}
	var moveHorse = function(horse) {
		var coords = randomCoord();

		var deltax = coords.x - horse.x;
		var deltay = coords.y - horse.y;
		var distance = Math.sqrt((deltax*deltax) + (deltay*deltay));

		createjs.Tween.get(horse).to({x: coords.x, y: coords.y}, distance * 6).call(moveHorse, [horse]);
	}
	getNewHorse = function() {
		var horse = new createjs.Sprite(spriteSheet, 'flail');
		var coords = randomCoord();
		horse.x = coords.x;
		horse.y = coords.y;
		moveHorse(horse);
		return horse;
	}
})();
