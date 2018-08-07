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
    }

    indiLi.eq(i).addClass('active');
    indiLi.eq(i).siblings('li').removeClass('active');
  };


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
     // playBtn.attr('onclick', "window.open('https://youtu.be/GmgUZHCdC3k')");
     window.open('https://youtu.be/GmgUZHCdC3k');
    });

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