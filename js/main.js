$(function() {
  var h1Height = $('h1').height(); // get height of h1 tag
  $('li a').click(function (e) {
      e.preventDefault();
      var target = $(this.hash);
      $('html, body').animate({
          scrollTop: target.offset().top - (h1Height + 10)// scroll to h3 minus height of h1
      }, 1000);
      return false;
  });
});

$(function(){
        $('a').each(function(){
            if ($(this).prop('href') == window.location.href) {
                $(this).addClass('active'); $(this).parents('li').addClass('active');
            }
        });
    });

    var coll = document.getElementsByClassName("hamburger");
var i;

