const axios = require('axios');
const Users = require('./moduleExample');

jest.mock('axios');

test('mock module axios', async () => {
    // data
    const user = {name: 'Olga', age: 18};
    const res = { data: user };
    axios.get.mockResolvedValue(res);

    // action
    const resUsersAll = await Users.all()

    // expect
    expect(resUsersAll).toEqual(user);
});
