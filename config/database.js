// Asynchronous
const crypto = require('crypto').randomBytes(256).toString('hex');
module.export = {
    uri: 'mongodb://localhost:/' + this.db,
    secret : crypto,
    db : 'meanstack'
}