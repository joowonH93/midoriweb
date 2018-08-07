// headBox.js

(function($){



  var win = $(window);
  var winW = win.outerWidth();
  
  var gnbBtn = $('.gnb_btn');
  var gnb = $('.gnb_wrap');

  var bigPro = $('.gnb_01');
  var s_ms = bigPro.find('.m_s');

  var bigShop = $('.gnb_02');
  var s_on = bigShop.find('.on_s');
  var s_off = bigShop.find('.off_s');

  var bigCp = $('.gnb_03');
  var s_bm = bigCp.find('.b_m');
  var s_im = bigCp.find('.i_m');

  var MovePosition = function(i, m){
    var thisPosition = $(i.attr('data-target')).offset().top;
    $('html, body').stop().animate({scrollTop:thisPosition - m + 'px'}, 1000, 'easeInOutBack');
  };

  var _this;

  var logo = $('h1');
  var lang = $('#language');

  var bigM = $('#gnb').find('.big_menu');
  var bigMenuA = bigM.children('a');
  var bigLast = bigM.eq(-1).find('a');





  // 1. gnb 보이고 사라지게 하기

  /* 처음 화면에서 gnb 메뉴가 보이지 않도록 설정 */
  gnb.hide();

  /*
  gnb버튼을 클릭 시 gnb가 나오고
  gnb의 버튼 태그에 .active를 추가해 X 이미지가 보이도록 한다
  */
  gnbBtn.on('click', function(e){
    gnb.stop().fadeToggle();
    $(this).children('button').toggleClass('active');
    // console.log(ck);
    $('#wrap').on('click', function(){
     var ck = $(this).children('button').hasClass('active');
        if(ck){
          gnb.stop().fadeOut();
          gnbBtn.children('button').removeClass('active');
        }
      });
  });



  // 2. 스크롤 내리면 h1과 language 가리기
  // win.on('scroll', function(){
  //   var thisTop = $(this).scrollTop();

  //   if(thisTop > 100){
  //     logo.stop().fadeOut(150);
  //     lang.stop().fadeOut(150);
  //   } else {
  //     logo.stop().fadeIn(150);
  //     lang.stop().fadeIn(150);
  //   }
  // });


  // 2-1. 참고하기
  // https://bit.ly/2O3PsNF
  // 링크줄여주는 사이트 -> https://bitly.com/

  var lastScrollTop = 0,
      delta = 15;

  win.on('scroll', function(e){
    var thisTop = $(this).scrollTop();

    if (Math.abs(lastScrollTop - thisTop) <= delta) return;

    if ((thisTop > lastScrollTop) && (lastScrollTop > 0)){
      logo.stop().fadeOut(150);
      lang.stop().fadeOut(150);
      // headBg.stop().fadeOut(150);
    } else {
      logo.stop().fadeIn(150);
      lang.stop().fadeIn(150);
      // headBg.stop().fadeIn(150);
    }

    lastScrollTop = thisTop;
  });


// $('head').append('<style></style>');
// $('style').text('#headBox > .head_wrap:before {\
//                  content:" "; display:block;\
//                  width:100%; height:150px;\
//                  background-color:rgba(255,255,255,0.5);\
//                  opacity:0;}');


  // 3. 작은 메뉴 클릭하면 해당 영역을 스크롤해서 보여줌

  // s_ms.on('click', function(e){
  //   e.preventDefault();
  //   _this = $(this);

  //   MovePosition(_this, 50);
  // });

  // s_on.on('click', function(e){
  //   e.preventDefault();
  //   _this = $(this);

  //   MovePosition(_this, 50);
  // });.mysite.com" onClick="javascript.function(

  // s_off.on('click', function(e){
  //   e.preventDefault();
  //   _this = $(this);

  //   MovePosition(_this, 50);
  // });

  // s_bm.on('click', function(e){
  //   e.preventDefault();
  //   _this = $(this);

  //   MovePosition(_this, 0);
  // });

  // s_im.on('click', function(e){
  //   e.preventDefault();
  //   _this = $(this);

  //   MovePosition(_this, 50);
  // });

  // ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~



  // 4. gnb메뉴 mouseenter와 focus

  // gnb메뉴의 하위메뉴를 숨기고,
  // 하위메뉴 영역에 대한 이벤트를 지정

  if(winW > 768){

    bigM.children('ul').children('li').hide();

    var GnbHide = function(){
      gnb.stop().fadeOut();
      gnbBtn.children('button').removeClass('active');
    };

    bigMenuA.on('mouseenter focus', function(){
      _this = $(this);
      _this.next('ul').children('li').stop().slideDown();
    });

    bigM.on('mouseleave', function(){
      _this = $(this);
      _this.children('ul').children('li').stop().slideUp();
    });

    $.each(bigMenuA, function(index, value){
      _this = $(this);
      _this.next('ul').children('li').children('a').eq(-1).on('blur', function(){
        _this.next('ul').children('li').stop().slideUp();
      });
    });

    bigLast.on('blur', function(){
      GnbHide();
    });
  }



  // 5. gnb 배경 클릭시 비활성화
  gnb.on('click', function(){
    gnb.stop().fadeOut();
    gnbBtn.children('button').removeClass('active');
  });

  

})(jQuery);