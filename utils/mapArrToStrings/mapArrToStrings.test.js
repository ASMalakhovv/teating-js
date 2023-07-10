const mapArrToStringsTest = require('./mapArrToStrings');

describe('mapArrToStrings', () => {
    test('Валидное значение', () => {
        expect(mapArrToStringsTest([1, 2, 3])).toEqual(['1', '2', '3'])
    });
    test('Некорректное значение', () => {
        expect(mapArrToStringsTest([1, 2, 3, undefined, null, {}])).toEqual(['1', '2', '3'])
    });
    test('Пустой массив', () => {
        expect(mapArrToStringsTest([])).toEqual([])
    });
    test('Не больше входных данных', () => {
        expect(mapArrToStringsTest([1, 2, 3])).not.toEqual(['1', '2', '3', '4'])
    });
    test('Не меньше входных данных', () => {
        expect(mapArrToStringsTest([1, 2, 3])).not.toEqual(['1', '2'])
    })
});
