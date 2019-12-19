const { Router } = require('express');
const User = require('../Modles/User');

module.exports = Router()
  .post('/auth/signup', (req, res, next) => {
    const user = req.body;
    User
      .create(user)
      .then(user => res.send(user))
      .catch(next);
  })
  .post('/auth/login', (req, res, next) => {
    const user = req.body;
    User
      .validate(user)
      .then(user => res.send(user))
      .catch(next);
  });
