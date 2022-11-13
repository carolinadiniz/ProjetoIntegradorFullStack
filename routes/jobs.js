const verify = require('../middlewares/verify');

module.exports = (app) => {
    
    app.get('/jobs', verify, (req, res, next) => {
        res.send({msg:"oi"})
    })
}