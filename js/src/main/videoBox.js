// videoBox.js

(function($){

  var win = $(window);
  var winW = win.outerWidth();

  var videoBox = $('#videoBox');
  var scrollBtn = videoBox.children('.scroll');
  var fullVideo = $('#fullVideo');

  var playBtn = $('.text_box').children('.play_btn');
  var modalCon = fullVideo.children('.modal_frame');
  var modalBg = fullVideo.children('.modal_bg');

  modalCon.hide();
  modalBg.hide();

  var banWrap = $('.banner_wrap');
  var videoBan = banWrap.children('.video_banner');
  var videoBanLi = videoBan.children('li');
  var vdBanLeng = videoBanLi.length-1;

  videoBan = banWrap.children('.video_banner');
  videoBanLi = videoBan.children('li');

  var indi = fullVideo.find('.indicator');
  var indiLi = indi.children('li');

  var j = 0;





  // 1. scroll 버튼 클릭시 product 영역이 보임
  scrollBtn.on('click', function(e){
    e.preventDefault();

    var thisLink = $(this).children('a').attr('href');
    var thisOffset = $(thisLink).offset().top;

    $('html, body').stop().animate({scrollTop:thisOffset}, 1200, 'easeInOutBack');
  });



  // 2. 모바일, 태블릿 화면에서 비디오 대신 이미지 배너 나오게 하기
  if(winW <= 768){

    playBtn.on('click', function(e){
      e.preventDefault();
      window.open('https://youtu.be/GmgUZHCdC3k');
    });

    var ReZindex = function(){
      var i = 0;
      for(; i <= vdBanLeng; i += 1){
        var j = i * 10;
        videoBanLi.eq(vdBanLeng - i).css({zIndex:j});
      }
    };
    ReZindex();


    var IndiActive = function(j){
      indiLi.eq(j).addClass('active');
      indiLi.eq(j).siblings().removeClass('active');

      videoBanLi.eq(j).fadeIn();
      videoBanLi.eq(j).nextAll().fadeIn();
      videoBanLi.eq(j).prevAll().fadeOut();
    };
    IndiActive(j);


    var timed = 2500;
    var autoStart;

    var startSlide = function(){
      autoStart = setInterval(function(){
        ( j >= vdBanLeng ) ? j = 0 : j += 1;
                  IndiActive(j);  },
      timed);};

    startSlide(j);


    indiLi.on('click', function(e){
      e.preventDefault();
      j = $(this).index();

      IndiActive(j);
    });
  }



  // 3. laptop 이상 부터 모달 윈도우를 띄워 유튜브 영상 제공
  if(winW > 768){
    playBtn.on('click', function(e){
      e.preventDefault();

      modalCon.fadeIn();
      modalBg.fadeIn(function(){
         $('video')[0].pause();
         // $('video')[0].get[0].play(); 
      });
      // modalCon.wrap('<div class="video-wrap">');

      $(window).on('keyup', function(e){
        var key = e.key.toLowerCase();
        // console.log(key);
        switch(key){
          case 'escape':
          case 'tab':
            modalCon.fadeOut();
            modalBg.fadeOut(function(){
              $('video')[0].play();
            });
          break;
        }

      });


      modalBg.on('click', function(){
        modalCon.fadeOut();
        modalBg.fadeOut(function(){
           $('video')[0].play();
        });
      });
    });
  }



  // 4. 일정 영역으로 스크롤 내려오면 영상 정지
  win.on('scroll', function(){

    var videoH = videoBox.height();
    var winTop = win.scrollTop();

    if ((videoH - 150) < winTop){
      $('video')[0].pause();
    } else {
      $('video')[0].play();
    }

  });



})(jQuery);