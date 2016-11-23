 $(function () {
     $('.script-only').removeClass('hidden');
 });
  $('.js-menu-trigger').on('click touchstart', function(e){
    $('.js-menu').toggleClass('is-visible');
    $('.js-menu-screen').toggleClass('is-visible');
    e.preventDefault();
  });

  $('.js-menu-screen').on('click touchstart', function(e){
    $('.js-menu').toggleClass('is-visible');
    $('.js-menu-screen').toggleClass('is-visible');
    e.preventDefault();
  });

  $("#show-arguendo-extended").click(function(){
  $("#content_arguendo").slideToggle('slow');

});

$("a#show-tumblr-extended").click(function(){
  $("#content_tumblr-long").slideToggle('slow');
  $("a#show-tumblr-extended").addClass('space-below-big');
});
