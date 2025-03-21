const jwt = require('jsonwebtoken');
const dotenv = require('dotenv');
dotenv.config();

const JWT_TOKEN = process.env.JWT_TOKEN;

function authMiddleware(req, res, next){
    const token = req.headers.token;
    if(!token){
        return res.status(400).json({error: "Token not found"});
    }
    const decodedToken = jwt.decode(token, JWT_TOKEN);
    if(!decodedToken){
        return res.status(400).json({error: "Authentication failed"});
    }
    req.userId = decodedToken.userId;
    next();
}

module.exports = authMiddleware;