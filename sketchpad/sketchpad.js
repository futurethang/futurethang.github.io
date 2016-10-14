$(document).ready(function(){
  for (var x = 0 ; x < 16 ; x++ ) {
    for (var y = 0 ; y < 16 ; y++ ) {
      var $block = $("<div class='block'></div>");
      $block.appendTo('#container');
    }
    $("<br>").appendTo('#container');
    // $("<span class='stretch'>").appendTo('#container');
  }

  // for (var x = 0 ; x < 16 ; x++ ) {
  //   for (var y = 0 ; y < 16 ; y++ ) {
  //     var $block = $("<td></td>");
  //     $block.appendTo('#container');
  //   }
  //   $("<tr />").appendTo('#container');
  // }

  $('.block').mouseenter(function() {
    $(this).fadeTo(800, 1);

  });
});

function newGrid() {
  var gridSize = prompt("What size grid would you like?", "enter number here");
  alert("You want a grid that is " + gridSize + " large.")
  if(gridSize >= 2) {
    $("#container").empty();
    for (var x = 0 ; x < gridSize ; x++ ) {
      for (var y = 0 ; y < gridSize ; y++ ) {
        var $block = $("<div class='block'></div>");
        $block.appendTo('#container');
      }
      $("<br>").appendTo('#container');
      // $("<span class='stretch'>").appendTo('#container');
    };
  };
  
  $('.block').mouseenter(function() {
    $(this).fadeTo(800, 1);

  });
};
