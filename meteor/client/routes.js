Router.route('/', function() {
	this.redirect('/splash');
});

Router.route('/splash', function() {
	this.render('Splash');
});

Router.route('/game', function() {
	this.render('Game');
});

Router.route('/gameover', function() {
	this.render('GameOver');
});
