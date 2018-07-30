// videoBox.js

(function($){

  var win = $(window);
  var winW = win.outerWidth();

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


  // 1. scroll 버튼 클릭시 product 영역이 보임
  scrollBtn.on('click', function(e){
    e.preventDefault();

    var thisLink = $(this).children('a').attr('href');
    var thisOffset = $(thisLink).offset().top;

    $('html, body').animate({scrollTop:thisOffset}, 1200, 'easeInOutBack');
  });


  // 2. 모바일, 태블릿 화면에서 비디오 대신 이미지 배너 나오게 하기
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
    // $('.banner_wrap').hide();

  };

})(jQuery);