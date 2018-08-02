// midori_web.js

(function($){

  var win = $(window);

  var videoBox = $('#videoBox');
  var proBox = $('#productBox');
  var proTop = proBox.offset().top;

  var j = 0;

  var go = true;

  videoBox.on('mousewheel DOMMouseScroll', function(e){

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

    if(delta < 0 && go){
      go = false;
    } else if (delta > 0 && go) {
      go = false;
    };

    $('html').stop().animate({ scrollTop:proTop }, function(){
      go = true;
    });
  });



  proBox.on('mousewheel DOMMouseScroll', function(e){

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

    if(delta > 0 && go){
      go = false;
      $('html').stop().animate({ scrollTop:0 }, function(){
      go = true;
    });
    }
  });

})(jQuery);