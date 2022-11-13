const verify = require('../middlewares/verify');

module.exports = (app) => {

    const { register } = app.controllers;

    app.get('/register', register.newRegister)
}