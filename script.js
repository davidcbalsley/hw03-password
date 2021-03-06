// Assignment Code
var generateBtn = document.querySelector("#generate");
var copyBtn = document.querySelector("#copy-to-clipboard");

// Get a random integer between 0 and a given value
function getRandomInt(maxValue) {
  return Math.floor(Math.random() * maxValue);
}

// Get a randomly chosen character for a given string
function getRandomChar(inputString) {
  var valueIndex = 0;   // Randomly generated index into string

  // Get a random index into the string
  valueIndex = getRandomInt(inputString.length - 1);

  return inputString[valueIndex];
}

function generatePassword() {
  var numCharsForPassword = 0;                // Number of characters in the password
  var newPassword = "";                       // The new password that we are creating
  var numSelectedCharCategories = 0;          // The number of categories of characters the user has selected
  var includeCurrentCharCategory = false;     // Whether the user has elected to include the current category of characters
  var indicesForSelectedCharCategories = [];  // The indices in 'charsForPassword' for the categories that the user has selected
  var randomCharIndex = 0;                    // Randomly generated index into indicesForSelectedCharCategories 
  var nextCharForPassword = "";               // The next char to append to the end of the password

  // Categories of characters and their descriptors
  var charsForPassword = [
  {
    descriptor: "special characters",
    values: "!#$%&()*+-./:;?@~"
  },
  {
    descriptor: "numbers",
    values: "0123456789"
  },
  {
    descriptor: "lowercase letters",
    values: "abcdefghijklmnopqrstuvwxyz"
  },
  {
    descriptor: "uppercase letters",
    values: "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
  }
];
  
  // Prompt the user to enter the number of characters for the password
  do {
    numCharsForPassword = prompt("Please enter the number of characters for your password. Please note that the number of characters must be between 8 and 128.");

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
    for (var i = 0; i < charsForPassword.length; i++) {
      includeCurrentCharCategory = confirm("Click OK to confirm including " + charsForPassword[i].descriptor + ".");
      
      if (includeCurrentCharCategory) {
        indicesForSelectedCharCategories.push(i);
        numSelectedCharCategories++;
      }
    }

    // If user has not selected a category of characters, show an alert
    if (numSelectedCharCategories === 0) {
      alert("Please choose at least one category of characters.");
    }
  }
  while (numSelectedCharCategories === 0);

  while (newPassword.length < numCharsForPassword) {
    // Randomly choose the next category of characters
    randomCharIndex = indicesForSelectedCharCategories[getRandomInt(numSelectedCharCategories)];

    // Get random character from category and append it to new password
    nextCharForPassword = getRandomChar(charsForPassword[randomCharIndex].values);
    newPassword += nextCharForPassword;
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
  // I adapted this code from https://www.w3schools.com/howto/howto_js_copy_clipboard.asp

  // Get the text field
  var passwordEl = document.querySelector("#password");

  // Select the contents of the text field
  passwordEl.select();
  passwordEl.setSelectionRange(0, 99999);

  // Copy the text inside the text field to the clipboard
  document.execCommand("copy");
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

// BONUS EVENT LISTENER
copyBtn.addEventListener("click", copyToClipboard);
