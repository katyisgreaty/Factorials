var factorial = function(placeholderNumber) {
  if(placeholderNumber) {
    var answer = 1;
    for (var number = 1; number <= placeholderNumber; number += 1) {
      answer *= number;
    }
  } return answer;
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
