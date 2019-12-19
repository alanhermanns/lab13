require('dotenv').config();
require('./lib/utils/connect')();
const mongoose = require('mongoose');
const makeCatsInDb = require(__dirname + '/lib/utils/makeCats');
makeCatsInDb();




console.log(__dirname + '/lib/utils/makeCats');
