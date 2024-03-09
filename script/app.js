$(function(){

    //menu
    $(".menu li").on({
        mouseover:function(){
          $(".submenu",this).stop().slideDown();
        },
        mouseout:function(){
          $(".submenu",this).stop().slideUp();
        }
      });

});