const delay = require('./delay');

test('delay', async () => {
    const res = await delay(() => 5 + 5, 1000);

    expect(res).toBe(10);
})
