// midori_web.js

(function($){

  var win = $(window);
  var winW = win.outerWidth();
  var gnbBtn = $('.gnb_btn');
  var gnb = $('.gnb_wrap');

  var logo = $('h1');
  var lang = $('#language');

  var videoBox = $('#videoBox');
  var scrollBtn = videoBox.children('.scroll');
  var fullVideo = $('#fullVideo');

  var banWrap = $('.banner_wrap');
  var videoBan = banWrap.children('.video_banner');
  var videoBanLi = videoBan.children('li');
  var liClone = videoBanLi.eq(0).clone();

  videoBan.append(liClone);

  videoBan = banWrap.children('.video_banner');
  videoBanLi = videoBan.children('li');

  var banLeng = videoBanLi.length;
  videoBan.css({width:banLeng * 100 + '%'});

  var indi = fullVideo.find('.indicator');
  var indiLi = indi.children('li');

  var i = 0;

  var moveBan = function(i){
    indiLi.eq(i).addClass('active');
    indiLi.eq(i).siblings('li').removeClass('active');

    var num = i * -100 + '%';
    if ( i < banLeng-1 ){
      videoBan.animate({marginLeft:num});
    } else {
      i = 0;
      videoBan.animate({marginLeft:num}, function(){
        $(this).css({marginLeft:0});
      });
    };

    indiLi.eq(i).addClass('active');
    indiLi.eq(i).siblings('li').removeClass('active');
  };

  var productBox = $('#productBox');

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

    if(thisTop < 1000){
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



  // 4. top버튼이 일정 지점에서 멈춤



  // 5. scroll 버튼 클릭시 product 영역이 보임
  scrollBtn.on('click', function(e){
    e.preventDefault();

    var thisLink = $(this).children('a').attr('href');
    var thisOffset = $(thisLink).offset().top;

    $('html, body').animate({scrollTop:thisOffset}, 1200, 'easeInOutBack');
  });



  // 6. 모바일, 태블릿 화면에서 비디오 대신 이미지 배너 나오게 하기
  if(winW <= 768){

    moveBan(i);
  
    indiLi.on('click', function(){
      i = $(this).index();
      moveBan(i);
    });

    var timed = 3000;
    var autoStart;

    var startSlide = function(){
      autoStart  =  setInterval(function(){
                    ( i < banLeng-1 ) ? i += 1 : i = 1;
                    moveBan(i);  },  timed); };
    // var stopSlide = function(){ clearInterval( autoStart ); };

    startSlide();

  } else {
    $('.banner_wrap').hide();
  };

})(jQuery);