/* $(function () {
    $(".nav_inner > ul > li").hover(
        function () {
            $(this).find("a").next(".sub").css({
                height: 163
            });
        },
        function () {
            $(this).find("a").next(".sub").css({
                height: 0
            });
        }
    );
}); */
/* $(function () {
    $(".nav_inner > ul > li").hover(
        function () {
            $(this).find(".gnb_sub_container").css({
                "height": "auto",
                "transition": "height 0.5s;",
            });
        },
        function () {
            $(this).find(".gnb_sub_container").css({
                "height": "0",
                "transition": "height 0.5s;",
            });
        }
    );
}); */


/* $(function () {
    $(".nav_inner > ul > li").mouseenter(function () {
        $(this).find(".gnb_sub_container").slideDown();
        }
    );
    $(".nav_inner > ul > li").mouseleave(function () {
        $(this).find(".gnb_sub_container").slideUp();
        }
    );
}); */

/* $(function () {
    $(".nav_inner > ul > li").hover(function () {
        $(this).find(".gnb_sub_container").slideToggle();
        }
    );
}); */

/* $(function () {
    $(".nav_inner > ul > li").mouseover(function () {
        $(this).find(".gnb_sub_container").css({
            "height": "auto",
            "transition": "all 0.5s;",
        });
        }
    );
    $(".nav_inner > ul > li").mouseout(function () {
        $(this).find(".gnb_sub_container").css({
            "height": "0",
            "transition": "all 0.5s;",
        });
        }
    );
});
 */

/* $(function () {
    $(".nav_inner > ul > li").hover(function () {
        $(this).find("a").next(".gnb_sub_container").css({
            height: 400
        });
    }, function () {
        $(this).find("a").next(".gnb_sub_container").css({
            height: 0
        });
    });
}); */


$(window).scroll(function() {
    var scrollTop = $(window).scrollTop();
    //console.log(scrollTop);
    if (scrollTop > 140) {
        $("nav").css({
            "top": "0",
            "position": "fixed",
        });
    } else {
        $("nav").css({
            "top": "0",
            "position": "sticky",
        });
    }
});

$(window).scroll(function() {
    var scrollTop = $(window).scrollTop();
    if (scrollTop > 870) {
        $("nav").css("background-color", "white");
    } else {
        $("nav").css("background-color", "rgba(255, 255, 255, 0.6)");
    }
});
$(window).scroll(function() {
    var scrollTop = $(window).scrollTop();
    if (scrollTop > 550) {
        $(".gnb_sub_container").css("background-color", "rgba(39, 41, 69, 1)");
    } else {
        $(".gnb_sub_container").css("background-color", "rgba(39, 41, 69, 0.7)");
    }
});

$(window).scroll(function() {
    var scrollTop = $(window).scrollTop();
    if (scrollTop > 140) {
        $("#news").css("top", "120px");
    } else {
        $("#news").css("top", "40px");
    }
});

$(function () {
    $(".nav_inner > ul > li").hover(
        function () {
            $(this).find("a").next(".sub").css({
                height: 163
            });
        },
        function () {
            $(this).find("a").next(".sub").css({
                height: 0
            });
        }
    );
});



/* $(document).ready(function () {
    $(".th_general").hover(function(){
        $(".th_general").css({
            "background-color": "#5a6480",
        });     
    },
    function() {
        $(".th_general").css({
            "background-color": "#454e6a",
        });
    });

    $(".th_academic").hover(function(){
        $(".th_academic").css({
            "background-color": "#5a6480",
        });     
    },
    function() {
        $(".th_academic").css({
            "background-color": "#454e6a",
        });
    });

    $(".th_employ").hover(function(){
        $(".th_employ").css({
            "background-color": "#5a6480",
        });     
    },
    function() {
        $(".th_employ").css({
            "background-color": "#454e6a",
        });
    });
}); */

/* $(document).ready(function () {
    $(".th_general").click(function(){
        $(".th_general:hover").css({
            "background-color": "white",
        });     
    });
    $(".th_academic").click(function(){
        $(".th_academic:hover").css({
            "background-color": "white",
        });     
    });
    $(".th_employ").click(function(){
        $(".th_employ:hover").css({
            "background-color": "white",
        });     
    });
});
 */

/* $(document).ready(function () {
    $("#notice table th").click(function(){
        if($("#notice table th").hover(function(){
            $("#notice table th").css({
                "background-color": "white",
            });
        }, function () {
            $("#notice table th").css({
                "background-color": "#454e6a",
            });
        }
        ));     
    });
}); */


