const forEach = require('./forEach');

const mockFn = jest.fn(x => x +1);

test('forEach mock function', () => {
    forEach([0, 1], mockFn);

    expect(mockFn.mock.calls).toHaveLength(2);
    expect(mockFn.mock.calls[0][0]).toBe(0);
    expect(mockFn.mock.calls[1][0]).toBe(1);
    expect(mockFn.mock.results[0].value).toBe(1);
})

const myMock = jest.fn();
console.log(myMock())

myMock.mockReturnValueOnce(10).mockReturnValueOnce('x').mockReturnValue(true)
console.log(myMock(), myMock(), myMock());
