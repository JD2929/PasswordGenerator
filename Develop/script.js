// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

//Create the checkbox for user to input parameters they are looking for



// generate password function
function generatePassword() {
  var requiredCriteria = { lower: true, upper: true, special: true, number: true, passwordLength: 10};

  return generatePasswordWithTypes(requiredCriteria)

}


function generatePasswordWithTypes(requiredCriteria) {
  console.log("start generate")
  var accumulatedPassword = "";
  var lowerPossible = "abcdefghijklmnopqrstuvwxyz";
  var upperPossible = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  var specialPossible = "!@#$%^&*";
  var numberPossible = "0123456789";
  var totalPossible = "";

  if (requiredCriteria.lower) {
    totalPossible = totalPossible.concat(lowerPossible);
    var characterToAdd = lowerPossible.charAt(Math.floor(Math.random() * lowerPossible.length));
    accumulatedPassword = accumulatedPassword.concat(characterToAdd);

  }
  if (requiredCriteria.upper) {
    totalPossible = totalPossible.concat(upperPossible);
    var characterToAdd = upperPossible.charAt(Math.floor(Math.random() * upperPossible.length));
    accumulatedPassword = accumulatedPassword.concat(characterToAdd);
  }
  if (requiredCriteria.special) {
    totalPossible = totalPossible.concat(specialPossible);
    var characterToAdd = specialPossible.charAt(Math.floor(Math.random() * specialPossible.length));
    accumulatedPassword = accumulatedPassword.concat(characterToAdd);
  }
  if (requiredCriteria.number) {
    totalPossible = totalPossible.concat(numberPossible);
    var characterToAdd = numberPossible.charAt(Math.floor(Math.random() * numberPossible.length));
    accumulatedPassword = accumulatedPassword.concat(characterToAdd);
  }
var startingLength = accumulatedPassword.length;
  for (var i = startingLength; i < requiredCriteria.passwordLength; i++) {

    var characterToAdd = totalPossible.charAt(Math.floor(Math.random() * totalPossible.length));
    console.log(`Picked character ${characterToAdd}`);
    accumulatedPassword = accumulatedPassword.concat(characterToAdd);

  }
  console.log(`Generated ${accumulatedPassword}`)
  return accumulatedPassword;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
