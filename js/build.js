$(document).ready(function () {
    $('a[href^="#"]').click(function () {
        var elem = $(this).attr('href');
        $('body,html').animate({scrollTop: $(elem).offset().top}, 1000);
        return false;
    });
});

$(document).ready(function () {
    
    //step number
    
    var slide_num = 1;

    function toggle_class(){
        $(".user-block-" + slide_num).toggleClass("hidden-block");
        $(".circle-" + slide_num).toggleClass("small-circle-active");
    };
    
    //default view
    toggle_class();

    //click right
    
    $(".slider-section-right").click(function () {
        toggle_class();
        slide_num = slide_num + 1;
        if (slide_num >= 4) {
            slide_num = 1;
        };
        toggle_class();
    });

    //click left
    
    $(".slider-section-left").click(function () {
        toggle_class();
        slide_num = slide_num - 1;
        if (slide_num <= 0) {
            slide_num = 3;
        };
        toggle_class();
    });

    //auto sliding

    setInterval(function () {
        toggle_class();
        slide_num = slide_num + 1;
        if (slide_num >= 4) {
            slide_num = 1;
        };
        toggle_class();
    }, 4000);
    
    //circles
    
    $(".circle-1").click(function(){
        toggle_class();
        slide_num = 1;
        toggle_class();
    });
    $(".circle-2").click(function(){
        toggle_class();
        slide_num = 2;
        toggle_class();
    });
    $(".circle-3").click(function(){
        toggle_class();
        slide_num = 3;
        toggle_class();
    });
    
    
    
});

