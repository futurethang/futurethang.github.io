$(document).ready(function() {
  $(".divTableCell").mouseover(function() {
    $(this).animate({top: '600px', opacity: '0.9',},500);
    $(this).animate({top: '0px', opacity: '0.4',},3000);
  });
});
