/**
 * Validates customer data
 * @param {Object} data
 * @returns {Boolean}
 */
const isValid = (data) => {
    return !Number.isNaN(parseInt(data.latitude, 10)) && 
    !Number.isNaN(parseInt(data.longitude, 10)) &&
    data.latitude >= -90 && data.latitude <= 90 &&
    data.longitude >= -180 && data.longitude <= 180 &&
    typeof data.user_id === 'number' &&
    typeof data.name === 'string' &&
    data.name.length > 0;
};

module.exports = {
    isValid
};
