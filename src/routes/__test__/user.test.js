const request = require('supertest');

const router=require('../users')
jest.setTimeout(20000);


// describe("signup.....",()=>{
//     it("Should be able to add new login name....",async ()=>{
//         const data={
//         name: "Saqheeb",
//         mobile_no: "9075556208",
//         email: "saq321@gmail.com",
//         password: "saqyyy6566"
//         }

//         const res = await request(router).post("/signup").send(data)

//         expect(res.body.data.name).toEqual("Saqheeb")
//         expect(res.body.data.mobile_no).toEqual("9075556208")
//         expect(res.body.data.email).toEqual("saq321@gmail.com")
//         expect(res.body.data.password).toEqual("saqyyy6566")
//     })
// })

describe("login.....",()=>{
    it("should be able to send email of ",async ()=>{
        const res = await request(router).get("/login").send({ email: "saq7@gmail.com"})

        expect(res.body.email).toEqual("saq7@gmail.com")
    })
})
