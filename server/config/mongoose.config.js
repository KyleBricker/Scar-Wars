const mongoose = require('mongoose');

mongoose.set('runValidators', true)
mongoose.connect("mongodb://localhost/scarwars", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false
})
    .then(() => console.log("Connected to the database"))
    .catch(err => console.log("Something went wrong when connecting to the database", err));