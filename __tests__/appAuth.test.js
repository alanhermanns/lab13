require('dotenv').config();
const mongoose = require('mongoose');
const request = require('supertest');
const app = require('../lib/app');
const connect = require('../lib/utils/connect');
const User = require('../lib/Modles/User');

describe('app routes', () => {
  beforeAll(() => {
    connect();
  });
  beforeEach(() => {
    return mongoose.connection.dropDatabase();
  });

  afterAll(() => {
    return mongoose.connection.close();
  });

  it('should signup a user', () => {
    return request(app)
      .post('/api/v1/cats/auth/signup')
      .send({
        email: 'i@me.com',
        password: '12345'
      })
      .then(res => {
        expect(res.body).toEqual({ 
          __v: 0,
          _id: expect.any(String),
          email: 'i@me.com'
        });
      });
  });
  it('should fail an unfound user', () => {
    return request(app)
      .post('/api/v1/cats/auth/login')
      .send({
        email: 'i@me.com',
        password: '12345'
      })
      .then(res => {
        expect(res.body).toEqual({ 
          message: 'Incorrect Password/Email',
          status: 401,
        });
      });
  });
  it('should login a user', async() => {
    await User
      .create({
        email: 'i@me.com',
        password: '12345'   
      });
    return request(app)
      .post('/api/v1/cats/auth/login')
      .send({
        email: 'i@me.com',
        password: '12345' 
      })
      .then(res => {
        expect(res.body).toEqual({ 
          __v: 0,
          _id: expect.any(String),
          email: 'i@me.com',
        });
      });
  });
});
