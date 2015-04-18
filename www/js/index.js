document.addEventListener('deviceready', function() {
  setInterval(function() {
    var horse = new Horse();
    $('.container').append(horse.render().$el);
  }, 1000);

  FastClick.attach(document.body);
});