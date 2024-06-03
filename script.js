
//animation
 $("#morning-show").hide();
  $("#morning-show").slideDown(3000, function() {
       });

$("#outer-range").hide();
 $("#outer-range").slideToggle(3000, function() {
      });

$("#kindred").hide();
 $("#kindred").slideToggle(3000, function() {
      });

// color change 
$('h1').on("click",function(event){ 
  $('h1').toggleClass("Geeks1"); 
});

$("#rules").on("click",function(event){
   $('#rules').toggleClass("Geeks2"); 
});

$(".morning").on("click",function(event){ 
  $(".morning").toggleClass("Geeks5"); 
});

$("#paragraph").on("click",function(event){
   $('#paragraph').toggleClass("Geeks5 Geeks1"); 
});

$("#paragraph").on("click",function(event){
   $('#paragraph').toggleClass("Geeks3"); 
});

$("#kindred").on("click",function(event){
   $('#kindred').toggleClass("Geeks4"); 
});

$("#outer").on("click",function(event){
   $('#outer').toggleClass("Geeks6"); 
});



  

