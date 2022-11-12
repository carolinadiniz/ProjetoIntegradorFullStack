module.exports = (app) => {
    const {home} = app.controllers
    app.get('/', home.home)
    app.post('/login', home.login)
}