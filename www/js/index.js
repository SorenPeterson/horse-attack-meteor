setTimeout(function() {
    var horse = new Horse();
    $('.container').append(horse.render().$el);
}, 1000);
