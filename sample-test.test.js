const { generateText, generateNumber, validateInput } = require('./sample-test');

test('should output name and age', () => {
    const text = generateText('Max', 29);
    expect(text).toBe('Max (29 years old)');
});

test('should output num1 and num2', () => {
    const text = generateNumber(5, 10);
    expect(text).toBe('5 (10 years old)');
});

test('should output right validation', () => {
    const text = validateInput("ara-ara","ada isi" ,1);
    expect(text).toBe(true);
});