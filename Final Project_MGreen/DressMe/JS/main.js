$(document).ready(function(){

//Mobile Hamburger Menu

//When the hamburger menu is clicked it displays the <ul> links
  $(function($){
    $(".menu-btn").click(function(){
    $(".responsive-menu").addClass("expand")
    $(".menu-btn").addClass("btn-none")
    })

//When the hamburger menus is clicked again it collapses the <ul> links
    $(".close-btn").click(function(){
    $(".responsive-menu").removeClass("expand")
    $(".menu-btn").removeClass('btn-none')
    })
  })

//Sticky non-hamburger nav

$("#nav-wrap").addClass("original").clone().insertAfter("#nav-wrap").addClass("cloned").css("position" , "fixed").css("top" , "0").css("margin-top" , "0").css("z-index" , "500").removeClass("original").hide();

scrollIntervalID = setInterval(stickIt, 10);

function stickIt() {
  var orgElementPos = $(".original").offset();
  orgElementTop = orgElementPos.top;

  if ($(window).scrollTop() >= (orgElementTop)) {
    orgElement = $(".original");
    coordsOrgElement = orgElement.offset();
    leftOrgElement = coordsOrgElement.left;
    widthOrgElement = orgElement.css("width");

  $(".cloned").css("left" , leftOrgElement+"px").css("top" , 0).css("width" , widthOrgElement).show();
    $(".original").css("visibility" , "hidden"); 
  }

  else {
    $(".cloned").hide();
    $(".original").css("visibility" , "visible");
  }
}

//Sticky hamburger nav 

$(".mobile-nav").addClass("original").clone().insertAfter(".mobile-nav").addClass("cloned").css("position" , "fixed").css("top" , "20").css("margin-top" , "20").css("z-index" , "500").removeClass("original").hide();

scrollIntervalID = setInterval(stickIt, 10);

function stickIt() {
  var orgElementPos = $(".original").offset();
  orgElementTop = orgElementPos.top;

  if ($(window).scrollTop() >= (orgElementTop)) {
    orgElement = $(".original");
    coordsOrgElement = orgElement.offset();
    leftOrgElement = coordsOrgElement.left;
    widthOrgElement = orgElement.css("width");

  $(".cloned").css("left" , leftOrgElement+"px").css("top" , 0).css("width" , widthOrgElement).show();
    $(".original").css("visibility" , "hidden"); 
  }

  else {
    $(".cloned").hide();
    $(".original").css("visibility" , "visible");
  }
}

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

//Picking a starting category will present three choices of that category for the user to choose from without leaving the page.


//Of the three same-category choices the user will be prompted to chose one.
//Choosing one same-category choice will present the user with a complete "outfit" that includes a "top" a "bottom" and a "accesory".
//When the final outfit is presented the user will also be prompted to make a purchase with a buy button.