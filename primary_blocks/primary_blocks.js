$(document).ready(function(){
// $class_array = [.blue, .green, .yellow, .red];
// $new_class = class_array[Math.floor(Math.random() * (class_array.length + 1))];
   $('.box').click(function() {
     $(this).fadeTo(700, 0.4, function() {
       $('.box').click(function() {
         $(this).fadeTo(700, 1);
       });
     });
    //  $(this).hide('slow');
    //  $(this).removeClass(this).addClass(new_class);
   });
});
