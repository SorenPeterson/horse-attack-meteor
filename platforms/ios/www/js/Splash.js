var Splash = function() {
  $('.container').html('');
  $('.container').css('background-image', 'img/splash.png');
  $('.container').on('click', function() {
    Game();
  })
}