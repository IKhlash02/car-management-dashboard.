//@ts-ignore
const bcrypt = require("bcryptjs");

function checkPassword(passEncrypted: string, pass: string) {
  return new Promise((resolve, reject) => {
    bcrypt.compare(pass, passEncrypted, (err: Error, isEncrypted: boolean) => {
      if (err) {
        reject(err);
        return;
      }

      resolve(isEncrypted);
    });
  });
}

module.exports = checkPassword;
