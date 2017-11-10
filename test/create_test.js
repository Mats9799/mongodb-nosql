const assert = require('assert');
const User = require('../src/user');

describe('Creating records', () => {
    it('saves a user', (done) => {
        const piet = new User({
           name: 'Piet'
        });

        piet.save()
            .then(() => {
                assert(!piet.isNew);
                done();
            });
    });
});