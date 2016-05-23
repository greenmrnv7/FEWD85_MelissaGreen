$(function(){

  $("#submit-btn").on("click", function(event){
    event.preventDefault();
    var city = $("#city-type").val();
    if (city == "New York") {
      $("body").attr("class", "nyc");
    }
    else if (city == "Austin") {
      $("body").attr("class", "austin");
    }
    else if (city == "Sydney") {
      $("body").attr("class", "sydney");
    }
    else if (city == "Los Angeles") {
      $("body").attr("class", "la");
    }
    else if (city == "San Francisco") {
      $("body").attr("class", "sf");
    }
  })
});

//var city = ["NYC", "SF", "Sydney", "LA", "Austin", "CitiPix"];


//$("#submit-btn").click(function(event){
  //    event.preventDefault();
  //});
  
  //if (city == "NYC") {
  //  $("body").attr("class", "nyc");
 // }

  //else (city == "SF") {
  //  $("body").attr("class", "sf");
  //}

  //else (city == "LA") {
  //  $("body").attr("class", "la");
  //}

  //else (city == "Sydney") {
  //  $("body").attr("class", "sydney");
  //}

  //else (city == "Austin") {
  //  $("body").attr("class", "austin");
  //}
  //if (text = "NYC") {
    //background = "../images/nyc.jpg";
  //}
//});

//};