// productBox.js

(function($){

  var win = $(window);
  var winW = win.outerWidth();
  var winH = win.outerHeight(true);

  var proBox = $('#productBox');
  var proLi = proBox.find('li');
  var LiOffT = proLi.offset().top;

  var myH = winH/5*4;


  if(winW >= 769){
    win.on('scroll', function(){
      var nowTop = win.scrollTop();

      if ( nowTop >= LiOffT-(myH) ){
        proLi.addClass('landing');
      } else {
        proLi.removeClass('landing');
      }
    });
  };

  win.on('resize', function(e){
    var nowW = win.outerWidth();
    if ( winW !== nowW ) {
      // location.reload();
      // location.reload(true);
      history.go(0);
    }
  });


})(jQuery);