$(document).ready(function() {
    $('.main-nav-button-bar').click(
        function() {
            $('.mobile-nav').slideToggle(200);

            if ($('.main-nav-button-bar').hasClass('fa-bars')) {
                $('.main-nav-button-bar').addClass('fa-times');
                $('.main-nav-button-bar').removeClass('fa-bars')
            } else {
                $('.main-nav-button-bar').addClass('fa-bars');
                $('.main-nav-button-bar').removeClass('fa-times')
            }
        }
    )

    $('.mobile-nav ul li i').click(function(event) {
        var sub_sau = $('.active-sub').prev();
        if (sub_sau.length != 1) {
            $('.mobile-nav ul.submenu-cam-nang').addClass('active-sub').addClass('zoom-down').one('webkitAnimationEnd', function(event) {
                $('.zoom-down').removeClass('zoom-down');
            });
        } else {
            $('.mobile-nav ul.submenu-cam-nang').removeClass('active-sub').addClass('zoom-up').one('webkitAnimationEnd', function(event) {
                $('.zoom-up').removeClass('zoom-up');
            });
        }

    });


    //$('a').click(function(event){
    //  $('html, body').animate({
    //      scrollTop: $( $.attr(this, 'href') ).offset().top
    //  }, 700);
    //  event.preventDefault();
    //});

    $('#videolink').magnificPopup({
        type: 'inline',
        midClick: true
    })

    var swiper = new Swiper('.swiper-container', {
        spaceBetween: 30,
        centeredSlides: true,
        autoplay: {
            delay: 2800,
            disableOnInteraction: false,
        },
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
            type: 'progressbar',
        },
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
    });

    $('.thuvien-slider').flipster({
        autoplay: 2000,
        loop: true,
        style: 'carousel',
        start: 'center',
        spacing: -0.38,
        scrollwheel: false,
        pauseOnHover: true
    });

    $('.sticky-arrow-off').click(function(event) {
        var sticky_sau = $('.active-sticky-nav').next();
        console.log(sticky_sau);
        if (sticky_sau.length != 1) {
            $('.right-nav').css("z-index", "1000");
            $('.sticky-arrow-off').addClass('sticky-arrow-on');
            $('.sticky-nav').addClass('active-sticky-nav').addClass('zoom-out').one('webkitAnimationEnd', function(event) {
                $('.zoom-out').removeClass('zoom-out');
            });
        } else {
            $('.right-nav').css("z-index", "899");
            $('.sticky-arrow-on').removeClass('sticky-arrow-on');
            $('.sticky-nav').removeClass('active-sticky-nav').addClass('zoom-in').one('webkitAnimationEnd', function(event) {
                $('.zoom-in').removeClass('zoom-in');
            });
        }

    });

    $('.tintuc-header li').click(function(event) {
        var vi_tri_hien_tai_2 = $('.active-tintuc-header').index() + 1;
        var vi_tri_click_2 = $(this).index() + 1;
        $('.tintuc-header li').removeClass('active-tintuc-header');
        $(this).addClass('active-tintuc-header');
        if (vi_tri_click_2 > vi_tri_hien_tai_2) {
            $('.active-list-post').removeClass('active-list-post');
            $('.load-post ul:nth-child(' + vi_tri_click_2 + ')').addClass('active-list-post');
        }
        if (vi_tri_click_2 < vi_tri_hien_tai_2) {
            $('.active-list-post').removeClass('active-list-post');
            $('.load-post ul:nth-child(' + vi_tri_click_2 + ')').addClass('active-list-post');
        }
    });

    $('.tintuc-bar li').click(function(event) {
        var vi_tri_hien_tai_2 = $('.active-tintuc-bar').index() + 1;
        var vi_tri_click_2 = $(this).index() + 1;
        $('.tintuc-bar li').removeClass('active-tintuc-bar');
        $(this).addClass('active-tintuc-bar');
        if (vi_tri_click_2 > vi_tri_hien_tai_2) {
            $('.active-list-post').removeClass('active-list-post');
            $('.tintuc-load-post ul:nth-child(' + vi_tri_click_2 + ')').addClass('active-list-post');
        }
        if (vi_tri_click_2 < vi_tri_hien_tai_2) {
            $('.active-list-post').removeClass('active-list-post');
            $('.tintuc-load-post ul:nth-child(' + vi_tri_click_2 + ')').addClass('active-list-post');
        }
    });

    $(".handbook-menu ul li.hb-menu-list a").on("click", function() {
        var d = $(this).parent("li");
        if (d.hasClass("open")) {
            d.removeClass("open");
            d.find("li").removeClass("open");
            d.find("ul").slideUp(500);
        } else {
            d.children("ul").slideDown(500, function() {
                d.addClass("open")
            });
            d.siblings("li").children("ul").slideUp(500);
            d.siblings("li").removeClass("open");
            d.siblings("li").find("li").removeClass("open");
            d.siblings("li").find("ul").slideUp(500);
        }
    });

    $('.tab-header li').click(function(event) {
        var vi_tri_hien_tai = $('.active-tab-header').index() + 1;
        var vi_tri_click = $(this).index() + 1;
        $('.tab-header li').removeClass('active-tab-header');
        $(this).addClass('active-tab-header');
        if (vi_tri_click > vi_tri_hien_tai) {
            $('.active-main-tain').removeClass('active-main-tain');
            $('.main-tain li:nth-child(' + vi_tri_click + ')').addClass('active-main-tain');
        }
        if (vi_tri_click < vi_tri_hien_tai) {
            $('.active-main-tain').removeClass('active-main-tain');
            $('.main-tain li:nth-child(' + vi_tri_click + ')').addClass('active-main-tain');
        }
    });

    //$(".handbook-menu ul li.hb-menu-list ul li a").on("click", function () {

    //    //$('.handbook-menu ul li.hb-menu-list ul li').removeClass('active-hb-subsection');
    //    //$(this).addClass('active-hb-subsection');
    //    var c = $(this).parent("li");
    //    var e = $('.right-content ul li');
    //    if (c.hasClass("active-hb-subsection")) {
    //        c.removeClass("active-hb-subsection");
    //    } else {
    //        c.addClass("active-hb-subsection");
    //        c.siblings("li").removeClass("active-hb-subsection");
    //        if (e.hasClass('active-hb-content')) {
    //            e.removeClass('active-hb-content');
    //        } else {
    //            e.addClass('active-hb-content');
    //            e.siblings('li.active-hb-content').removeClass('active-hb-content');
    //        }            
    //    }        
    //});
});