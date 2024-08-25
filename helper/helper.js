const bcrypt = require('bcrypt');
const saltRounds = 12;

const bcryptHash = async (text) => {
    const salt = await bcrypt.genSalt(saltRounds);
    const result = await bcrypt.hash(text, salt)
    return result.toString();
}

const hashCheck = async (text,hashPas) => {
    const result = await bcrypt.compare(text,hashPas);
    return result;
}

module.exports = {
    bcryptHash,hashCheck
}