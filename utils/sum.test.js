const sum = require('./sum');

test('корректные данные', () => {
    expect(sum(1, 2)).toBe(3);
})
