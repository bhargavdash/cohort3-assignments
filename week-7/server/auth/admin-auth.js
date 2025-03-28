const jwt = require('jsonwebtoken');
const dotenv = require('dotenv');
dotenv.config();

const jwt_secret = process.env.JWT_SECRET;

function adminAuthMiddleware(req, res, next){
    const token = req.headers.token;

    if(!token){
        return res.status(400).json({error: "Token not found"});
    }
    const decodedToken = jwt.decode(token, jwt_secret);
    if(!decodedToken){
        return res.status(400).json({error: "Token not matched"});
    }
    req.adminId = decodedToken.adminId;
    next();
}

module.exports = adminAuthMiddleware;