const jwt = require("jsonwebtoken");

//VERIFY TOKEN ONLY
const verifyToken = (req, res, next) => {
    const authHeader = req.headers.token;
    if(authHeader) {
        const token = authHeader.split(" ")[1];
        jwt.verify(token, process.env.JWT_SEC, (err, user)=> {
            if(err) res.status(403).json("Token is not valid");
            req.user = user;
            next();
        });
    } else {
        return res.status(401).json("You are not authenticated");
    }
};

//VERIFY TOKEN AND ADMIN
const verifyTokenAndAdmin = (req, res, next) => {
    verifyToken(req, res, ()=> {
        if(req.user.isAdmin){
            next();
        } else {
            res.status(401).json("You are not allowed, you need to be an administrator");
        }
    })
}

//VERIFY TOKEN, ADMIN AND USER ID
const verifyTokenAndAuthorization = (req, res, next) => {
    verifyToken(req, res, ()=> {
        if(req.user.id === req.params.id || req.user.isAdmin){
            next();
        } else {
            res.status(401).json("You are not allowed, user/admin issues");
        }
    })
}

module.exports = { verifyToken , verifyTokenAndAuthorization, verifyTokenAndAdmin};