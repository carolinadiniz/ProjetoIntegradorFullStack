module.exports = (app) => {
    const HomeController = {
        home: (req, res, next) => {
            app.models.database
            console.log('oi')
            res.render('login')
        },
        login: (req, res, next) => {
            // Ger infomation for login
            const userLogin = req.body
            const { email, password } = userLogin

            

        }
    }
    return HomeController;
}