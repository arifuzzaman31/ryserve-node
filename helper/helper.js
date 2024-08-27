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
const slugify = (text) => {
    return text
    .toString()
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .toLowerCase()
    .trim()
    .replace(/\s+/g, '-')
    .replace(/[^\w-]+/g, '')
    .replace(/--+/g, '-');
}
module.exports = {
    bcryptHash,hashCheck,slugify
}