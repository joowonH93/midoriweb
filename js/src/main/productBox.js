// productBox.js

(function($){

  var win = $(window);
  var winW = win.outerWidth();
  var winH = win.outerHeight(true);

  var proBox = $('#productBox');
  var proLi = proBox.find('li');
  var LiOffT = proLi.offset().top;

  var myH = winH/5*4;

  var mStyle = $('#mStyle');
  var tabBox = mStyle.children('.tab_box');
  var tabMenu = tabBox.children('.category');
  var selMenu = tabMenu.children('li');
  var tabCon = tabBox.children('.tab_content');
  var selCon = tabCon.children('ul');


  if(winW >= 769){
    win.on('scroll', function(){
      var nowTop = win.scrollTop();

      if ( nowTop >= LiOffT-(myH) ){
        proLi.addClass('landing');
      } else {
        proLi.removeClass('landing');
      }
    });
  }

  selMenu.on('click', function(e){
    e.preventDefault();
    var i = $(this).index();

    selMenu.eq(i).addClass('select');
    selMenu.eq(i).siblings().removeClass('select');

    selCon.eq(i).stop().fadeIn(800).addClass('select');
    selCon.eq(i).siblings().stop().fadeOut(800).removeClass('select');
  });

  win.on('resize', function(e){
    var nowW = win.outerWidth();
    if ( winW !== nowW ) {
      // location.reload();
      // location.reload(true);
      history.go(0);
    }
  });


})(jQuery);