const request = require('supertest');

const router=require('../indexTest')
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

// describe("login.....",()=>{
//     test("should be able to send email of ",async ()=>{
//         const res = await request(router).get("/login").send({ email: "saq7@gmail.com"})

//         expect(res.body.email).toEqual("saq7@gmail.com")
//     })
// })

describe('login function 2', () => {
    test('should test the login api', async() => {
      const response = await request(router).post('/users/login')
      .send({
          email: 'abc@abc.com',
          password: 'abc456'
      });
      console.log(response.body);
      expect(response.statusCode).toBe(400);

    });
    
});

describe('get details of a particular user', () => {
    test('should get user details given an ID', async() => {
      const response = await request(router).get('/users/61ea74015f95d2cdcbeebdf4');
      expect(response.body).toEqual({
        "userId": "61ea74015f95d2cdcbeebdf4",
        "name": "Akash",
        "phone": 1234567890,
        "reward_points": 120,
        });
    });
    
})
