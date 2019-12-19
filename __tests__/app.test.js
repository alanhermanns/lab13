require('dotenv').config();

const request = require('supertest');
const app = require('../lib/app');
const connect = require('../lib/utils/connect');
const mongoose = require('mongoose');
const Cat = require('../lib/Modles/Cat');

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

  it('should post a cat', () => {
    return request(app)
      .post('/api/v1/cats')
      .send({
        broadGrin: true,
        soManyTeethInItsMouth: true,
        canScaleATreeSoQuicklyScale: 45,
        isToHeavy: true,
        numberOfTails: 22,
        slySinisterAndSleek: true,
        weightPolitelyDescribed: 'Some',
        hasAnOwnerOr2: true
      })
      .then(res => {
        expect(res.body).toEqual({ 
          __v: 0,
          _id: expect.any(String),
          broadGrin: true,
          soManyTeethInItsMouth: true,
          canScaleATreeSoQuicklyScale: 45,
          isToHeavy: true,
          numberOfTails: 22,
          slySinisterAndSleek: true,
          weightPolitelyDescribed: 'Some',
          hasAnOwnerOr2: true 
        });
      });
  });

  it('shold get a cat by id', async() => {
    const cat = await Cat
      .create({
        broadGrin: true,
        soManyTeethInItsMouth: true,
        canScaleATreeSoQuicklyScale: 45,
        isToHeavy: true,
        numberOfTails: 22,
        slySinisterAndSleek: true,
        weightPolitelyDescribed: 'Some',
        hasAnOwnerOr2: true
      });
    return request(app)
      .get(`/api/v1/cats/${cat._id}`)
      .then(res =>
        expect(res.body).toEqual({
          __v: 0,
          _id: expect.any(String),
          broadGrin: true,
          soManyTeethInItsMouth: true,
          canScaleATreeSoQuicklyScale: 45,
          isToHeavy: true,
          numberOfTails: 22,
          slySinisterAndSleek: true,
          weightPolitelyDescribed: 'Some',
          hasAnOwnerOr2: true
        }));
  });
  it('shold get a cats tree to tail ratio', async() => {
    const cat = await Cat
      .create({
        broadGrin: true,
        soManyTeethInItsMouth: true,
        canScaleATreeSoQuicklyScale: 45,
        isToHeavy: true,
        numberOfTails: 22,
        slySinisterAndSleek: true,
        weightPolitelyDescribed: 'Some',
        hasAnOwnerOr2: true
      });
    return request(app)
      .get(`/api/v1/cats/ratio/${cat._id}`)
      .then(res =>
        expect(res.body).toContainEqual({
          __v: 0,
          _id: expect.any(String),
          broadGrin: true,
          canScaleATreeSoQuicklyScale: 45,
          hasAnOwnerOr2: true,
          isToHeavy: true,
          numberOfTails: 22,
          ratioTreeScalingToTails: 2.0454545454545454,
          slySinisterAndSleek: true,
          soManyTeethInItsMouth: true,
          weightPolitelyDescribed: 'Some' }));
  });
  it('shold update a cat by id', async() => {
    const cat = await Cat
      .create({
        broadGrin: true,
        soManyTeethInItsMouth: true,
        canScaleATreeSoQuicklyScale: 45,
        isToHeavy: true,
        numberOfTails: 22,
        slySinisterAndSleek: true,
        weightPolitelyDescribed: 'Some',
        hasAnOwnerOr2: true
      });
    return request(app)
      .patch(`/api/v1/cats/${cat._id}`)
      .send({ broadGrin : false })
      .then(res =>
        expect(res.body).toEqual({
          __v: 0,
          _id: expect.any(String),
          broadGrin: false,
          soManyTeethInItsMouth: true,
          canScaleATreeSoQuicklyScale: 45,
          isToHeavy: true,
          numberOfTails: 22,
          slySinisterAndSleek: true,
          weightPolitelyDescribed: 'Some',
          hasAnOwnerOr2: true
        }));
  });
  it('shold delete a cat by id', async() => {
    const cat = await Cat
      .create({
        broadGrin: true,
        soManyTeethInItsMouth: true,
        canScaleATreeSoQuicklyScale: 45,
        isToHeavy: true,
        numberOfTails: 22,
        slySinisterAndSleek: true,
        weightPolitelyDescribed: 'Some',
        hasAnOwnerOr2: true
      });
    return request(app)
      .delete(`/api/v1/cats/${cat._id}`)
      .then(res =>
        expect(res.body).toEqual({
          __v: 0,
          _id: expect.any(String),
          broadGrin: true,
          soManyTeethInItsMouth: true,
          canScaleATreeSoQuicklyScale: 45,
          isToHeavy: true,
          numberOfTails: 22,
          slySinisterAndSleek: true,
          weightPolitelyDescribed: 'Some',
          hasAnOwnerOr2: true,
        }));
  });
});
