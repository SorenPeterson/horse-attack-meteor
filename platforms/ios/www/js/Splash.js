var Splash = function() {
  $('.container').html('');
  $('.container').css('background-image', 'url(img/splash.png)');
  $('.container').on('click', function() {
    Game();
  })
}