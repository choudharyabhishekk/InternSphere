const authModel = require("../Model/Authentication.js");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");
const { sign } = require("jsonwebtoken");
const secret = "test";
const signin = async (req, res) => {
  const { email, password } = req.body;
  try {
    const oldUser = await authModel.findOne({ email });

    const checkPassword = await bcrypt.compare(password, oldUser.password);

    if (!checkPassword)
      return res.status(400).json({ message: "invalid credentials" });

    if (!oldUser) {
      return res.status(404).json({ message: "user not exists" });
    } else {
      const result = jwt.sign(
        { email: oldUser.email, id: oldUser._id },
        secret,
        { expiresIn: "1h" }
      );
      res.status(201).json({ result, message: "Login Successfully." });
    }
  } catch (error) {
    console.log(error);
  }
};
const signup = async (req, res) => {
  const { email, password, firstname, lastname } = req.body;

  console.log(email, "emailllll");
  try {
    const oldUser = await authModel.findOne({ email });
    const hashPassword = await bcrypt.hash(password, 12);
    if (oldUser)
      return res.status(404).json({ message: "user already exists" });
    const result = await authModel.create({
      email: email,
      password: hashPassword,
      name: `${firstname}${lastname}`,
    });
    const token = jwt.sign({ email: email, id: result._id }, secret, {
      expiresIn: "1h",
    });
    res.status(200).json({ result, token });
  } catch (error) {
    console.log(error);
  }
};
module.exports = { signin, signup };
