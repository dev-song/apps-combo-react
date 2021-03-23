const { sum, stringReverse } = require('../Sample');

describe('Test', () => {
  test('adds 3 + 10 equals 13', () => {
    expect(sum(3, 10)).toBe(13);
  });

  test("reverse text 'hello' is 'olleh'", () => {
    expect(stringReverse('hello')).toBe('olleh');
  });
});
