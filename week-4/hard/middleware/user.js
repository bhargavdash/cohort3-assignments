const dotenv = require('dotenv');
const jwt = require('jsonwebtoken');
const JWT_SECRET = process.env.JWT_SECRET;

function userMiddleware(req, res, next) {
    // Implement user auth logic
    const token = req.headers.token;
    if(!token){
        return res.status(400).json({error: "Token not available"});
    }
    const decodedToken = jwt.verify(token, JWT_SECRET);
    if(!decodedToken){
        return res.status(400).json({error: "Unauthorized Access"});
    }
    req.userId = decodedToken.id;
    next();
}

module.exports = userMiddleware;