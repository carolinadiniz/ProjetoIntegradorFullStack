module.exports = (app) => {
    const {home} = app.controllers
    app.get('/', (req, res, next) => { res.redirect('/login') })
    app.get('/login', home.home)
    app.post('/login', home.login)
}