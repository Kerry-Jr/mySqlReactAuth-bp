const { genSalt, hash, compare } = require('bcryptjs');
const connection = require('./../../config/connection');
const userQueries = require('./userQueries');


const findUserById = async id => {
  try {
    const [ row, fields ] = await connection.query(userQueries.findUserById, id);
    console.log(row);
    return Promise.resolve(row[0]);
  } catch (e) {
    console.log(e);
    return Promise.reject(e);
  }
}

const findUserByEmail = async email => {
  try {
    const [ row ] = await connection.query(userQueries.findUserByEmail, email);
    return Promise.resolve(row[0]);
  } catch (e) {
    console.log(e);
    return Promise.reject(e);
  }
}

const createUser = async (email, password) => {
  try {
    const salt = await genSalt();
    const hashedPassword = await hash(password, salt);
    const [ result ] = await connection.query(userQueries.createUser, [email, hashedPassword]);
    const [ userRow ] = await connection.query(userQueries.findUserById, result.insertId);
    return Promise.resolve(userRow[0]);
  } catch (e) {
    return Promise.reject(e);
  }
}

const comparePassword = async (candidatePassword, userpassword) => {
  return Promise.resolve(await compare(candidatePassword, userpassword));
}


module.exports = {
  findUserById,
  findUserByEmail,
  createUser,
  comparePassword,
};
