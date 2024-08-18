const jwt = require("jsonwebtoken");
const dotenv = require("dotenv");
dotenv.config();


const setJWTcookie = (userID, res) => {
  const token = jwt.sign({ userID }, process.env.JWT_KEY, { expiresIn: "15d" });

  res.cookie("token", token);
};

console.log(process.env.JWT_KEY);

module.exports = setJWTcookie;
