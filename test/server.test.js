//var app = require('../app');
const superTest = require('supertest');
const expect = require('expect');
const rewire = require('rewire');

var app = rewire('../app'); // loads app in similar fashion as require does and also adds __set__ and __get__

describe('dummyApiForTest', ()=>{
    var connectDataBase = expect.createSpy();
    app.__set__('connectDataBase', connectDataBase);

    it('should test return dummy api response', (done)=>{
        superTest(app).get('/dummyApiForTest')
            .expect(200)
            /*.expect((res)=>{
                expect(connectDataBase).toHaveBeenCalledWith("data", "apple");
            })*/
            .expect((res) => {
                expect(res.body).toInclude({
                    name: 'Soumitra Mishra'
                })
            }).end(done);
        //expect(connectDataBase).toHaveBeenCalledWith("data", "apple");
    });
});
var connectDataBase = expect.createSpy();
describe('home page test', () => {
    it('should call spy properly', () => {
       var spy = expect.createSpy();
       spy();
       expect(spy).toHaveBeenCalled();
    });
    it('should call spy with proper arguments', () => {
        var spy = expect.createSpy();
        spy('soumitra', 'mishra');
        expect(spy).toHaveBeenCalledWith('soumitra', 'mishra');
    });
    it('home page should return valid response', (done) => {
        superTest(app).get('/')
            .expect(200)
            .end(done);
    })
});

/* please write all tests with .test.js extension, npm run test-watch will watch on test changes*/