
$("#HB").click(function(){
  $("ABOUT").hide();
  $("TYPES").hide();
  $("HOME").show();
});

$("#TB").click(function(){
  $("ABOUT").hide();
  $("TYPES").show();
  $("HOME").hide();
});

$("#AB").click(function(){
  $("ABOUT").show();
  $("TYPES").hide();
  $("HOME").hide();
});