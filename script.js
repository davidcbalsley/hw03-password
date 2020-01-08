// Assignment Code
var generateBtn = document.querySelector("#generate");

function generatePassword() {
  var numCharsForPassword = 0;  // Number of characters in the password
  
  

  do {
    numCharsForPassword = prompt("Please enter the number of characters for your password. Please note that the number of characters must be between 8 and 128.");
    console.log("Num chars: " + numCharsForPassword); // Debug
  } 
  while ((numCharsForPassword < 8) ||
         (numCharsForPassword > 128));
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
