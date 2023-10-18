const jwt = require('jsonwebtoken')
const secret = "TopGunMa73rick"
const authenticateJwt = (req, res, next) => {
    const authHeader = req.headers.authorization
    if (authHeader) {
        const token = authHeader.split(' ')[1]
        
        jwt.verify(token, secret, (err, user) => {
            if (err) return res.status(403)
            req.userId = user.id
            next()
        }
        )
    } else {
        res.status(401)
    }
}

module.exports = {
    secret, authenticateJwt
}