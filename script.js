const jwt = require('jsonwebtoken');

// Replace this with a secure key and store it in an environment variable in production
const secretKey = 'your_secret_key';

const encrypt = (payload) => {
  return jwt.sign(payload, secretKey, {
    algorithm: 'HS256',
    expiresIn: '2h', // Token expires in 2 hours
  });
};

const decrypt = (token) => {
  try {
    return jwt.verify(token, secretKey);
  } catch (error) {
    if (error.name === 'TokenExpiredError') {
      console.error('Token has expired');
    } else {
      console.error('Invalid token:', error.message);
    }
    return null;
  }
};

module.exports = { encrypt, decrypt };
