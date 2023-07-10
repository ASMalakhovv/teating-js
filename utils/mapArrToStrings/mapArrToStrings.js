const mapArrToStrings = (arr) => {
    return arr
        .filter(element => Number.isInteger(element))
        .map(String)
};

module.exports = mapArrToStrings;
