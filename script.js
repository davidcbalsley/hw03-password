// Assignment Code
var generateBtn = document.querySelector("#generate");

function generatePassword() {
  var numCharsForPassword = 0;        // Number of characters in the password
  var includeSpecialChars = false;    // Whether to include special characters in password
  var includeNumericChars = false;    // Whether to include numbers in password
  var includeLowerCaseChars = false;  // Whether to include lowercase letters in password
  var includeUpperCaseChars = false;  // Whether to include uppercase letters in password
  var newPassword = "";               // The new password that we are creating
  
  // Prompt the user to enter the number of characters for the password
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

  // Prompt the user to pick the types of characters to include in the password
  do {
    // Confirm whether to include special characters in the password
    includeSpecialChars = confirm("Click OK to confirm including special characters.");
    console.log("includeSpecialChars: " + includeSpecialChars); // Debug

    // Confirm whether to include numbers in the password
    includeNumericChars = confirm("Click OK to confirm including numbers.");
    console.log("includeNumericChars: " + includeNumericChars); // Debug

    // Confirm whether to include lowercase letters in the password
    includeLowerCaseChars = confirm("Click OK to confirm including lowercase letters.");
    console.log("includeLowerCaseChars: " + includeLowerCaseChars); // debug

    // Confirm whether to include uppercase letters in the password
    includeUpperCaseChars = confirm("Click OK to confirm including uppercase letters.");
    console.log("includeUpperCaseChars: " + includeUpperCaseChars); // debug

    if (!includeSpecialChars && !includeNumericChars && !includeLowerCaseChars && !includeUpperCaseChars) {
      // Alert the user that they need to select at least one category of characters
      alert("Please choose at least one category of characters.");
    }

  }
  while (!includeSpecialChars && !includeNumericChars && !includeLowerCaseChars && !includeUpperCaseChars);

  while (newPassword.length < numCharsForPassword) {
    // Randomly choose next category of characters

    // Get random character from category and append it to new password
  }

  return newPassword;
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
