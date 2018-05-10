const { EARTH_RADIUS } = require('./config');

/**
 * Converts degrees to radians
 * @param {Number} angle Angle in degrees
 * @returns {Number} Angle in rad
 */
const toRadians = (angle) => angle * (Math.PI / 180);

/**
 * Calculates distance between two points 
 * @param {Number} lat1 Point1 latitude
 * @param {Number} lon1 Pont1 longitude
 * @param {Number} lat2 Point2 latitude
 * @param {Number} lon2 Point2 longitude
 * @returns {Number} distance in meters
 */
const calculateDistance = (lat1, lon1, lat2, lon2) => {
    var φ1 = toRadians(lat1);
    var φ2 = toRadians(lat2);
    var Δλ = toRadians(lon2 - lon1);

    var delta = Math.acos(
        Math.sin(φ1) * Math.sin(φ2) +
        Math.cos(φ1) * Math.cos(φ2) * Math.cos(Δλ)
    );

    return delta * EARTH_RADIUS;
};

module.exports = {
    calculateDistance,
    toRadians,
};
