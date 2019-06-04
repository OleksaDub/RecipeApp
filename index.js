const express = require("express"),
    app = express(),
    homeController = require('./controllers/homeController'),
    path = require('path');

// DataBase Settings and Connection

const mongoose = require("mongoose");
mongoose.connect(
    "mongodb://localhost:27017/recipe_db",
    {useNewUrlParser: true}
);
const db = mongoose.connection;

// Application Settings

app.set("view engine", "ejs");
app.use(express.static(__dirname + '/public'));

app.use(express.urlencoded({
    extended: false
}));
app.use(express.json());


// Application Routes

app.get('/', homeController.index);
app.get('/courses', homeController.showCourses);
app.get('/contacts', homeController.showSignUp);
app.post('/contacts', homeController.postedSignUpForm);

app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname + '/public/404.html'));
})



const PORT = process.env.PORT || 3013;
app.listen(PORT, () => {
    console.log(`The app is listening on the port ${PORT}`)
});