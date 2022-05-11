// Assignment Code
var generateBtn = document.querySelector("#generate");

//create generatePassword function
function generatePassword() {
  var promptLength = prompt("How long would you like your password to be?");
  var confirmLower = confirm("Would you like to include lower case letters?");
  var confirmUpper = confirm("Would you like to include upper case letters?");
  var confirmNumber = confirm("Would you like to include number characters?");
  var confirmSpecial = confirm("Would you like to include special characters?");

  while (isNaN(promptLength) || promptLength < 8 || promptLength > 128) {
    promptLength = prompt("Please type a password length between 8 - 128.");
  }
}
// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
