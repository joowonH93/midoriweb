// contact_us.js

(function($){

  var win = $(window);
  var winW = win.outerWidth();
  var gnbBtn = $('.gnb_btn');
  var gnb = $('.gnb_wrap');

  var logo = $('h1');
  var lang = $('#language');

  var topBtn = $('#topBtn');



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
  });



  // 2. 스크롤 하면 top버튼 보이게 만들기
  topBtn.hide();

  win.on('scroll', function(e){
    var thisTop = $(this).scrollTop();

    if(thisTop < 300){
      topBtn.stop().fadeOut(300);
    } else {
      topBtn.stop().fadeIn(300);
    }
  });


  // 2-1. 스크롤 내리면 h1과 language 가리기
  win.on('scroll', function(e){
    var thisTop = $(this).scrollTop();

    if(thisTop > 100){
      logo.stop().fadeOut(150);
      lang.stop().fadeOut(150);
    } else {
      logo.stop().fadeIn(150);
      lang.stop().fadeIn(150);
    }
  });



  // 3. top버튼 클릭 시 최상단으로 올라가기
  topBtn.on('click', function(e){
    $('html, body').animate({scrollTop:0}, 500);
  });

})(jQuery);
