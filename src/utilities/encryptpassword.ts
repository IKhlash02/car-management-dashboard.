//@ts-ignore
const bcrypt = require("bcryptjs");

const salt = 10;

function encryptPassword(pass: String) {
  return new Promise((resolve, rejects) => {
    bcrypt.hash(pass, salt, (err: Error, encryptPassword: String) => {
      if (err) {
        rejects(err);
        return;
      }

      resolve(encryptPassword);
    });
  });
}

module.exports = encryptPassword;
