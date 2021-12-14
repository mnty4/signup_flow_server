const mongoose = require('mongoose');
const jwt = require('jsonwebtoken');
const Joi = require('joi');

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        minlength: 3,
        maxlength: 50,
        require: true
    },
    email: {
        type: String,
        minlength: 5,
        maxlength: 50,
        require: true
    },
    password: {
        type: String,
        minlength: 5,
        maxlength: 255,
        require: true
    }
});

// Generates an jwt containing the object ID of the user.
userSchema.methods.generateAuthToken = function() {
    const token = jwt.sign({ _id: this._id }, 'privateKey');
    return token;
}

const User = mongoose.model('User', userSchema);

module.exports.User = User;

// Validates user info with Joi.
module.exports.validateUser = async (user) => {
    const schema = Joi.object({ //\p{L}
        name: Joi.string().min(3).max(50).required(),
        email: Joi.string().email({ tlds: { allow: false } }).min(3).max(50).required(),
        password: Joi.string().min(5).max(50).required()
    });

    return schema.validate(user);
}

