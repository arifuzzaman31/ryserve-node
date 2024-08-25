const jwt = require('jsonwebtoken');

export const generateUserToken = async(userData) => {
    const payload = {
        id: userData.id,
        name: userData.name,
        email: userData.email,
        phoneNumber: userData.phoneNumber,
        platform: userData.platform
      };
      const secret = process.env.JWT_SECRET;
      const expireTime = process.env.JWT_EXPIRES_IN;
      const options = { expiresIn: expireTime };
      const token = jwt.sign(payload, secret, options);
      return token;
}
export const userByToken = async(token) => {
    const secret = process.env.JWT_SECRET;
    var authorization = token.split(' ')[1];
    const info = jwt.verify(authorization, secret);
    return info;
  }