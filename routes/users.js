var express = require('express');
var router = express.Router();
const { User, validateUser } = require('../models/user');
const bcrypt = require('bcrypt');
const auth = require('../middleware/auth');
const validateObjectId = require('../middleware/validateObjectId');

// GET current user info.
router.get('/me', [auth], async (req, res) => {
  try {
    // Checks if user exists.
    const user = await User.findById(req.user._id);
    if(!user) return res.status(404).send('No users with this id were found.');

    // Removes password from the user object we will send to the client.
    user.password = undefined;
    res.send(user);
  } catch (e) {
    // A catch for the findById method which will throw an error if the id is not a 
    // valid object ID but this should not be possible.
    console.error(e);
    return res.status(500).send('internal server error');
  }
});

// POST register request.
router.post('/', async (req, res) => {
  // Checks if user already exists.
  let user = await User.findOne({ email: req.body.email });
  if (user) return res.status(400).send('User with that email already exists.');

  newUser = {
    name: req.body.name,
    email: req.body.email,
    password: req.body.password
  };
  // Validates the user details.
  const { error } = await validateUser(newUser);
  if(error) return res.status(400).send(error.details[0].message);

  user = new User(newUser);

  // Hash's the user's password before saving it to the database.
  const saltRounds = 10;
    bcrypt.genSalt(saltRounds, (err, salt) => {
      bcrypt.hash(user.password, salt, async (err, hash) => {
        user.password = hash;
        await user.save();
        const token = user.generateAuthToken();
        res
          // .header('x-auth-token', token)
          // .header('Access-Control-Expose-Headers', 'x-auth-token')
          .send(token);
      });
    });
});

module.exports = router;
