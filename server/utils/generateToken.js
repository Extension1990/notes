const jwt = require("jsonwebtoken");

const generateToken = (_id) => {
  return jwt.sign({ _id }, process.env.JWT_TOKEN, {
    expiresIn: "30d",
  });
};

module.exports = generateToken;