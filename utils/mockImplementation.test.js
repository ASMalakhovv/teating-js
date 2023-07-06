const mockImplementation = require('./mockImplementation');

const myMock = jest.fn(mockImplementation)

console.log(myMock())

myMock.mockImplementation(() => 42)

console.log(myMock())

test('mockImplementation', () => {
   expect(true).toBeTruthy()
});

