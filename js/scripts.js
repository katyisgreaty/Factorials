var factorial = function(placeholderNumber) {
  n


}




$(document).ready(function(){
  $("form#factorial-form").submit(function(event){
    event.preventDefault();

    var numberInput = parseInt($("input#number").val());

    $(".user-number").text(numberInput);
    $(".answer").text(factorial(numberInput));
  });
});
//
// if(n>0)
//   n = n * (n-1)
