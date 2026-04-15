function generateStrongPassword(length = 12) {
    const allowedPasswordCharacters =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()_+";

    if (length < 8) {
        throw new Error("Password length must be at least 8 characters.");
    }

    let strongPassword = "";

    while (!isStrongPassword(strongPassword)) {
        strongPassword = Array
            .from(
            { length },
            () => {
        const randomAllowedPasswordCharacterIndex =
        Math.floor(Math.random() * allowedPasswordCharacters.length);
        const randomAllowedPasswordCharacter =
        allowedPasswordCharacters.charAt(randomAllowedPasswordCharacterIndex);
        return randomAllowedPasswordCharacter;
            })
            .join('');
    }

    return strongPassword;
}

// Function to check if a password is strong
function isStrongPassword(password) { 
    if (password.length < 8) { 
        return false; 
    } 
    const isPasswordStrong = /[A-Z]/.test(password) && 
    /[a-z]/.test(password) && 
    /\d/.test(password) && 
    /[!@#$%^&*()_+]/.test(password); 

    return isPasswordStrong; 
}

module.exports = {
    generateStrongPassword,
    isStrongPassword
};
