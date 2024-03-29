if ($('#carousel').is(':visible')) {

  $('#carousel').carousel('pause');

   $('#arrow-down').click(function() {
     $('#carousel').carousel('next');
   });

   setInterval(carouselFunction, 500);

   function carouselFunction() {
     $('#carousel').one('mousewheel', function(event) {

          if (event.deltaY == 1) {
            $(this).carousel('prev');
          } else if (event.deltaY == -1) {
            $(this).carousel('next');
          }

          console.log(event.deltaY);

        $('#carousel').carousel('pause');
      })
   }
 }

$(document).ready(function(){
  /*$(".carousel").swipe({

    swipe: function(event, direction, distance, duration, fingerCount, fingerData) {

      if (direction == 'up') $(this).carousel('next');
      if (direction == 'down') $(this).carousel('prev');
      $(this).css('cursor', 'grabbing');
    },
    allowPageScroll:"vertical"

  });*/

  let windowsize = $(window).width();

  $(window).resize(function() {
    let windowsize = $(window).width();
  });

  $('.cta-button').click(function() {
    $('#carousel').hide();
    $('.sign-up .before').show();
    $('.sign-up .after').hide();
    $('.sign-up').show('fast');
  });

  $('#header-button').click(function() {
    $('.container-other').hide('fast');
    $('header .button').hide();
    $('header #desktop-cross').hide();
    $('.link-about').show();
    $('#carousel').hide();
    $('.container-custom').show();
    $('.sign-up').show('fast');
  });

  $('.link-about').click(function() {
    $('.desktop-nav .link-about').hide('fast');
    $('.container-custom').hide('fast');
    $('header .button').show('fast');
    $('header #desktop-cross').show('fast');
    $('.container-other').show('fast');
    $('.sign-up .before').show();
    $('.sign-up .after').hide();
    $('.subheader span').hide();
    $('.subheader .line').show();
  })

  $('header #desktop-cross').click(function() {
    $(this).hide('fast');
    $('.container-other').hide('fast');
    $('nav .button').hide('fast');
    $('.link-about').show('fast');
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

    if (windowsize < 576) {
      $('.menu-button').hide();
    }

    $('.container-other').hide('fast');
    $('.desktop-nav').hide('fast');
  });

  $('.link-arrow').click(function() {
    $(this).closest('.page').addClass('d-none');
    $('.container-other').show('fast');

    if (windowsize < 576) {
      $('.menu-button').show();
    } else {
      $('.desktop-nav').show('fast');
    }
  });

  $('.sign-up form').submit(function() {
    $(this).closest('.before').hide();
    $('.sign-up .after').show('fast');
    $('.subheader span').show();
    $('.subheader .line').hide();
  });

  $('.subheader #desktop-cross').click(function() {
    $('.sign-up').hide();
    $('.subheader span').hide();
    $('.subheader .line').show();
    $('#carousel').show('fast');
    $('.sign-up .before').show();
    $('.sign-up .after').hide();
  });

  $('.menu-button').click(function() {
    $(this).hide();
    $('#mobile-cross').show();
    $('header').css(
      {
        'min-height': '55.79vh',
        'z-index': '1050',
      }
    );
    $('header .mobile-menu').addClass('show');
    $('body').append('<div class="modal-backdrop show"></div>');
  });

  $('#mobile-cross').click(function() {
    $(this).hide();
    $('.menu-button').show();
    $('header').css(
      {
        'min-height': '11.7vh',
        'z-index': '999',
      }
    );
    $('header .mobile-menu').removeClass('show');
    $('.modal-backdrop').remove();
  });

  $('.mobile-menu a').click(function() {
    $('#mobile-cross').hide();
    $('.menu-button').show();
    $('header').css(
      {
        'min-height': '11.7vh',
        'z-index': '999'
      }
    );
    $('header .mobile-menu').removeClass('show');
    $('.modal-backdrop').remove();
  });

  $('.mobile-menu button').click(function() {
    $('#mobile-cross').hide();
    $('.menu-button').show();
    $('header').css(
      {
        'min-height': '11.7vh',
        'z-index': '999'
      }
    );
    $('header .mobile-menu').removeClass('show');
    $('.modal-backdrop').remove();
  });

  $('.mobile-header a').click(function() {
    $('.container-custom').show('fast');
    $('.container-other').hide();
    $('#carousel').show('fast');
    $('header #desktop-cross').hide();
    $('.sign-up').hide();
    $('nav .button').hide('fast');
    $('.link-about').show('fast');
  });

});
