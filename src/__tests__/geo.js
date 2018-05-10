const { toRadians, calculateDistance } = require('../geo');

describe('toRadians', () => {
    it('0 deg should be 0 rad', () => {
        expect(toRadians(0)).toBe(0);
    });

    it('180 deg should be π rad', () => {
        expect(toRadians(180)).toBe(Math.PI);
    });

    it('90 deg should be π/2 rad', () => {
        expect(toRadians(90)).toBe(Math.PI / 2);
    });

    it('-180 deg should be -π rad', () => {
        expect(toRadians(-180)).toBe(-Math.PI);
    });
});

describe('calculateDistance', () => {
    it('Zero distance', () => {
        expect(Math.round(calculateDistance(10, 20, 10, 20))).toBe(0);
    });

    it('Distance in one hemisphere. Moscow to Paris ~ 2486km', () => {
        expect(Math.round(calculateDistance(-55.7558, -37.6173, -48.8566, -2.3522) / 1000)).toBe(2486);
    });

    it('Reversed distance. Paris to Moscow ~ 2486km', () => {
        expect(Math.round(calculateDistance(-48.8566, -2.3522, -55.7558, -37.6173) / 1000)).toBe(2486);
    });

    it('Distance in different hemispheres. Moscow to Cape Town ~ 10137km', () => {
        expect(Math.round(calculateDistance(-55.7558, -37.6173, 33.9249, -18.4241) / 1000)).toBe(10137);
    });
});
