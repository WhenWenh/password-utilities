const {generateStrongPassword, isStrongPassword} = require('../index.js');

test("should generate a password with the given length", () => {
    const password = generateStrongPassword(16);
    expect(password).toHaveLength(16);
});

test("should return true for a strong password", () => {
    const password = generateStrongPassword(16);
    expect(isStrongPassword(password)).toBe(true);
});

test("should retry password generation until the password is strong", () => {
    const randomSpy = jest.spyOn(Math, 'random');
    const indexToRandomValue = (index) => index / 74;

    [0, 0, 0, 0, 0, 0, 0, 0, 0, 27, 28, 29, 30, 31, 53, 62]
        .forEach((index) => randomSpy.mockReturnValueOnce(indexToRandomValue(index)));

    const password = generateStrongPassword(8);

    expect(password).toBe("Abcdef1!");
    expect(isStrongPassword(password)).toBe(true);
    expect(randomSpy).toHaveBeenCalledTimes(16);

    randomSpy.mockRestore();
});
