module.exports = (app) => {
    const HomeController = {
        home: (req, res, next) => {
            res.send({msg: "working demais"})
        }

    }
    return HomeController;
}