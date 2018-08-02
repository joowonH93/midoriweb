// topBtn.js

(function($){

  var win = $(window);
  var topBtn = $('#topBtn');



  // 1. 스크롤 하면 top버튼 보이게 만들기
  topBtn.hide();

  win.on('scroll', function(){
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



  // 3. 맨아래에서 top버튼 포지션 변경
  // win.on('scroll', function(){
  //   var scrollHeight = $(document).height();
  //   var scrollPosition = $(window).height() + $(window).scrollTop();

  //   if ((scrollHeight - scrollPosition) / scrollHeight === 0) {
  //     topBtn.css({position:'static', right:'50px', bottom:'200px'});
  //   } else {
  //     topBtn.css({position:'fixed'});
  //   }

  // });



})(jQuery);