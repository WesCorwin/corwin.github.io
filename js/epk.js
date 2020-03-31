$(document).ready(function(){
  $("#credits").hide();
  $("#videos").hide();

  $("#bio-button").click(function() {
    $("#bio").show();
    $("#credits").hide();
    $("#videos").hide();
  });

  $("#credits-button").click(function() {
    $("#bio").hide();
    $("#credits").show();
    $("#videos").hide();
  });

  $("#video-button").click(function() {
    $("#bio").hide();
    $("#credits").hide();
    $("#videos").show();
  });
});
