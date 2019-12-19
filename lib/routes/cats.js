const { Router } = require('express');
const Cat = require('../Modles/Cat');

module.exports = Router()
  .post('/', (req, res, next) => {
    const cat = req.body;
    Cat
      .create(cat)
      .then(cat => res.send(cat))
      .catch(next);
  })
  .get('/ratio/:id', (req, res, next) => {
    // const id = req.params.id;
    Cat
      .getHowCanItClimbATreeScaleVsItsNumberOfTails()
      .then(catWithRatio => res.send(catWithRatio))
      .catch(next);
  })
  .get('/:id', (req, res, next) => {
    const id = req.params.id;
    Cat
      .findById(id)
      .then(cat => res.send(cat))
      .catch(next);
  })
  .patch('/:id', (req, res, next) => {
    const id = req.params.id;
    const obj = req.body;
    Cat
      .findByIdAndUpdate(id, obj, { new : true })
      .then(cat => res.send(cat))
      .catch(next);
  })
  .delete('/:id', (req, res, next) => {
    const id = req.params.id;
    Cat
      .findByIdAndDelete(id)
      .then(cat => {
        console.log('deleted');
        res.send(cat);
      })
      .catch(next);
  });
