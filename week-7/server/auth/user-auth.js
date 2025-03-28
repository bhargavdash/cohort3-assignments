const jwt = require('jsonwebtoken');
const dotenv = require('dotenv');
dotenv.config();

const jwt_secret = process.env.JWT_SECRET;

function userAuthMiddleware(req, res, next){
    const token = req.headers.token;
    if(!token){
        return res.status(400).json({error: "Token not found"});
    }

    const decodedToken = jwt.decode(token, jwt_secret);
    if(!decodedToken){
        return res.status(400).json({error: "Authentication failed"});
    }
    req.userId = decodedToken.userId;

    next();
}

module.exports = userAuthMiddleware