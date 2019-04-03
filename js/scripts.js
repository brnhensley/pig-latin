// business logic
var vowels = ["a", "e", "o", "u", "i", "A", "E", "I", "O", "U"]
var consonants = ["b", "c", "d", "f", "g", "h", "j", "k", "l", "m", "n", "p", "q", "r", "s" , "t", "v", "w", "x", "y", "z", "B", "V", "D", "F", "G", "H", "J", "K", "L", "M", "N", "P", "Q", "R", "S", "T", "V", "W", "X", "Y", "Z"]



//user interface logic
$(document).ready(function() {
  $("form#pigLatin").submit(function(event) {
    event.preventDefault();
    var userInput = $("#userInput").val();
    var userInputArray = userInput.split("");
    // var result = pigLatinWord(userInput);
    console.log(userInput, userInputArray)
    if (vowels.includes(userInputArray[0])) {
        userInputArray = userInputArray.join("") + "way";
        $(".pigLatinResult").text(userInputArray);
        $("#positiveResult").show();
        console.log(userInputArray);
    } else {
      return;
    }
  });
});


// userInput + "way"
//
// userInput = "grunt"
//
// change "grunt" into array ("")
// userInput = ["g", 'r', 'u', 'n', "t"]
// compare to vowels arry, move each non match to the end of userInput array - stop at vowel
// push "a" "y" ["g", 'r', 'u', 'n', "t"]
//  to a string



// for (var index = 0; index < userInputArray.length; index += 1) {
// var pigLatinWord = function(userInput) {
//   if (userInput.indexOf(0) === "a", {
//     return true;
//   } else {
//
//     return false;
//   }
// };
// if (!result) {  // !result is the same as (result === false)
//   $(".positiveResult").show();
//   $(".pigLatinWord").text("not ");
// } else {
//   $(".positiveResult").show();
//   var
//   $(".not").text("");
// }
//
// $("#result").show();
