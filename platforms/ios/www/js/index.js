document.addEventListener('deviceready', function() {
  var horse = new Horse();
  $('.container').append(horse.render().$el);

  FastClick.attach(document.body);
});