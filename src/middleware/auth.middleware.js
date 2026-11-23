const jwt = require("jsonwebtoken")

function authUser(req, res, next){

    const token = req.cookie.token

    if(!token) {
        return res.status(401).json({
            message: "Token not provide"
        })
    }
    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET)
    } catch (error) {
        return res.status(401).json({
            message: "Invalid Token"
        })
    }
}