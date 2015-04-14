setTimeout(function() {
    var horse = new Horse();
    $('body').append(horse.render().$el);
}, 1000);
