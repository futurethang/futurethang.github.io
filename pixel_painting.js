$(document).ready(function() {
  $(".divTableCell").mouseover(function() {
    $(this).animate({left: '600px'},1000);
    $(this).fadeTo(1000, 0.4);
  });
});
