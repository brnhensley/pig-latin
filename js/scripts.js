// business logic
var vowels = ["a", "e", "o", "u", "i", "A", "E", "I", "O", "U"]

var pigLatinWord = function(word) {
  if (englishWord.indexOf(0) === "a", {
    return true;
  } else {

    return false;
  }
};

//user interface logic
$(document).ready(function() {
  $("form#pigLatin").submit(function(event) {
    event.preventDefault();
    var word = $("#englishWord").val();
    var result = pigLatinWord(word);


    if (!result) {  // !result is the same as (result === false)
      $(".positiveResult").show();
      $(".pigLatinWord").text("not ");
    } else {
      $(".positiveResult").show();
      var
      $(".not").text("");
    }

    $("#result").show();
  });
});
