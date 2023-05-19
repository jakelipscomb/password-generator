// Assignment code here
var uppercaseCharacters = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var lowercaseCharacters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var numericCharacters = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
var specialCharacters = ["!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "_", "+", "=", "-"];
const generateBtn = document.querySelector("#generate");
var passwordAnswers = [];
var passwordLength = 0;
var password = [];
var passwordStr;
// Get references to the #generate element

generateBtn.addEventListener("click", writePassword);

// Write password to the #password input
function writePassword() {
  passwordLength = 0;
  password = [];
  passwordStr = "";
  generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = passwordStr;
  console.log(passwordStr);
}

function generatePassword() {
  createPasswordOptions();
  var temp;
    for (let i = 0; i < passwordLength; i++) {
      temp = Math.floor(Math.random() * passwordAnswers.length);
      password = password.concat(passwordAnswers[temp])
  }
  passwordStr = password.join("");
  console.log(passwordStr);
}

function createPasswordOptions() {
  createPasswordLength();

  var containsSpecialCharacters = confirm(
  "Click OK to confirm including special characters."
  );
  if (containsSpecialCharacters) {
    passwordAnswers = passwordAnswers.concat(specialCharacters);
  }

  var containsLowercaseCharacters = confirm(
  "Click OK to confirm including lowercase characters."  
  );
  if (containsLowercaseCharacters) {
    passwordAnswers = passwordAnswers.concat(lowercaseCharacters);
  }

  var containsUppercaseCharacters = confirm(
  "Click OK to confirm including uppercase characters."  
  );
  if (containsUppercaseCharacters) {
    passwordAnswers = passwordAnswers.concat(uppercaseCharacters);
  }

  var containsNumericCharacters = confirm(
  "Click OK to confirm including numeric characters."  
  );
  if (containsNumericCharacters) {
    passwordAnswers = passwordAnswers.concat(numericCharacters);
}

function createPasswordLength() {
  passwordLength = prompt(
    "How long would you like the length of your password to be? (Must be 8 - 128 characters in length)"
  );

  if (passwordLength < 8 || passwordLength > 128 || isNaN(passwordLength)) {
    alert(
      "Please try again, password length must be 8 - 128 characters in length"
    );
    createPasswordLength()
  }

  console.log(passwordLength)
}

}