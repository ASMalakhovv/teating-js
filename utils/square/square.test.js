const square = require('./square');

describe('square', () => {
    test('Валидное значение', () => {
        expect(square(2)).toBe(4)
    });
    test('Невалидное значение', () => {
        expect(square(2)).not.toBe('4')
    });
});

describe('вызов встроенного модуля', () => {
    beforeEach(() => {

    });
    beforeAll(() => {

    })
    test('Корректный вызов встроенного модуля', () => {
       const spyMathPow = jest.spyOn(Math, 'pow');
       square(2);
       expect(spyMathPow).toBeCalledTimes(1);
    });
    test('Корректный вызов встроенного модуля', () => {
        const spyMathPow = jest.spyOn(Math, 'pow');
        square(1);
        expect(spyMathPow).toBeCalledTimes(0);
    });

    afterEach(() => {
        jest.clearAllMocks()
    })
});

