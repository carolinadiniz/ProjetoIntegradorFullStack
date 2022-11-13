module.exports = (app) => {
    const Register = {
        newRegister: (req, res, next) => {
            res.render('register')
        }
    }
    return Register
}