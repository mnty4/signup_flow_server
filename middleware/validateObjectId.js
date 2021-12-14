const mongoose = require('mongoose');

// Validates that an id is a valid mongodb Object ID.
module.exports = (req, res, next) => {
    if(!mongoose.Types.ObjectId.isValid(req.params.id))
        return res.status(404).send('Invalid ID.');
    next();
}