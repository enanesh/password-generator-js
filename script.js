///////////////////////// DO NOT CHANGE ////////////////////////////////////
// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

///////////////////////// DO NOT CHANGE ABOVE HERE /////////////////////////

function generatePassword() {
  /////////////////////////// WRITE YOUR CODE HERE /////////////////////////

  // initialize alphabet
  var lowercase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
  var uppercase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
  var numeric = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"];
  var specialCharacters = ["\"", "!", "#", "$", "%", "&", "'", "(", ")", "*", "+", "-", ".", "/", ":", ";", "<", "=", ">", "?", "@", "[", "^", "_", "`", "{", "|", "}", "~", "\\", "]"];


  var alphabet = [];



  // Get user input 

  var large = prompt("Choose a length of at least 8 characters and no more than 128 characters");
  var lowerInput = confirm("To Include lowecase. Click :OK");
  var upperInput = confirm("To Include UPPERCASE. Click OK");
  var numericInput = confirm("To Include numbers. Click: OK");
  var sprecialInput = confirm("To Include Special Characters. Click: OK");


  /*converts lenght string into a number*/
  var large = ~~large


  /*conditional for alphabet variable */

  if (lowerInput == true) {
    alphabet = alphabet.concat(lowercase);
  }
  if (upperInput == true) {
    alphabet = alphabet.concat(uppercase);
  }
  if (numericInput == true) {
    alphabet = alphabet.concat(numeric);
  }
  if (sprecialInput == true) {
    alphabet = alphabet.concat(specialCharacters);
  }


  var randomPassword = "";
  // generate password
  for (var i = 0; i < large; i++) {
    //Getting alphabet length
    var alphabetLength = alphabet.length;
    //get random
    var randomNumber = Math.floor(Math.random() * alphabetLength);

    // Gets a character from alphabet

    randomPassword = randomPassword + alphabet[randomNumber];


  }
  return randomPassword;

}

