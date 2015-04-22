var Splash = function() {
  $container.html($('<div>').addClass('splashPage'));
  $container.css('background-image', 'url(img/splash.png)');
  $('.splashPage').on('click', function() {
    Game();
  })
}