$(document).ready(function () {
    $("._hamburger").click(function () {
        $("._nav").slideToggle();
    });
    setInterval(function () {
        if (window.matchMedia('(min-width: 825px)').matches) {
            if ($('._nav:hidden')) {
                $('._nav').slideDown();
            };
        };
    }, 3000);
});

  var top_show = 150;
  var delay_ms = 1000;
  $(document).ready(function () {
      $('#top-button').fadeOut();
      $(window).scroll(function () {
          if ($(this).scrollTop() > top_show) {
              $('#top-button').fadeIn();
          } else {
              $('#top-button').fadeOut();
          }
      });
      $('#top-button').click(function () {
          $('body, html').animate({scrollTop: 0}, delay_ms);
      });
  });

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFuY2hvcnMuanMiLCJkaXZfc2xpZGVyLmpzIiwiaGFtYnVyZ2VyLmpzIiwidG9wX2J1dHRvbi5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FDUEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FDcEVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FDWkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJmaWxlIjoiYnVpbGQuanMiLCJzb3VyY2VzQ29udGVudCI6WyIkKGRvY3VtZW50KS5yZWFkeShmdW5jdGlvbiAoKSB7XHJcbiAgICAkKCdhW2hyZWZePVwiI1wiXScpLmNsaWNrKGZ1bmN0aW9uICgpIHtcclxuICAgICAgICB2YXIgZWxlbSA9ICQodGhpcykuYXR0cignaHJlZicpO1xyXG4gICAgICAgICQoJ2JvZHksaHRtbCcpLmFuaW1hdGUoe3Njcm9sbFRvcDogJChlbGVtKS5vZmZzZXQoKS50b3B9LCAxMDAwKTtcclxuICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICB9KTtcclxufSk7XHJcbiIsIiQoZG9jdW1lbnQpLnJlYWR5KGZ1bmN0aW9uICgpIHtcclxuICAgIFxyXG4gICAgLy9zdGVwIG51bWJlclxyXG4gICAgXHJcbiAgICB2YXIgc2xpZGVfbnVtID0gMTtcclxuXHJcbiAgICBmdW5jdGlvbiB0b2dnbGVfY2xhc3MoKXtcclxuICAgICAgICAkKFwiLnVzZXItYmxvY2stXCIgKyBzbGlkZV9udW0pLnRvZ2dsZUNsYXNzKFwiaGlkZGVuLWJsb2NrXCIpO1xyXG4gICAgICAgICQoXCIuY2lyY2xlLVwiICsgc2xpZGVfbnVtKS50b2dnbGVDbGFzcyhcInNtYWxsLWNpcmNsZS1hY3RpdmVcIik7XHJcbiAgICB9O1xyXG4gICAgXHJcbiAgICAvL2RlZmF1bHQgdmlld1xyXG4gICAgdG9nZ2xlX2NsYXNzKCk7XHJcblxyXG4gICAgLy9jbGljayByaWdodFxyXG4gICAgXHJcbiAgICAkKFwiLnNsaWRlci1zZWN0aW9uLXJpZ2h0XCIpLmNsaWNrKGZ1bmN0aW9uICgpIHtcclxuICAgICAgICB0b2dnbGVfY2xhc3MoKTtcclxuICAgICAgICBzbGlkZV9udW0gPSBzbGlkZV9udW0gKyAxO1xyXG4gICAgICAgIGlmIChzbGlkZV9udW0gPj0gNCkge1xyXG4gICAgICAgICAgICBzbGlkZV9udW0gPSAxO1xyXG4gICAgICAgIH07XHJcbiAgICAgICAgdG9nZ2xlX2NsYXNzKCk7XHJcbiAgICB9KTtcclxuXHJcbiAgICAvL2NsaWNrIGxlZnRcclxuICAgIFxyXG4gICAgJChcIi5zbGlkZXItc2VjdGlvbi1sZWZ0XCIpLmNsaWNrKGZ1bmN0aW9uICgpIHtcclxuICAgICAgICB0b2dnbGVfY2xhc3MoKTtcclxuICAgICAgICBzbGlkZV9udW0gPSBzbGlkZV9udW0gLSAxO1xyXG4gICAgICAgIGlmIChzbGlkZV9udW0gPD0gMCkge1xyXG4gICAgICAgICAgICBzbGlkZV9udW0gPSAzO1xyXG4gICAgICAgIH07XHJcbiAgICAgICAgdG9nZ2xlX2NsYXNzKCk7XHJcbiAgICB9KTtcclxuXHJcbiAgICAvL2F1dG8gc2xpZGluZ1xyXG5cclxuICAgIHNldEludGVydmFsKGZ1bmN0aW9uICgpIHtcclxuICAgICAgICB0b2dnbGVfY2xhc3MoKTtcclxuICAgICAgICBzbGlkZV9udW0gPSBzbGlkZV9udW0gKyAxO1xyXG4gICAgICAgIGlmIChzbGlkZV9udW0gPj0gNCkge1xyXG4gICAgICAgICAgICBzbGlkZV9udW0gPSAxO1xyXG4gICAgICAgIH07XHJcbiAgICAgICAgdG9nZ2xlX2NsYXNzKCk7XHJcbiAgICB9LCA0MDAwKTtcclxuICAgIFxyXG4gICAgLy9jaXJjbGVzXHJcbiAgICBcclxuICAgICQoXCIuY2lyY2xlLTFcIikuY2xpY2soZnVuY3Rpb24oKXtcclxuICAgICAgICB0b2dnbGVfY2xhc3MoKTtcclxuICAgICAgICBzbGlkZV9udW0gPSAxO1xyXG4gICAgICAgIHRvZ2dsZV9jbGFzcygpO1xyXG4gICAgfSk7XHJcbiAgICAkKFwiLmNpcmNsZS0yXCIpLmNsaWNrKGZ1bmN0aW9uKCl7XHJcbiAgICAgICAgdG9nZ2xlX2NsYXNzKCk7XHJcbiAgICAgICAgc2xpZGVfbnVtID0gMjtcclxuICAgICAgICB0b2dnbGVfY2xhc3MoKTtcclxuICAgIH0pO1xyXG4gICAgJChcIi5jaXJjbGUtM1wiKS5jbGljayhmdW5jdGlvbigpe1xyXG4gICAgICAgIHRvZ2dsZV9jbGFzcygpO1xyXG4gICAgICAgIHNsaWRlX251bSA9IDM7XHJcbiAgICAgICAgdG9nZ2xlX2NsYXNzKCk7XHJcbiAgICB9KTtcclxuICAgIFxyXG4gICAgXHJcbiAgICBcclxufSk7XHJcbiIsIiQoZG9jdW1lbnQpLnJlYWR5KGZ1bmN0aW9uICgpIHtcclxuICAgICQoXCIuX2hhbWJ1cmdlclwiKS5jbGljayhmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgJChcIi5fbmF2XCIpLnNsaWRlVG9nZ2xlKCk7XHJcbiAgICB9KTtcclxuICAgIHNldEludGVydmFsKGZ1bmN0aW9uICgpIHtcclxuICAgICAgICBpZiAod2luZG93Lm1hdGNoTWVkaWEoJyhtaW4td2lkdGg6IDgyNXB4KScpLm1hdGNoZXMpIHtcclxuICAgICAgICAgICAgaWYgKCQoJy5fbmF2OmhpZGRlbicpKSB7XHJcbiAgICAgICAgICAgICAgICAkKCcuX25hdicpLnNsaWRlRG93bigpO1xyXG4gICAgICAgICAgICB9O1xyXG4gICAgICAgIH07XHJcbiAgICB9LCAzMDAwKTtcclxufSk7XHJcbiIsIiAgdmFyIHRvcF9zaG93ID0gMTUwO1xyXG4gIHZhciBkZWxheV9tcyA9IDEwMDA7XHJcbiAgJChkb2N1bWVudCkucmVhZHkoZnVuY3Rpb24gKCkge1xyXG4gICAgICAkKCcjdG9wLWJ1dHRvbicpLmZhZGVPdXQoKTtcclxuICAgICAgJCh3aW5kb3cpLnNjcm9sbChmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICBpZiAoJCh0aGlzKS5zY3JvbGxUb3AoKSA+IHRvcF9zaG93KSB7XHJcbiAgICAgICAgICAgICAgJCgnI3RvcC1idXR0b24nKS5mYWRlSW4oKTtcclxuICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgJCgnI3RvcC1idXR0b24nKS5mYWRlT3V0KCk7XHJcbiAgICAgICAgICB9XHJcbiAgICAgIH0pO1xyXG4gICAgICAkKCcjdG9wLWJ1dHRvbicpLmNsaWNrKGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICQoJ2JvZHksIGh0bWwnKS5hbmltYXRlKHtzY3JvbGxUb3A6IDB9LCBkZWxheV9tcyk7XHJcbiAgICAgIH0pO1xyXG4gIH0pO1xyXG4iXX0=
