const User = require("../models/Users");
const Jobs = require("../models/Jobs");
const jwt = require("jsonwebtoken");
const bcrypt = require('bcrypt');
const { BadRequestError, UnauthError } = require("../errors");

const register = async (req, res) => {
  //encrypting is storing your data behind a firewall

  //hashing scrambles your data into a string of uniform size 
  // const { name, password, email } = req.body;
  // console.log(password);

  // //salt is a random bit combination (11010) that is included in the hash
  // //the salt is then added to the hash so the verifier can check even with randomness
  // //pepper adds a single letter (a-zA-Z) to the end of your password
  // const salt = await bcrypt.genSalt(10);
  // const hashpass = await bcrypt.hash(password, salt);
  // console.log(hashpass);
  const newUser = await User.create(req.body);
  const token = newUser.createJWT();
  // const token = jwt.sign({ name, email, password }, process.env.JWT_SECRET, {
  //   expiresIn: "30d",
  // });
  res.json({ user: {name: newUser.name}, token});
};

const login = async (req, res) => {
  const { email, password } = req.body;
  if(!email || !password){
    throw new BadRequestError('Please provide a username and password')
  }
  const userLogin = await User.findOne({email});

  if(!userLogin){
    throw new UnauthError('Invalid credentials');
  }

  const isPasswordCorrect = await userLogin.comparePassword(password);

  // console.log(isPasswordCorrect)
  console.log(password)

  if(!isPasswordCorrect){
    throw new UnauthError('Invalid credentials')
  }

  const token = userLogin.createJWT()
  res.json({ user: {name: userLogin.name}, token});
};

module.exports = { login, register };