$(document).ready(function () {
    $(".th_general").click(function(){
        $(".notice_academic").hide();
        $(".notice_general").show();
        $(".notice_employ").hide();
        $(".th_general").css({
            "background-color": "white",
            "color": "#333",
            "font-weight": "bolder",
        });
        $(".th_academic").css({
            "background-color": "#454e6a",
            "color": "white",
            "font-weight": "lighter",
        });
        $(".th_employ").css({
            "background-color": "#454e6a",
            "color": "white",
            "font-weight": "lighter",
        });
    });
    $(".th_employ").click(function(){
        $(".notice_academic").hide();
        $(".notice_general").hide();
        $(".notice_employ").show();
        $(".th_employ").css({
            "background-color": "white",
            "color": "#333",
            "font-weight": "bolder",
        });
        $(".th_general").css({
            "background-color": "#454e6a",
            "color": "white",
            "font-weight": "lighter",
        });
        $(".th_academic").css({
            "background-color": "#454e6a",
            "color": "white",
            "font-weight": "lighter",
        });
    });
    $(".th_academic").click(function(){
        $(".notice_academic").show();
        $(".notice_general").hide();
        $(".notice_employ").hide();
        $(".th_academic").css({
            "background-color": "white",
            "color": "#333",
            "font-weight": "bolder",
        });
        $(".th_general").css({
            "background-color": "#454e6a",
            "color": "white",
            "font-weight": "lighter",
        });
        $(".th_employ").css({
            "background-color": "#454e6a",
            "color": "white",
            "font-weight": "lighter",
        });
    });
});


$(document).ready(function () {
    $('.event_slider').bxSlider({
        auto: true,
        pause: 2000,
        autoControls: true,
        stopAutoOnClick: true,
    });
});

$(document).ready(function () {
    $("#events .bx-stop").click(function(){
        $("#events .bx-stop").hide();
        $("#events .bx-start").show();
    });
    $("#events .bx-start").click(function(){
        $("#events .bx-stop").show();
        $("#events .bx-start").hide();
    });
});



/* $(document).ready(function () {
    $('.research_slider').bxSlider({
        auto: true,
        pager: false,
        pause: 3000,
        minSlides: 3,
        maxSlides: 3,
        moveSlides: 1,
        slideWidth: 500,
        slideMargin: 173,
    });
});
 */
$(document).ready(function () {
    $('.sns_slider').bxSlider({
        auto: true,
        pager: false,
        pause: 3000,
        minSlides: 3,
        maxSlides: 3,
        moveSlides: 1,
        slideWidth: 353,
        slideMargin: 83,
    });
});

$('.research_slider').slick({
    centerMode: true,
    centerPadding: '60px',
    slidesToShow: 3,
    rtl: false,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          arrows: false,
          centerMode: true,
          centerPadding: '40px',
          slidesToShow: 3
        }
      },
      {
        breakpoint: 480,
        settings: {
          arrows: false,
          centerMode: true,
          centerPadding: '40px',
          slidesToShow: 1
        }
      }
    ]
  });

$(document).ready(function () {
    $('.moving_txt01').slick({
        arrows: false,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 0,
        speed: 35000,
        infinite: true,
        pauseOnFocus: false,
        pauseOnHover: false,
        //variableWidth: true,
        touchMove: false,
        draggable: false,
        cssEase: 'linear',
    });
});
$(document).ready(function () {
    $('.moving_txt02').slick({
        arrows: false,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 0,
        speed: 40000,
        infinite: true,
        pauseOnFocus: false,
        pauseOnHover: false,
        //variableWidth: true,
        touchMove: false,
        draggable: false,
        cssEase: 'linear',
    });
});
$(document).ready(function(){
    AOS.init();
});




/* sub */



$(function() {
    $(".sub_depth01").click(function () {
        if($('.sub_depth01 + .select_menu').css('display')=='none') {
            $('.sub_depth01 + .select_menu').slideDown('swing');
            $('.sub_depth01 .sub_select_arrow_img').css({
                "transform": "rotate(180deg)",
                "transition": "all 0.5s",
            })
        } else {
            $('.sub_depth01 + .select_menu').slideUp('swing');
            $('.sub_depth01 .sub_select_arrow_img').css({
                "transform": "rotate(0)",
                "transition": "all 0.5s",
            })
        }
    });
});
$(function() {
    $(".sub_depth02").click(function () {
        if($('.sub_depth02 + .select_menu').css('display')=='none') {
            $('.sub_depth02 + .select_menu').slideDown('swing');
            $('.sub_depth02 .sub_select_arrow_img').css({
                "transform": "rotate(180deg)",
                "transition": "all 0.5s",
            })
        } else {
            $('.sub_depth02 + .select_menu').slideUp('swing');
            $('.sub_depth02 .sub_select_arrow_img').css({
                "transform": "rotate(0)",
                "transition": "all 0.5s",
            })
        }
    });
});



/* 캘린더 */

document.querySelector("#date1").value = new Date()
  .toISOString()
  .substring(0, 10);
document.querySelector("#date2").value = new Date()
  .toISOString()
  .substring(0, 10);
