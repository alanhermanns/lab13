const jwt = require('jsonwebtoken');

const verifyToken = (req, res, next) => {
  try {
    jwt.verify('session', process.env.APP_SECRET);
    next();
  }
  catch(err) {  
    next(err);
  }
}; 

module.exports = verifyToken;
