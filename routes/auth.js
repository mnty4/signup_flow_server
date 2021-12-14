var express = require('express');
var router = express.Router();
const { User } = require('../models/user');
const bcrypt = require('bcrypt');
// POST login request.
router.post('/', async (req, res) => {

    // Check if user exists and displays generic error message if not.
    const user =  await User.findOne({ email: req.body.email });
    if (!user) return res.status(400).send('Invalid email or password.');

    // Validates password
    if (!await bcrypt.compare(req.body.password, user.password)) return res.status(400).send('Invalid email or password.');

    // response contains the jwt
    const token = user.generateAuthToken();
    res.header('x-auth-token', token).send(token);

});

module.exports = router;
