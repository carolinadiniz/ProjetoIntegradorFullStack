module.exports = (app) => {
    const HomeController = {
        home: (req, res, next) => {
            res.render('login')
        }
    }
    return HomeController;
}