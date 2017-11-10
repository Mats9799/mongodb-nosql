const assert = require('assert');
const User = require('../src/user');

describe('Deleting a user', () => {
    var piet;

    beforeEach((done) => {
        piet = new User({ name: 'Piet' });
        piet.save()
            .then(() => done());
    });

    it ('model instance remove', (done) => {
        piet.remove()
            .then(() => User.findOne({name: 'Piet'}))
            .then((user) => {
                assert(user === null);
                done();
            });
    });

    it ('class method remove', (done) => {
        User.remove({name: 'Piet'})
            .then(() => User.findOne({name: 'Piet'}))
            .then((user) => {
                assert(user === null);
                done();
            });
    });

    it ('class method findOneAndRemove', (done) => {
        User.findOneAndRemove({name: 'Piet'})
            .then(() => User.findOne({name: 'Piet'}))
            .then((user) => {
                assert(user === null);
                done();
            });
    });

    it ('class method findByIdAndRemove', (done) => {
        User.findByIdAndRemove(piet._id)
            .then(() => User.findOne({name: 'Piet'}))
            .then((user) => {
                assert(user === null);
                done();
            });
    });
});