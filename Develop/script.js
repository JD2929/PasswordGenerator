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
  var requiredCriteria = { lower: true, upper: false, special: false, number: false };

return  generatePasswordWithTypes(requiredCriteria)

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
    totalPossible = totalPossible.concat(lowerPossible)
  }
  if (requiredCriteria.upper) {
    totalPossible = totalPossible.concat(upperPossible)
  }
  if (requiredCriteria.special) {
    totalPossible = totalPossible.concat(specialPossible);
  }
  if (requiredCriteria.number) {
    totalPossible = totalPossible.concat(numberPossible);
  }
  for (var i = 0; i < 8; i++) {

    var characterToAdd = totalPossible.charAt(Math.floor(Math.random() * totalPossible.length));
    console.log(`Picked character ${characterToAdd}`);
    accumulatedPassword = accumulatedPassword.concat(characterToAdd);

  }
  console.log(`Generated ${accumulatedPassword}`)
  return accumulatedPassword;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
