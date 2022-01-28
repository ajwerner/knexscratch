const database = require('./database');

database.up().then(() => { console.log('up'); });
