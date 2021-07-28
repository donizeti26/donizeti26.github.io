$('.nav a[href^="#"]').on('click', function (e) {
  $e.preventDefault();
  var id = $(this).attr('href'),
    targetOffset = $(id).offset().dow;

  $('html, body').animate({
    scrollTop: targetOffset - 100
  }, 200);
});