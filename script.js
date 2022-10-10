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

  var length = "";
  var lowercase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
  var uppercase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
  var numeric = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"];
  var specialCharacters = [" ", "\"", "!", "#", "$", "%", "&", "'", "(", ")", "*", "+", "-", ".", "/", ":", ";", "<", "=", ">", "?", "@", "[", "^", "_", "`", "{", "|", "}", "~", "\\", "]"];


  var alphabet = [];



  var length = prompt("Choose a length of at least 8 characters and no more than 128 characters");
  var lowerInput = confirm("Include lowecase. Type YES or NO");
  var upperInput = confirm("Include UPPERCASE. Type YES or NO");
  var numericInput = confirm("Include numbers. Type YES or NO");
  var sprecialInput = confirm("Include Special Characters. Type YES or NO");


  if (lowerInput == true) {
    alphabet = alphabet + lowercase;
  }
  if (upperInput == true) {
    alphabet = alphabet + uppercase;
  }
  if (numericInput == true) {
    alphabet = alphabet + numeric;
  }
  if (sprecialInput == true) {
    alphabet = alphabet + specialCharacters;
  }

  console.log(alphabet)

    number

}






