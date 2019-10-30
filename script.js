/*$(".carousel").swipe({

  swipe: function(event, direction, distance, duration, fingerCount, fingerData) {

    if (direction == 'up') $(this).carousel('next');
    if (direction == 'down') $(this).carousel('prev');
    $(this).css('cursor', 'grabbing');
  },
  allowPageScroll:"vertical"

});*/

 if ($('#carousel').is(':visible')) {

    $('#carousel').bind('wheel', function(e) {
      if(e.originalEvent.wheelDelta /120 > 0) {
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
  $('.sign-up').show('slow');
});

$('#header-button').click(function() {
  $('.container-other').hide('fast');
  $('header .button').hide();
  $('header .cross').hide();
  $('#link-about').show();
  $('#carousel').hide();
  $('.container-custom').show();
  $('.sign-up').show('slow');
});

$('#link-about').click(function() {
  $(this).hide('slow');
  $('.container-custom').hide('fast');
  $('header .button').show('fast');
  $('header .cross').show('fast');
  $('.container-other').show('fast');
  $('.sign-up .before').show();
  $('.sign-up .after').hide();
})

$('header .cross').click(function() {
  $(this).hide('fast');
  $('.container-other').hide('fast');
  $('header .button').hide('fast');
  $('#link-about').show('fast');
  $('#carousel').show();
  $('.sign-up').hide();
  $('.container-custom').show('slow');
});

$('.grid a').click(function() {
  let page = $(this).attr('href');

  $('.page').each(function() {
    if ($(this).attr('id') == page) {
      $(this).removeClass('d-none');
    }
  });

  $('.container-other').hide('fast');
  $('nav').hide('slow');
});

$('.link-arrow').click(function() {
  $(this).closest('.page').addClass('d-none');
  $('.container-other').show('fast');
  $('nav').show('slow');
});

$('.sign-up form').submit(function() {
  $(this).closest('.before').hide();
  $('.sign-up .after').show('slow');
  $('.subheader span').show();
  $('.subheader .line').hide();
});

$('.subheader .cross').click(function() {
  $('.sign-up').hide();
  $('.subheader span').hide();
  $('.subheader .line').show();
  $('#carousel').show('slow');
  $('.sign-up .before').show();
  $('.sign-up .after').hide();
})
