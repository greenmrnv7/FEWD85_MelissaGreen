//var hiddenContent = $()




//* $(".readMore").click(
 // function(event) {
   // event.preventDefault(){
     // if(hiddenContent.is(":visible")) {
       // hiddenContent.slideUp(3000);
      //} else {
        //hiddenContent.slideDown(3000);
     // }
   // }
 // })

$(document).ready(function(){

  $("a").click(function(event){
      event.preventDefault();
  });

  $(".readmore").click(function(){
      $("#show-this-on-click").slideDown(2000);
  });

  $(".readmore").click(function(){
      $(".readless").slideDown(2000);
  });

  $(".readmore").click(function(){
    $(".readmore").hide();
  });

  $(".readless").click(function(){
    $("#show-this-on-click").slideUp(2000);
  });

  $(".readless").click(function(){
    $(".readmore").show(2000);
  });

  $(".readless").click(function(){
    $(".readless").hide();
  });

  $(".learnmore").click(function(){
    $("#learnmoretext").slideDown(2000);
  });

  $(".learnmore").click(function(){
    $(".learnmore").hide();
  });


});