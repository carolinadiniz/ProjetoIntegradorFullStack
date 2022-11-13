const jwt = require('jsonwebtoken')

module.exports = (req, res, next) => {

    try {
        // Get token from session
        const token = req.session.token
        
        //
        if (token == undefined) {
            res.status(401).redirect('/')
        }

        jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, (err, decoded) => {
            if (err) return res.status(401).redirect('/')

            req.session.user = decoded

            console.log(decoded)
        })   

        next()
    }
    catch (err) {
       return res.status(401).send({message: 'Falha na autenticação'})
    }
}