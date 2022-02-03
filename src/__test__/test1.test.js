const request = require('supertest');

const router=require('../indexTest')
jest.setTimeout(20000);

describe('login Post API', () => {
  test('should test the login api', async() => {
    const response = await request(router).post('/users/login')
    .send({
        email: 'saq321@gmail.com',
        password: 'saqyyy6566'
    });
  //console.log(response.body);
    expect(response.statusCode).toBe(200);

  });
  
});

describe('Getting details API', () => {
  test('should get user details given an ID', async() => {
    const response = await request(router).get('/users/61fb86c8d0e9397634189806');
    expect(response.body).toEqual({
      "userId": "61fb86c8d0e9397634189806",
      "name": "Saqheeb",
      "phone": 9075556208,
      "reward_points": 0,
      });
  });

  // test('should send 400 status code given wrong credential ', async() => {
  //   const response = await request(router).get('/users/61fb86c8d0e9397634189887');
  //   console.log(response.statusCode);
  //   expect(response.status).toEqual(400);
  // });
  
})

describe('Signup New User', () => {
  test('should get user details given an ID', async() => {
      const data={
          name: "Tarun",
          mobile_no: 9701165820,
          email: "tarun@gmail.com",
          password: "tarun146pad"
      }

    const response = await request(router).post('/users/signup').send(data)
    expect(response.status).toEqual(200)

  
  })


})

describe('Patch User API',()=>{
  test("should update the user name",async ()=>{

      
      const data ={
          name : "Tarun",
          mobile_no : 9705621189
      }
      
      const response = await request(router).patch("/users/61fb950ad122e7d134d70163").send(data)

      expect(response.statusCode).toEqual(200)

  })
})

describe('get details of a particular user', () => {
  test('should get user details given an ID', async () => {
    const response = await request(router).get('/users/61fb86c8d0e9397634189806');
    expect(response.body).toEqual({
      "userId": "61fb86c8d0e9397634189806",
      "name": "Saqheeb",
      "phone": 9075556208,
      "reward_points": 0,
    });
  });

})
