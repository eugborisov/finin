/*$(".carousel").swipe({

  swipe: function(event, direction, distance, duration, fingerCount, fingerData) {

    if (direction == 'up') $(this).carousel('next');
    if (direction == 'down') $(this).carousel('prev');
    $(this).css('cursor', 'grabbing');
  },
  allowPageScroll:"vertical"

});*/

if ($('#carousel').is(':visible')) {

  $('#carousel').carousel('pause');

   $('#carousel').mousewheel(function(event) {
     if(event.deltaY > 0) {
         $(this).carousel('next');
     } else {
         $(this).carousel('prev');
     }
   });

   $('#arrow-down').click(function() {
     $('#carousel').carousel('next');
   });
 }

$('.cta-button').click(function() {
  $('#carousel').hide();
  $('.sign-up .before').show();
  $('.sign-up .after').hide();
  $('.sign-up').show('fast');
});

$('#header-button').click(function() {
  $('.container-other').hide('fast');
  $('header .button').hide();
  $('header .cross').hide();
  $('#link-about').show();
  $('#carousel').hide();
  $('.container-custom').show();
  $('.sign-up').show('fast');
});

$('#link-about').click(function() {
  $(this).hide('fast');
  $('.container-custom').hide('fast');
  $('header .button').show('fast');
  $('header .cross').show('fast');
  $('.container-other').show('fast');
  $('.sign-up .before').show();
  $('.sign-up .after').hide();
  $('.subheader span').hide();
  $('.subheader .line').show();
})

$('header .cross').click(function() {
  $(this).hide('fast');
  $('.container-other').hide('fast');
  $('header .button').hide('fast');
  $('#link-about').show('fast');
  $('#carousel').show();
  $('.sign-up').hide();
  $('.container-custom').show('fast');
});

$('.grid a').click(function() {
  let page = $(this).attr('href');

  $('.page').each(function() {
    if ($(this).attr('id') == page) {
      $(this).removeClass('d-none');
    }
  });

  $('.container-other').hide('fast');
  $('nav').hide('fast');
});

$('.link-arrow').click(function() {
  $(this).closest('.page').addClass('d-none');
  $('.container-other').show('fast');
  $('nav').show('fast');
});

$('.sign-up form').submit(function() {
  $(this).closest('.before').hide();
  $('.sign-up .after').show('fast');
  $('.subheader span').show();
  $('.subheader .line').hide();
});

$('.subheader .cross').click(function() {
  $('.sign-up').hide();
  $('.subheader span').hide();
  $('.subheader .line').show();
  $('#carousel').show('fast');
  $('.sign-up .before').show();
  $('.sign-up .after').hide();
})