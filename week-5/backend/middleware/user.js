//  start writing from here

const jwt = require('jsonwebtoken');
const dotenv = require('dotenv')
dotenv.config();
const JWT_SECRET = process.env.JWT_SECRET;

function authMiddleware(req, res, next){
    const token = req.headers.token;
    if(!token){
        return res.status(400).json({error: "Token not available"});
    }
    const decodedToken = jwt.verify(token, JWT_SECRET);
    if(!decodedToken){
        return res.status(400).json({error: "Invalid token"});
    }
    req.userId = decodedToken.id;
    next();
}

module.exports = authMiddleware;