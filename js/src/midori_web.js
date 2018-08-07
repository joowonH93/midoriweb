// midori_web.js

(function($){

  var videoBox = $('#videoBox');
  var videoBoxH = videoBox.outerHeight();
  var proBox = $('#productBox');
  var proTop = proBox.offset().top;

  var go = true;



  $('html, body').on('mousewheel DOMMouseScroll', function(e){
    var nowTop = $('html,body').scrollTop();
 
    var originE = e.originalEvent;
    var foxevt = originE.detail;
    var evt = originE.wheelDelta;
    var delta;

    if (foxevt){
      foxevt *= -40;
      delta = foxevt;
    } else {
      delta = evt;
    }

    var topGo = nowTop < videoBoxH;

    if (topGo){
      if (delta > 0  && go){
        go = false;
        $('html').stop().animate({ scrollTop:0 }, function(){
          go = true;
        });
      } else if (delta < 0 && go){
        go = false;
        $('html').stop().animate({ scrollTop:proTop }, function(){
          go = true;
        });
      }
    }
  });
  
})(jQuery);