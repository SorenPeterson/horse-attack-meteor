Template.Splash.events({
	'click #splash': function() {
		window.location.replace('/game');
	}
});

Template.GameOver.events({
	'click #gameover': function() {
		window.location.replace('/');
	}
});

