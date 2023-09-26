// sum --> test  --> index.js

const myFun = require("../index");
const mochaAssert = require("assert");


const expect = require("chai").expect
const assert = require("chai").assert
const should = require("chai").should()


describe("test sum function", function () {
    // test case

    it('test that the function takes a string  it will return a string', function () {
        assert.isString(myFun.capitalizeText("HELLO"))


    });

    it("test that the function takes a string and return it after capitalize it", function () {
        expect(myFun.capitalizeText("iti")).to.be.equal("ITI")

    })

    it('should throw a TypeError if parameter is not a string', () => {
        assert.throws(() => myFun.capitalizeText(12), TypeError);
    });
    it('should not return "hello" if input is "iti"', () => {

        assert.notEqual(myFun.capitalizeText("iti"), 'HELLO');
    })

});





describe("test createArray function", function () {

    let initialVal = 1;

    beforeEach(() => {
        initialVal++;

    });

    it.skip('shows required validation texts after clicking on Next link on empty form', function () {


    it('test that the return value of type array', function () {
        expect(myFun.createArray(5)).to.be.an("array")
    });

    it('should return an array of length 3 when passed 3', () => {
        expect(myFun.createArray(3)).to.be.an("array").and.to.have.lengthOf(3).and.to.have.include(1)
    });

    it('should return an array of length 5 when passed 5', function (done) {
        setTimeout(function () {
            done();
            expect(myFun.createArray(5)).to.have.lengthOf(5)

        }, 500);

    });
    });

});

