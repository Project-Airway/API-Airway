const { TestWatcher } = require('jest')
const User = require('../models/userSchema');
const request = require('supertest')
const router = require('../routes/users')

describe('Post users ',()=>{
    //test new user
    describe('Testing new User...', ()=>{
        test("should respond with a 200 status code", async () => {
        const response = await request(router).post("/signup").send({ 
            name : "saq",
            mobile_no: "7005489719",
            email:"saq@gmail.com",
            password: "asdasafsfbdf32"
        }) 
        expect(response.statusCode).toBe(200)
    })

    //
  })
})