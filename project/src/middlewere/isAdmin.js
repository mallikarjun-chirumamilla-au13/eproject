const isAdmin = (req, res, next) => {
    if (req.session.user) {
        if (req.session.user.email == '335mallikarjun@gmail.com') {
            next();
        } else {
            return res.send('Acess denied,Sorry you are not a Admin');
        }
    } else {

        return res.redirect('/');
    }
}

module.exports = isAdmin;