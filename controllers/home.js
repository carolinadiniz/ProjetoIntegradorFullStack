module.exports = (app) => {
    const HomeController = {
        home: (req, res, next) => {
            res.render('login')
        },
        login: (req, res, next) => {
            console.log(req.body)
        }
    }
    return HomeController;
}