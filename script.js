// Assignment Code
var generateBtn = document.querySelector("#generate");

function generatePassword() {
  var numCharsForPassword = 0;        // Number of characters in the password
  var includeSpecialChars = false;    // Whether to include special characters in passwrod
  var includeNumericChars = false;    // Whether to include numbers in password
  var includeLowerCaseChars = false;  // Whether to include lowercase letters in password
  var includeUpperCaseChars = false;  // Whether to include uppercase letters in password
  
  do {
    numCharsForPassword = prompt("Please enter the number of characters for your password. Please note that the number of characters must be between 8 and 128.");
    console.log("Num chars: " + numCharsForPassword); // Debug

    // If input value is unacceptable, alert the user
    if ((numCharsForPassword < 8) || (numCharsForPassword > 128)) {
      alert("Please enter a number between 8 and 128.");
    } else if (isNaN(numCharsForPassword)) {
      alert("Please enter a number.")
    }
  } 
  while ((numCharsForPassword < 8) ||
         (numCharsForPassword > 128) ||
         (isNaN(numCharsForPassword)));
  //        (typeof numCharsForPassword !== "number"));


}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

  copyBtn.removeAttribute("disabled");
  copyBtn.focus();
}

function copyToClipboard() {
  // BONUS 
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

// BONUS EVENT LISTENER
