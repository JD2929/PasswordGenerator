// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}


// retrieve required criteria from the checkbox
function generatePassword() {
  var requiredCriteria = retrieveCriteria();
  return generatePasswordWithTypes(requiredCriteria);
}

function retrieveCriteria() {
  var requiredCriteria = { lower: true, upper: true, special: true, number: true, passwordLength: 10 };
  requiredCriteria.lower = document.getElementById("lowerCase").checked;
  requiredCriteria.upper = document.getElementById("upperCase").checked;
  requiredCriteria.special = document.getElementById("special").checked;
  requiredCriteria.number = document.getElementById("number").checked;
  var passLengthElement = document.getElementById("passLength");
  var tempPasswordLength = passLengthElement.value;
  //force the number to be between 8 and 128
  requiredCriteria.passwordLength = Math.min(128, Math.max(8, tempPasswordLength));
  if ((tempPasswordLength < 8) || (tempPasswordLength > 128)) {
    window.alert("Length out of range, generating length: " + requiredCriteria.passwordLength);
  }

  //updating the UI if the user typed something outside of those values
  passLengthElement.value = requiredCriteria.passwordLength;
  return requiredCriteria;
}

//generate the password using the gathered criteria
function generatePasswordWithTypes(requiredCriteria) {
  
  var accumulatedPassword = "";
  var lowerPossible = "abcdefghijklmnopqrstuvwxyz";
  var upperPossible = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  var specialPossible = "!@#$%^&*";
  var numberPossible = "0123456789";
  var totalPossible = "";

//in the "if" statements if a character set is included it also required and added to the front of the password as the possible character sets are accumulated 

  if (requiredCriteria.lower) {
    totalPossible = totalPossible.concat(lowerPossible);
    var characterToAdd = lowerPossible.charAt(Math.floor(Math.random() * lowerPossible.length));
    accumulatedPassword = accumulatedPassword.concat(characterToAdd);

  }
  if (document.getElementById("upperCase").checked) {
    totalPossible = totalPossible.concat(upperPossible);
    var characterToAdd = upperPossible.charAt(Math.floor(Math.random() * upperPossible.length));
    accumulatedPassword = accumulatedPassword.concat(characterToAdd);
  }
  if (document.getElementById("special").checked) {
    totalPossible = totalPossible.concat(specialPossible);
    var characterToAdd = specialPossible.charAt(Math.floor(Math.random() * specialPossible.length));
    accumulatedPassword = accumulatedPassword.concat(characterToAdd);
  }
  if (document.getElementById("number").checked) {
    totalPossible = totalPossible.concat(numberPossible);
    var characterToAdd = numberPossible.charAt(Math.floor(Math.random() * numberPossible.length));
    accumulatedPassword = accumulatedPassword.concat(characterToAdd);
  }

  //determining the length of password already generated 
  var startingLength = accumulatedPassword.length;

  //Loop to generate the remaining required length of password
  for (var i = startingLength; i < requiredCriteria.passwordLength; i++) {

    var characterToAdd = totalPossible.charAt(Math.floor(Math.random() * totalPossible.length));
    accumulatedPassword = accumulatedPassword.concat(characterToAdd);

  }

  return accumulatedPassword;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
