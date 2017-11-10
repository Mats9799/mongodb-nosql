const assert = require('assert');
const User = require('../src/user');

describe('Updating a user record', () => {
    var piet;

    beforeEach((done) => {
        piet = new User({ name: 'Piet' });
        piet.save()
            .then(() => done());
    });

    function assertName(operation, done) {
        operation
            .then(() => User.find({}))
            .then((users) => {
                assert(users.length === 1);
                assert(users[0].name === 'Klaas');
                done();
            });
    }

    it('instance type using set n\' save', (done) => {
        piet.set('name', 'Klaas');
        assertName(piet.save(), done);
    });

    it('model instance can update', (done) => {
        assertName(piet.update({name: 'Klaas'}), done);
    });

    it('model class can update', (done) => {
        assertName(User.update({name: 'Piet'}, {name: 'Klaas'}), done);
    });

    it('model class can update one record', (done) => {
        assertName(User.findOneAndUpdate({name: 'Piet'}, {name: 'Klaas'}), done);
    });

    it('model class can find a record by id and update', (done) => {
        assertName(User.findByIdAndUpdate(piet._id, {name: 'Klaas'}), done);
    });
});