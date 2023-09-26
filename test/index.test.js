// sum --> test  --> index.js

const myFun=require("../index");
const mochaAssert =require("assert");


const expect =require("chai").expect
const assert =require("chai").assert
const should =require("chai").should()


describe("test sum function" ,function(){
    // test case
    it("test that take 2 positive numbers",function(){
      mochaAssert.equal(myFun.sum(2,2),4)  
    })

    it("test that take 2 negative  numbers",function(){
        mochaAssert.equal(myFun.sum(-2,-2),-4)  
      })
})


describe("test sum function using chai" ,function(){
    // test case
    it("test that take 2 positive numbers using expect",function(){
      expect(myFun.sum(2,2)).to.be.equal(4)  
    })

    it("test that take 2 positive numbers using assert",function(){
        assert.equal(myFun.sum(2,2),(4))  
      })

      it("test that take 2 positive numbers using expect",function(){
        (myFun.sum(2,2)).should.equal(4)  
      })
})



describe("test convert to array  function using chai" ,function(){
    // test case
    it("test that take 2 positive numbers using expect",function(){
      expect(myFun.sum(2,2)).to.be.equal(4)  
    })

    it("test that return ",function(){
        //   assert.is
      })

      it("test that take 2 positive numbers using expect",function(){
        (myFun.sum(2,2)).should.equal(4)  
      })
})