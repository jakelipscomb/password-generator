// Assignment code here

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");


// Write password to the #password input
function writePassword() {
  var password = generatePassword();

  const passwordText = document.querySelector("#password");

  passwordText.value = password;

}

function generatePassword() {
  createPasswordOptions();

  return "Generated Password Goes Here";
}

function createPasswordOptions() {
  var passwordLength = createPasswordLength();

  var containsSpecialCharacters = confirm(
  "Click OK to confirm including special characters."
  );

  var containsLowercaseCharacters = confirm(
  "Click OK to confirm including lowercase characters."  
  );

  var containsUppercaseCharacters = confirm(
  "Click OK to confirm including uppercase characters."  
  );

  var containsNumericCharacters = confirm(
  "Click OK to confirm including numeric characters."  
  )

  let passwordAnswers = {
    length: passwordLength,
    specialChar: containsSpecialCharacters,
    lowercase: containsLowercaseCharacters,
    uppercase: containsUppercaseCharacters,
    numeric: containsNumericCharacters
  }
  console.log(passwordAnswers);
}

function createPasswordLength() {
  var passwordLength = prompt(
    "How long would you like the length of your password to be? (Must be 10 - 128 characters in length)"
  );

  if (passwordLength < 10 || passwordLength > 128) {
    alert(
      "Please try again, password length must be 10 - 128 characters in length"
    );
    createPasswordLength()
  }

  return passwordLength;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
