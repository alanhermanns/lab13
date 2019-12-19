const express = require('express');
const app = express();
//const jwt = require('jsonwebtoken');

app.use(express.json());
app.use('/api/v1/cats', require('./routes/cats'), require('./routes/auth'));
app.use(require('./middleware/verifyToken')());
app.use(require('./middleware/not-found'));
app.use(require('./middleware/error'));

module.exports = app; 
