let courses = [
    {
        title: "Event Driven Cakes",
        cost: 50
    },
    {
        title: "Asynchronous Artichoke",
        cost: 25
    },
    {
        title: "Object Oriented Orange Juice",
        cost: 10
    }
]
exports.index = (req, res) => {
    res.render('index')
}

exports.showCourses = (req, res) => {
    res.render('courses', {courses: courses})
}

exports.showSignUp = (req, res) => {
    res.render('contacts')
}

exports.postedSignUpForm = (req, res) => {
    res.render('thanks')
}
