'use strict';

const secretkey = 'NeverShareYourSecret';

// bring your own validation function
async function validate(decoded, request, h) {

    const people = { // our "users database"
        1: {
            id: 1,
            name: 'Jen Jones'
        }
    };
    // do your checks to see if the person is valid
    if (!people[decoded.id]) {
        return { isValid: false };
    }
    else {
        return { isValid: true };
    }
};

module.exports = {
    validate,
    secretkey
};