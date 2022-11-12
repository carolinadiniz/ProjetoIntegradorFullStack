module.exports = (app) => {
    const HomeController = {
        home: (req, res, next) => {
            res.render('login')
        },
        login: (req, res, next) => {
            res.send({msg: 'logged'})
        }
    }
    return HomeController;
}