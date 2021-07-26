const secretKey = require('crypto').randomBytes(48).toString('hex');

module.exports = {
        'secretKey' : secretKey,
        'mongoUrl' : 'mongodb://localhost:27017/melon',
}