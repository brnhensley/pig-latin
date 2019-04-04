// business logic
var vowels = ["a", "e", "o", "u", "i", "A", "E", "I", "O", "U"]
// var consonants = ["b", "c", "d", "f", "g", "h", "j", "k", "l", "m", "n", "p", "q", "r", "s" , "t", "v", "w", "x", "y", "z", "B", "V", "D", "F", "G", "H", "J", "K", "L", "M", "N", "P", "Q", "R", "S", "T", "V", "W", "X", "Y", "Z"]

function translateWord(userInput) {
  var userInput = "farts";
  var userInputArray = userInput.split("");
  console.log(userInput);
  console.log(userInputArray);

  if (vowels.includes(userInputArray[0])) {
    userInputArray = userInputArray.join("") + "way";
    $(".pigLatinResult").text(userInputArray);
    $("#positiveResult").show();
    console.log(userInputArray);
  } else
  var stop = 0
  while(!vowels.includes(userInputArray[stop])){
    stop++;
  }
  var output = userInputArray.slice(stop).join("") + userInputArray.slice(0, stop).join("") + "ay";
  return output;
  //this line does what we tried below
  // var moveConsonents = userInputArray.slice(0, stop);
  // var newUserInputArray =
  // userInputArray.join("") + moveConsonents + "ay";
}


//user interface logic
$(document).ready(function() {
  $("form#pigLatin").submit(function(event) {
    event.preventDefault();
    var userInput = $("#userInput").val();
    var userInputArray = userInput.split("");
    var output = translateWord(userInput);
    // var result = pigLatinWord(userInput);
    // console.log(userInput, userInputArray)
    $(".pigLatinResult").text(output);
    $("#positiveResult").show();
    console.log(output);
  });
});
