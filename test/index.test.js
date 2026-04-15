const {generateStrongPassword, isStrongPassword} = require('../index.js');

test("should generate a password with the given length", () => {
    const password = generateStrongPassword(16);
    expect(password).toHaveLength(16);
});

test("should return true for a strong password", () => {
    const password = generateStrongPassword(16);
    expect(isStrongPassword(password)).toBe(true);
});