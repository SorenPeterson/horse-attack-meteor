var $container;

document.addEventListener('deviceready', function() {
  $container = $('.container');

  FastClick.attach(document.body);

  Splash();
});