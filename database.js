const mongoose = require('mongoose');

mongoose.connect(`mongodb+srv://${process.env.DB_HOSTNAME}:${process.env.DB_PASSWORD}@project.kcg7wqs.mongodb.net/ProjectCampinho?retryWrites=true&w=majority`)
.then(() => {
    console.log('MongoDB connection successful')
})
.catch((err) => {
    console.log(err)
})