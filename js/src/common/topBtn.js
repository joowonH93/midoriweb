// topBtn.js

(function($){

  var win = $(window);
  var topBtn = $('#topBtn');


  // 1. 스크롤 하면 top버튼 보이게 만들기
  topBtn.hide();

  win.on('scroll', function(e){
    var thisTop = $(this).scrollTop();

    if(thisTop < 300){
      topBtn.stop().fadeOut();
    } else {
      topBtn.stop().fadeIn();
    }
  });

  // 2. top버튼 클릭 시 최상단으로 올라가기
  topBtn.on('click', function(e){
    $('html, body').animate({scrollTop:0}, 300);
  });

})(jQuery);