(function() {
    var winH = 0;//창높이
    var sc = 0;//scrollTop
    var mainSliderWrap = $('.main_slider_wrap');


    // 탑버튼
    toggleBtnTop();
    function toggleBtnTop() {
        var btnTop = $('.top_wrap .btn_top');
        btnTop.hide();
        $(window).scroll(function() {
            sc = $(this).scrollTop();
    
            if(sc > 300) {
                btnTop.fadeIn();
            } else {
                btnTop.fadeOut();
            }
        }).trigger('scroll');
    
        btnTop.on('click', function(e) {
            e.preventDefault();
            $('html, body').animate({scrollTop:0});
        });
    }


    $(window).resize(function() {
        winH = $(this).height();
        mainSliderWrap.height(winH - 60);
    }).trigger('resize');

    // gnb아코디언 메뉴
    $('.gnb .depth1>li>a').on('click', function(e) {
        e.preventDefault();
        $(this).toggleClass('active').parent().siblings().find('>a').removeClass('active');
        $(this).next().stop().slideToggle().parent().siblings().find('.depth2').hide();      
    });





    $('#header .btn_open').on('click', function(e) {
        e.preventDefault();
        $('#header .dimm').show();
        $('#header .gnb_box').addClass('open');
        $('#header .btn_close').fadeIn(1000);
        $('body').addClass('hidden');
    });



    $('#header .btn_close, #header .dimm').on('click', function() {
        $('#header .dimm').fadeOut();
        $('#header .gnb_box').removeClass('open');
        $('#header .btn_close').hide();
        $('body').removeClass('hidden');
    });

    // $('.gnb_box').scroll(function() {
    //     sc = $(this).scrollTop();

    //     if(sc > 50) {
    //         $('#header .btn_close').show();
    //     } else {
    //         $('#header .btn_close').hide();
    //     }

    // }).trigger('scroll');



    // 메인슬라이더
    var mainSlider = new Swiper('.main_slider', {
        // Optional parameters
        // direction: 'vertical',
        loop: true,
        // autoplay: {
        //     delay: 5000,
        // },
      
        // If we need pagination
        pagination: {
          el: '.swiper-pagination',
          type:'bullets',
          clickable:true,
        },
      
    
      });


    // 이벤트 슬라이더
    var eventSlider = new Swiper('.event_slider', {
        // direction: 'vertical',
        loop: true,
        centeredSlides:true,
        slidesPerView:'auto',
        // If we need pagination
        pagination: {
            el: '.swiper-pagination',
            type:'fraction',
        },
      
    });

    // 스토리슬라이더
    var storySlider = new Swiper('.story_slider', {
        // direction: 'vertical',
        // loop: true,
        centeredSlides:true,
        slidesPerView:'auto',
      
        pagination: {
            el: '.swiper-pagination',
            type:'fraction',
        },

    });
    
})();

// false판정
// 0, -0, null, undefined, false, NaN, ''


// $(this)는 select 
// select의 val은 option의 value를 의미한다
// option의 첫번째는 빈칸을 넣어놨는데 빈칸이 아닐때만 적용하겠다는 것이다
// _self:   window.open 으로 창을 띄우는데 현재창에서 띄워라 
// _blank로 하면 새창을 띄우면 사용자가 팝업을 꺼놓으면 작동을 안하니까
// 원래 window.open은새창띄울때 사용하는데 
// 새창을 띄우는게 아니고 주소만 바꾸는 거니까 window.open를 쓸 필요가 없다
// 그래서 location.href를 사용한다

// window의 하위객체 
// location.href
// document
// history.go(-1)
// navigator.userAgent


// html의 속성 가져올때는 
// .attr('src')

// 폼 상태
// .prop('checked')

// 폼에 value값가져오는 
// .val()





// 동적요소추가
// -안쪽 앞으로 추가하는거 
// $(요소).prepend();
// -안쪽뒤에 추가하는거
// $(요소).append();

// 이전이후
// before() 
// after()

// html()
// text()

// 스크롤탑이 200 미만이거나 mainNoticeWrap 위치에서 200을 뺏을때 fixed 된 배경을 투명도를 줘서 나오지 않게 가리겠다  

// 자바스크립트 this
// 1. 일반함수안에서 this는 window이다
// 2. 객체안에서 만든 함수(메서드) 메서드에서 만든this는 해당객체가 된다
// 3. 이벤트핸들러 안에서 this는 이벤트를 연결한(이벤트바인딩) 요소


// 제이쿼리객체에 반복적으로 무언가를 실행하고싶으면 each반복문을 사용한다
// 스와이퍼객체안에서 this는 슬라이더 자체를의미하고 슬라이더 바깥에서 this는...

// 똑같이 만들어보고 보고 적는한이 있더라도 두세번 적어보고 그후에는 안보고 만들수있어야지만 학습이 된것이다 
// 여러분이 개발할때는 복잡한거 할때는 콘솔을 통해서 확인하면서 해야한다


// 페이지네이션이 위에것이 많고 밑에가 적을때문제가된다?

// 배열에 들어가는 실질적인 이미지는 두개는 딱정해진걸로 들어갔으나 뒤에 더추가를 해야하는 
// 경우에는 첫번째 슬라이더의 갯수와 어떤 연관이 있나
// 슬라이더의 갯수가 세개 이상일때 
// 슬라이더의 갯수가 
// 3개이면 1개 추가
// 4개이면 2개 추가
// 5개면  3개 추가

// 첫번째 슬라이더 개수 - 기존배열 요소 개수 
// 만큼을 반복 돌려야한다

// 실무에 가면 많이 어려울때는 도와주는사람이 있어요 
// 같이 붙어서 고민을 해줘 그러니까 너무 혼자서 해야되나 하는 그런 고민을 하지 않아도 괜찮겠다는 ...


// 실행순서에 관해 이야기 하고 있다
// 검색토클 버튼을 클릭시 
// 1. 헤더에 addClass가 발생함
// 2. 스크롤 이벤트에 의해 removeClass가 발생한다

// 나중에 어떤코드를 실행하게 하려면 뭘써야할까
// 메서드가... setTimeout이다 코드의 진행순서를 바꿀때도 사용할수가 있다.

// 원칙적으론 변수는 즉시실행함수위에 모아놓는것이 원칙입니다 공통으로 하는건 위에놓고 각각 요소를 선택하는 변수는 해당요소 위에 놔라












