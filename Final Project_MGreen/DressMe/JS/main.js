$(document).ready(function(){

//Picking a starting category will present three choices of that category for the user to choose from without leaving the page.
//Every time the window is scrolled

  $(window).scroll(function(){
    //Check the location of each element
    $(".hideme").each(function(i){
      var bottom_of_object = $(this).offset().top +
    $(this).outerHeight();
      var bottom_of_window = $(window).scrollTop() +
    $(window).height();
    //if the obejct is completely visible in the window, fade it in

    if(bottom_of_window > bottom_of_object) {
      $(this).animate({"opacity" : "1"},1000);
    }
    });
  });

});
