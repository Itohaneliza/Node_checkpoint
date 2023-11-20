// password-generator.js
const generatePassword = require('generate-password');

// Create a function to generate random passwords
function generateRandomPassword() {
    const password = generatePassword.generate({
        length: 12, // You can adjust the password length as needed
        numbers: true,
        symbols: true,
        uppercase: true,
        excludeSimilarCharacters: true,
    });

    console.log('Random Password:', password);
}

generateRandomPassword();
