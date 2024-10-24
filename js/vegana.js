$(function () {
    // 메인이미지 슬라이드
    var swiper = new Swiper('.swiper-container', {
        speed: 500,
        direction: 'vertical',
        mousewheel: true,
        pagination: {
          el: '.swiper-pagination',
          clickable: true,
        },
        on: {
          reachEnd: function () {
            swiper.mousewheel.disable();
          }
        }
      });
      window.addEventListener('wheel', function (event) {
        if (event.deltaY < 0) {
          swiper.mousewheel.enable();
        } else if (event.deltaY > 0) {
        }
      });


    // side Menu
    const $nav = $('.total_nav');

    $(window).on('resize load', function () {
        let width = $(window).width();
        if (width < 768) {
            mobile_hide();
            $nav.removeAttr('style');
        } else {
            $('.megamenu > li > div').removeAttr('style');
        }
    });

    $('.btn_nav').on('click', function () {
        let width = $(window).width();
        if (width < 768) {
            mobile_show();
        } else {
            $nav.fadeIn().css({ top: 0 });
            $('.grayBox').fadeIn();
        }
    });

    $('.total_nav .close, .grayBox').on('click', function () {
        let width = $(window).width();
        if (width < 768) {
            mobile_hide();
            $nav.animate({ right: -100 + '%' }, 400);
        } else {
            $nav.slideUp();
        }
    });

    // 아코디언 메뉴
    $('.megamenu > li > a').on('click', function () {
        let width = $(window).width();
        if (width < 721) {
            $(this).next().slideToggle();
            $(this).parent().toggleClass('on');
            $(this).parent().siblings().removeClass('on');
            $(this).parent().siblings().children('div').slideUp();
            return false;
        }
    });

    function mobile_show() {
        $nav.addClass('on');
        $nav.animate({ right: 0 });
        $('.grayBox').fadeIn();
        $('body').addClass('hidden');
    }

    function mobile_hide() {
        $nav.removeClass('on');
        $('.grayBox').fadeOut();
        $('body').removeClass('hidden');
    }

    // gray Box
    $('.btn_nav').on('click', function () {
        $nav.fadeIn();
        $('.grayBox').fadeIn();
    });
    $('.close, .grayBox').on('click', function () {
        $nav.fadeOut();
        $('.grayBox').fadeOut();
    });

    // event swiper
    var eventSwiper = new Swiper(".eventArea", {
        pagination: {
            el: ".swiper-pagination",
            type: "fraction",
            loop: true
        },
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
        },
    });

    // 아래 방향 화살표 클릭 시 다음 슬라이드로 이동
    document.querySelector('.down-arrow').addEventListener('click', function () {
        mainSwiper.slideNext(); // 메인 슬라이드로 이동
    });

    // myNote 탭 기능
    const tabs = document.querySelectorAll('.tab');
    const contentLists = document.querySelectorAll('.contList');

    tabs.forEach(tab => {
        tab.addEventListener('click', function (event) {
            event.preventDefault();

            // 모든 탭 비활성화
            tabs.forEach(t => t.classList.remove('active'));
            // 모든 컨텐츠 리스트 숨기기
            contentLists.forEach(list => list.classList.remove('active'));

            // 클릭한 탭 활성화
            this.classList.add('active');

            // 해당 컨텐츠 리스트 표시
            const selectedTab = this.getAttribute('data-tab');
            const selectedContentList = document.querySelector(`.contList.${selectedTab}`);
            selectedContentList.classList.add('active');

        });
    });
});