const assert = require('assert');
const User = require('../src/user');

describe('Reads users from the database', () => {
    var piet;

    beforeEach((done) => {
       piet = new User({
           name: 'Piet'
       });
       piet.save()
           .then(() => done());
    });

    it('find all users with a name', (done) => {
        User.find({ name: 'Piet' })
            .then((users) => {
                assert(users[0]._id.toString() === piet._id.toString());
                done();
            });
    });

    it('find a user with a certain id', (done) => {
        User.findOne({ _id: piet._id })
            .then((user) => {
                assert(user.name === 'Piet');
                done();
            });
    });
});