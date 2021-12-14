const jwt = require('jsonwebtoken');

// Verifies the jwt in the request header.
module.exports = (req, res, next) => {
    const token = req.header('x-auth-token');
    if (!token) return res.status(401).send('Access denied. No token provided.');
    try {
        jwt.verify(token, 'privateKey', (err, decoded) => {
            req.user = decoded;
            if(err) res.status(401).send(err);
            next();
            
        });
    } catch (e) {
        res.status(400).send('Invalid token.');
    }
    
}