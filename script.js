// Assignment Code
var generateBtn = document.querySelector("#generate");

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

function getRandomInt(maxValue) {
  return Math.floor(Math.random() * maxValue);
}

function getRandomChar(charTypeIndex) {
  var valueIndex = 0;   // Index into the values array for the current object

  // Get a random index into the values array
  valueIndex = getRandomInt(charsForPassword[charTypeIndex].values.length - 1);
  // console.log("charTypeIndex: " + charTypeIndex); // debug
  // console.log("valueIndex: " + valueIndex); // debug

  return charsForPassword[charTypeIndex].values[valueIndex];
}

function generatePassword() {
  var numCharsForPassword = 0;                // Number of characters in the password
  var newPassword = "";                       // The new password that we are creating
  var numSelectedCharCategories = 0;          // The number of categories of characters the user has selected
  var includeCurrentCharCategory = false;     // Whether the user has elected to include the current category of characters
  var indicesForSelectedCharCategories = [];  // The indices in 'charsForPassword' for the categories that the user has selected
  var randomCharIndex = 0;                    // Randomly generated index into indicesForSelectedCharCategories 
  var nextCharForPassword = "";               // The next char to append to the end of the password
  
  // Prompt the user to enter the number of characters for the password
  do {
    numCharsForPassword = prompt("Please enter the number of characters for your password. Please note that the number of characters must be between 8 and 128.");
    // console.log("Num chars: " + numCharsForPassword); // Debug

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
    // console.log("do while for picking types of chars"); // debug

    for (var i = 0; i < charsForPassword.length; i++) {
      // console.log("for loop for confirming categories"); // debug
      includeCurrentCharCategory = confirm("Click OK to confirm including " + charsForPassword[i].descriptor + ".");
      
      if (includeCurrentCharCategory) {
        indicesForSelectedCharCategories.push(i);
        // console.log("indicesForSelectedCharCategories: " + indicesForSelectedCharCategories); // debug
        numSelectedCharCategories++;
        // console.log("numSelectedCharCategories: " + numSelectedCharCategories); // debug
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
    // console.log("randomCharIndex: " + randomCharIndex); // debug

    // Get random character from category and append it to new password
    nextCharForPassword = getRandomChar(randomCharIndex);
    // console.log("nextCharForPassword: " + nextCharForPassword); // debug
    newPassword += nextCharForPassword;
    // console.log("newPassword: " + newPassword); // debug
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
