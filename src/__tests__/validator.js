const { isValid } = require('../validator');

describe('isValid', () => {
    const validData = {
        "latitude": "52.986375", 
        "user_id": 12, 
        "name": "Christina McArdle", 
        "longitude": "-6.043701"
    };

    const TESTS = {
        'Valid data': {
            input: validData,
            output: true,
        },

        'Invalid latitude type': {
            input: { ...validData, ...{ latitude: "STRING" } },
            output: false,
        },
        'Invalid longitude type': {
            input: { ...validData, ...{ longitude: "STRING" } },
            output: false,
        },

        'Invalid longitude': {
            input: { ...validData, ...{ longitude: "-181" } },
            output: false,
        },
        'Invalid longitude #2': {
            input: { ...validData, ...{ longitude: "188" } },
            output: false,
        },

        'Invalid latitude': {
            input: { ...validData, ...{ latitude: "-91" } },
            output: false,
        },
        'Invalid latitude #2': {
            input: { ...validData, ...{ latitude: "93" } },
            output: false,
        },

        'No user_id': {
            input: { ...validData, ...{ user_id: undefined }, },
            output: false,
        },
        'Wrong user_id type': {
            input: { ...validData, ...{ user_id: "12", }, },
            output: false,
        },

        'No customer name': {
            input: { ...validData, ...{ name: undefined }, },
            output: false,
        },
        'Empty customer name': {
            input: { ...validData, ...{ name: '', }, },
            output: false,
        },

    }

    for (test in TESTS) {
        (function(test) {
            it(test, () => {
                expect(isValid(TESTS[test].input)).toBe(TESTS[test].output);
            });
        })(test);
    }
});
