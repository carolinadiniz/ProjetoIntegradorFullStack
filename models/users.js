const mongoose = require('mongoose');

module.exports = () => {
    const Login = mongoose.model('Users', {
        email: String,
        password: String,
        type: String,
        name: String,
        posts : Object,
        profile: Object,
        followers: Object,
        following: Object,
        messages: Object,
    })

    return Login
}