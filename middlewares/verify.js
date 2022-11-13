const jwt = require('jsonwebtoken')

module.exports = (req, res, next) => {
    try {
        // Get token from session
        const token = req.session.token
        
        //
        if (token == undefined) {
            res.status(401).redirect('/login')
        }

        jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, (err, decoded) => {
            if (err) return res.status(401).redirect('/login')

            req.session.user = decoded
        })   

        next()
    }
    catch (err) {
       return res.status(401).send({message: 'Falha na autenticação'})
    }
}