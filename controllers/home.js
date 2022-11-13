const bcrypt = require('bcrypt');

module.exports = (app) => {
    const HomeController = {
        home: (req, res, next) => {
            res.render('login')
        },
        login: (req, res, next) => {
            // Get infomation from client
            const userLogin = req.body
            const { email, password } = userLogin

            // Verify if email exist
            const Login = app.models.users
            Login.findOne({ email: email.toLowerCase()})
            .then((user) => {
                // If user not exist, return error 401
                if (user === null) {
                    return res.status(401).send({message:'Falha na autenticação'})
                } else {
                    
                    // Compare Password Encryption
                    bcrypt.compare(password, user.password, (err, result) => {
                        if (result) {
                            const token = {
                                id_user: user._id,
                                email: user.email
                            }
                            req.session.token = token
                            res.redirect('/jobs')
                            console.log(`new login: _id ${user._id}`)
                        } else {
                            res.status(401).redirect('/')
                            console.log(`error password: ${email}`)
                        }
                    })


                }

            })
            .catch((err) => {
                console.log(err)
            })

        }
    }
    return HomeController;
}