
// color change heading!
$('h1').on("click",function(event){
  // $('h1').css("color","rgb(0, 0, 0)")
  $('h1').toggleClass("Geeks1 Geeks2"); 
});

 $("#morning-show").hide();
  $("#morning-show").slideDown(3000, function() {
       });

$("#outer-range").hide();
 $("#outer-range").slideToggle(3000, function() {
      });

$("#kindred").hide();
 $("#kindred").slideToggle(3000, function() {
      });

// color change paragraph!
$("#rules").on("click",function(event){
  $("#rules").css("color","rgb(40, 280, 6)")
});
