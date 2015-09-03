Router.route('/', function() {
	this.render('Splash');
});

Router.route('/game', function() {
	this.render('Game');
});

Router.route('/gameover', function () {
	this.render('GameOver');
});

