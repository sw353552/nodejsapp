const app = require('../app.js');
var assert = require('assert');
const chai =  require('chai');
const chaiHttp = require('chai-http');
const expect = chai.expect;
chai.use(chaiHttp);
//Test case when no parameters passed
describe('Product of two numbers',function(){
    it('when no parameters are passed',function(done) {
        chai.request(app).get(`/productvalue`).end(function(err,res){
                expect(res).to.have.status(400);
                expect(res.text).to.equal(`Route not found`);
                done();
                })
        })
        // Test cases when two numbers are passed
    it('product of 2 numbers passed in arguments',function(done) {
        chai.request(app).get(`/productvalue/2/2`).end(function(err,res){
                expect(res).to.have.status(200);
                expect(res.text).to.equal(`4`);
                done();
            })
        })
})

describe('Writing content into the local file',function(){
// Test cases for writing content to the local file
        it('Writing content to the local file',function(done) {
          chai.request(app).get('/writeFile/sampletext').end(function(err,res){
              expect(res.status).to.equal(200);
              expect(res.text).to.equal(`sampletext`);
              done();
           })
      })
});

describe('finding first non-repetitive characters',function(){
//  Test case for finding first repetitve character
    it('first non-repetitive character',function(done) {
        chai.request(app).get(`/string/kajhja`).end(function(err,res){
                expect(res.status).to.equal(200);
                expect(res.text).to.equal(`k`);
                done();
                })
        })
});
