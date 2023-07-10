const axios = require('axios');
const mapArrToString = require('../mapArrToStrings/mapArrToStrings');


const getData = async () => {
    const res = await axios.get('https://jsonplaceholder.typicode.com/users')
    const Ids = res.data.map(user => user.id);

    return mapArrToString(IDs);
};

module.exports = getData;
