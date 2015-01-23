var assert = require('assert');
var container = require('../lib/container');

describe('container', function() {
    describe('#init()', function() {
        it('should initialize without error', function(done) {

            // manager service load
            container.init('', '', function(err) {


                done();
            });
        });


    });

    describe('#log()', function() {
        it('should log without error', function(done) {

            container.log('test');

            done();
        });
    });

    describe('#close()', function() {
        it('should close without error', function(done) {

            container.close();

            done();
        });
    });

    describe('#getService()', function() {
        it('should getService without error', function(done) {

            container.getService('MANAGER', done);
        });
    });

    describe('#getRouteTable()', function() {
        it('should getRouteTable without error', function(done) {

            assert(container.getRouteTable());

            done();
        });
    });

    describe('#getRouteTableJSON()', function() {
        it('should getRouteTableJSON without error', function(done) {

            assert(container.getRouteTableJSON());

            done();
        });
    });

    describe('#saveRouteTable()', function() {
        it('should saveRouteTable without error', function(done) {

            container.saveRouteTable();

            done();
        });
    });

    describe('#addListener()', function() {
        it('should addListener without error', function(done) {

            container.addListener('test', function(req, res, next){next();});

            done();
        });
    });

    describe('#broadcast()', function() {
        it('should broadcast without error', function(done) {

            container.broadcast('test', {}, done);
        });
    });
});