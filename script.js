$(function(){
  $('nav a').on('click', function(){
    $('nav li.current').removeClass('current');
    $(this).parent().addClass('current');

    //set heading to current link
    $('#heading').text($(this).text());

    //categorize
    const category = $(this).text().toLowerCase().replace(' ','-');

    //remove hidden class if All projects is selected
    if(category === 'all-projects'){
      $('ul#gallery li:hidden').fadeIn('slow').removeClass('hidden');
    } else{
      $('ul#gallery li').each(function(){
        if(!$(this).hasClass(category)){
          $(this).hide().addClass('hidden')
        } else{
          $(this).fadeIn('slow').removeClass('hidden');
        }
      });
    }
    return false;
  });

  $('ul#gallery li').on('mouseenter', function(){
    //create overlay
    $(this).append(`<div class="overlay"></div>`);
    let title = $(this).children().data('title');
    let desc = $(this).children().data('desc');

    //validation
    if(desc == null){
      desc = 'Click to enlarge';
    }

    if(title == null){
      title = '';
    }

    $(this).children('.overlay').hide().fadeIn(500).html(`<h3>${title}</h3><p>${desc}</p>`);
  });

  $('ul#gallery li').on('mouseleave', function(){
    $(this).children('.overlay').fadeOut(500, function(){
      $(this).remove();
    });
  });
})