// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Function to generate a random password
function generatePassword() {
  // Prompt for password length
  var passwordLength = prompt("Enter the desired password length:");

  // Validate password length
  if (!passwordLength || passwordLength.length === 0 || passwordLength < 1) {
    alert("Invalid password length. Please enter a valid positive number.");
    return "";
  }

  // Convert passwordLength to a number
  passwordLength = parseInt(passwordLength);

  // Generate password
  var password = "";
  var allChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()-_=+[]{}|;:'\",.<>/?";

  for (var i = 0; i < passwordLength; i++) {
    var randomIndex = Math.floor(Math.random() * allChars.length);
    password += allChars.charAt(randomIndex);
  }

  return password;
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  // Display the generated password
  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);